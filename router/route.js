process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const router = require("express").Router()
const axios = require("axios")
const server_url = process.env.mockUrl
const {insertRequest,getCache} = require("../utils/utils")
const asynchronous = process.argv[2]

router.post("/:method",async(req,res)=>{
    try{
        const method = req.params.method, body = req.body
        //change bapuri
        const original_uri = body.context.bap_uri
        body.context.bap_uri=`http://127.0.0.1:3000/callback`

        const response  =  await axios.post(`${server_url}/${method}`,body)
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
        insertRequest(response.data)
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
     insertRequest(body)
})


module.exports = router
