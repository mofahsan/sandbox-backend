process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const router = require("express").Router()
const axios = require("axios")
const mockUrl = process.env.mockUrl ,callbackUrl = process.env.callbackUrl
const {insertRequest,getCache,generateHeader} = require("../utils/utils")
const asynchronous = process.argv[2]
if(asynchronous){
    console.log("server running in asynchronous mode")
}else{
    console.log("server will run in synchronous mode")
}


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
        if(!body?.context?.bap_uri || !body?.context?.transaction_id){
            return res.status(400).send("validations failed")
        }
        //change bapuri
        let original_uri = body.context.bap_uri
        body.context.bap_uri=`${callbackUrl}/callback`
        const header ={headers:{Authorization:await generateHeader(req.body)}}
        const response  =  await axios.post(`${mockUrl}/${method}`,body,header)

        if(response.data.message.ack.status=="NACK")return res.send(response.data)

        const order = insertRequest(body,req.headers)
        // if asynchronous
        if(asynchronous){

        //    const requestTimeout =  setTimeout(()=>{
        //         return res.status(400).send("Request Timed Out")
        //     },(20000))

        const interval =  setInterval(async() => {
            const data = getCache(body.context.transaction_id)
            const response = data.find((element)=>element.order>order && element.action ==='on_'+method)
            if(response?.data){
                response.data.context.bap_uri = original_uri //replace original uri back
                clearInterval(interval)
                // clearTimeout(requestTimeout)
                if(original_uri[original_uri.length-1]!="/"){ //"add / if not exists in bap uri"
                    original_uri=original_uri+"/"
                  }
                axios.post(`${original_uri}${response.data.context.action}`,response.data,{headers:{Authorization:await generateHeader(response.data)}}).catch((err)=>{ //hit back on original uri
                    console.log(original_uri+"is incorrect")
                })
                return res.send(response.data)
            }else{
                clearInterval(interval)
                return res.send("an error occurred")
            }
        }, 2000);
    }else{
        // synchronous
        insertRequest(response.data,response.headers)
         res.send(response.data)
    }
    }catch(err){
        console.log(err)
        res.send(err.message?err.message:err?.response?.data)
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

router.post("/callback/:method",(req,res)=>{
    let body = req.body
     insertRequest(body,req.headers)
})


module.exports = router
