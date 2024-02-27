process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const fs = require("fs");
const path = require("path")
const yaml = require("js-yaml");
const router = require("express").Router()
const axios = require("axios")
const mockUrl = process.env.mockUrl ,callbackUrl = process.env.callbackUrl , GATEWAY_URL = process.env.GATEWAY_URL
const {
  insertRequest,
  getCache,
  generateHeader,
  deleteCache,
  verifyHeader,
  insertSession,
  createHeaderFromId,
  handleRequestForJsonMapper
} = require("../utils/utils");
const {createBecknObject} = require('../utils/buildPayload')
const {apiResponse} = require("../utils/response")
const {createHeader} = require("../header")
const {extractPath} = require("../utils/buildPayload")
const {configLoader} = require("../configs/index")


// console.log("config>>>>", JSON.stringify(configLoader.getConfig(), null, 2))
//router.get("*",async(req,res)=>{
//	console.log(req.url)
//	res.send("server working")

//})

router.post("/createHeader", async function (req,res) {
  try {
    const response = await generateHeader(req.body)
    res.setHeader("Authorization",response)
    res.setHeader("Access-Control-Expose-Headers","*")
      return res.send(req.body)
  } catch (error) {
    console.error(error);
    res.status(500).send("an error occurred")
   
  }
});

router.post("/:method",async(req,res)=>{
    try{
        const method = req.params.method, body = req.body
        if(!body?.context?.bap_uri || !body?.context?.transaction_id || !body?.context?.bpp_uri && req.params.method !== 'search'  ){
            return res.status(400).send({data:"validations failed bap_uri || transactionid || bppuri missing"})
        }

        body.context.bap_uri=`${callbackUrl}/ondc/`
        let url ;

        if(req.params.method == 'search'){
            url = GATEWAY_URL
        }else{
            url = body.context.bpp_uri
        }

        if(url[url.length-1]!="/"){ //"add / if not exists in bap uri"
            url=url+"/"
          }

        const header ={headers:{Authorization:await generateHeader(req.body)}}

        insertRequest(body,req.headers)
        const response  =  await axios.post(`${url}${method}`,body,header)
        

        // if(original_uri[original_uri.length-1]!="/"){ //"add / if not exists in bap uri"
        //     original_uri=original_uri+"/"
        //   }
        // axios.post(`${original_uri}${response.data.context.action}`,response.data,{headers:{Authorization:await generateHeader(response.data)}}).catch((err)=>{ //hit back on original uri
        //     console.log(original_uri+"is incorrect")
        // })

        res.status(response.status).send(response.data)


    }catch(err){
        res.status(err?.response?.status || 500).send(err?.response?.data ? err?.response?.data :err.message)
    }
})

router.get("/cache",async(req,res)=>{
    try{
        const response = getCache(req.query.transactionid) || {message:'TransactionId does not have any data'}
        res.send(response)
    }
    catch(err){
        console.log(err)
    }
})

router.post("/ondc/:method", async (req, res) => {
  let body = req.body;

  console.log("message recieved", body)

  if (process.env.ENABLE_SIGNATURE_VALIDATION === "true") {
    const isValid = await verifyHeader(req, process.env.LOOKUP_URL)
    if (isValid){ 
        insertRequest(body, req.headers);
        const ack = {
          message: {
            ack: {
              status: "ACK",
            },
          },
        };
        res.status(200).json(ack);
        console.log(req.body.context, "recieved context");
        console.log(ack, "response");
    } else {
        const nack = {
            message: {
              ack: {
                status: "NACK",
              },
            },
          };
          res.status(400).json(nack);
      
    }
  } else {
    insertRequest(body, req.headers);
    handleRequestForJsonMapper(body)
    const ack = {
      message: {
        ack: {
          status: "ACK",
        },
      },
    };
    res.status(200).json(ack);
  }
});


