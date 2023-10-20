process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const router = require("express").Router()
const axios = require("axios")
const server_url = process.env.mockUrl ,callbackUrl = process.env.callbackUrl
const {insertRequest,getCache} = require("../utils/utils")
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


router.post("/:method",async(req,res)=>{
    try{
        const method = req.params.method, body = req.body
        const headers = req.headers.authorization?{Authorization:req.headers.authorization}:{}
        //change bapuri
        const original_uri = body.context.bap_uri
        body.context.bap_uri=`${callbackUrl}/callback`
        const response  =  await axios.post(`${server_url}/${method}`,body,{headers:headers})
        const order = insertRequest(body,req.headers)

        // if asynchronous
        if(asynchronous){
        const interval =  setInterval(() => {
            const data = getCache(body.context.transaction_id)
            const response = data.find((element)=>element.order>order && element.action ==='on_'+method)
            if(response){
                response.data.context.bap_uri = original_uri //replace original uri back
                clearInterval(interval)
                return res.send(response.data)
            }
        }, 2000);
    }else{
        // synchronous
        insertRequest(response.data,response.headers)
         res.send(response.data)
    }
    }catch(err){
        console.log(err)
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