router.delete("/cache",(req,res)=>{
    try {
        const transactionId = req.query.transactionid;
        console.log("83",transactionId)
        const deleted = deleteCache(transactionId);
        if (deleted) {
            console.log("87",transactionId)

            res.send({ message: 'Response data for the transaction ID has been deleted' });
        } else {
            res.send({ message: 'TransactionId not found in cache' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
})

// JSON mapper

router.post("/mapper/session", (req, res) => {
  const {
    version,
    country,
    cityCode,
    transaction_id,
    configName
  } = req.body;


  if (
    !version ||
    !country ||
    !cityCode ||
    !transaction_id ||
    !configName
  ) {
    return res.status(400).send({
      data: "validations failed version || country || cityCode || transaction_id || configName missing",
    });
  }

  console.log("body>>>>>", req.body)

  try {
    const {
      filteredCalls,
      filteredInput,
      filteredDomain,
      filteredSessiondata,
      filteredAdditionalFlows,
      filteredsummary
    } = configLoader.getConfigBasedOnFlow(configName);

    const session = {
      ...req.body,
      bap_id: "mobility-staging.ondc.org",
      bap_uri: process.env.callbackUrl,
      ttl: "PT10M",
      domain: filteredDomain,
      summary: filteredsummary,
      ...filteredSessiondata,
      currentTransactionId: transaction_id,
      transactionIds: [transaction_id],
      input: filteredInput,
      protocolCalls: filteredCalls,
      additioalFlows: filteredAdditionalFlows
    };

    // console.log("crfeating session", session)

    insertSession(session);
    res.send({ sucess: true, data: session });
  } catch (e) {
    console.log("Error while creating session", e);
    res.status(500).send("Internal Server Error");
  }
});

router.post("/mapper/timeout", async (req, res) => {
  
  const {config, transactionId} = req.body

  if(!config || !transactionId) {
    return res.status(400).send({data:"validations failed config || transactionid missing"})
  }

  let session = getCache("jm_" + transactionId);

  if(!session) {
    return res.status(400).send({data: "No session found."})
  }

  session.protocolCalls[config].shouldRender = false
  const preConfig = session.protocolCalls[config].preRequest

  session.protocolCalls[preConfig] = {
    ...session.protocolCalls[preConfig],
    executed: false,
    shouldRender: true,
    becknPayload: null,
    businessPayload: null,
    messageId: null
  }

  insertSession(session)
  return res.status(200).send({session})
})

router.post("/mapper/extractPath", (req, res) => {
  const { path, obj } = req.body;

  if (!path || !obj) {
    return res.status(400).send({ data: "missing path || obj " });
  }
  try {
    const response = extractPath(path, obj);

    res.send({ response });
  } catch (e) {
    console.log("Error while extracting path", e);
    res.status(400).send({ error: true, data: e });
  }
});

router.post("/mapper/repeat", async (req, res) => {
  const {transactionId, callType} = req.body

  if(!transactionId || !callType) {
    return res.status(400).send({data: "missing transactionId || callType"})
  }

  let session = getCache("jm_" + transactionId);

  if(!session) {
    return res.status(400).send({data: "No session found."})
  }

  const newProtocolCall = {}
  let foundCall = false

  Object.entries(session.protocolCalls).map(item => {
    const [key, call] = item

    if(foundCall) {
      call.becknPayload = null
      call.businessPayload = null
      call.messageId = null
      call.executed = false
      call.shouldRender = false
    }

    if(call.type === callType) {
      call.becknPayload = null
      call.businessPayload = null
      call.messageId = null
      call.executed = false
      call.shouldRender = true

      foundCall = true
    }

    newProtocolCall[key] = call
  })

  session.protocolCalls = newProtocolCall
  insertSession(session)

  res.send({session})
})

router.post("/mapper/addFlow", (req, res) => {
  const {configName, transactionId} = req.body

  let session = getCache("jm_" + transactionId);

  if(!session) {
    return res.status(400).send({data: "No session found."})
  }

  const {filteredCalls, filteredInput} = configLoader.getConfigBasedOnFlow(configName)

  session.protocolCalls = {...session.protocolCalls, ...filteredCalls}
  session.input = {...session.input, ...filteredInput}

  insertSession(session)

  res.send({session})
})

router.post("/mapper/:config", async (req, res) => {
  const { transactionId, payload } = req.body;
  const config = req.params.config;
  let session = getCache("jm_" + transactionId);

  if(!session) {
    return res.status(400).send({message: "No session exists"})
  }

  try {
    const {payload: becknPayload, session: updatedSession} = createBecknObject(
      session,
      session.protocolCalls[config],
      payload,
      session.protocolCalls[config].protocol
    );

    session = updatedSession
    insertRequest(becknPayload, null);
    session.protocolCalls[config] = {
      ...session.protocolCalls[config],
      executed: true,
      shouldRender: true,
      becknPayload: becknPayload,
      businessPayload: payload,
      messageId: becknPayload.context.message_id
    }
    session = {...session, ...payload}

    // const header = {};
    // header.headers = { ...header.headers, "Content-Type": "text/plain;charset=utf-8" };
    // const response = await axios.post(
    //   `http://localhost:5500/${session.protocolCalls[config].type}`,
    //   JSON.stringify(becknPayload, null, 2),
    //   header
    // );

    const CALLBACK_URL = process.env.callbackUrl
    const STAGING_GATEWAY_URL = "https://staging.gateway.proteantech.in/"
    const SIGNING_PRIVATE_KEY =
      "Un205TSOdDXTq8E+N/sJOLJ8xalnzZ1EUP1Wcv23sKx70fOfFd4Q2bzfpzPQ+6XZhZv65SH7Pr6YMk8SuFHpxQ==";
    const BAP_ID = "mobility-staging.ondc.org";
    const UNIQUE_KEY_ID = "UK-MOBILITY";
    const type = session.protocolCalls[config].type

    becknPayload.context.bap_uri=`${CALLBACK_URL}/ondc`
    let url ;

    if(type == 'search'){
        url = STAGING_GATEWAY_URL
    }else{
        url = becknPayload.context.bpp_uri
    }

    if(url[url.length-1]!="/"){ //"add / if not exists in bap uri"
        url=url+"/"
      }

    console.log("becknPayload", JSON.stringify(becknPayload))

    const signedHeader = await createHeader(becknPayload)
    console.log("SignedHeader", signedHeader)

    const header ={headers:{Authorization: signedHeader}}

    const response  =  await axios.post(`${url}${type}`,becknPayload,header)
    
    console.log("res>>>>>>", response.data)

    session.protocolCalls[config] = {
      ...session.protocolCalls[config],
     becknResponse: response.data
    }

    // const response = {data: "afsa"}

    const nextRequest = session.protocolCalls[config].nextRequest
 
    session.protocolCalls[nextRequest] = {
      ...session.protocolCalls[nextRequest],
      shouldRender: true,
    }

    insertSession(session)
    // // For tesitng
    // handleRequestForJsonMapper(apiResponse(config, transactionId, becknPayload.context.message_id))
    // if(config === "confirm") {
    //   handleRequestForJsonMapper(apiResponse("update", transactionId), true)
    // }
    res.status(200).send({response: response.data, session})
  } catch (e) {
    console.log("Error while sending request", e);
    return res.status(500).send({data: "Error while sending reques", e});
  }
});

module.exports = router
