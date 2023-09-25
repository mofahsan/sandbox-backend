// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const router = require("express").Router()
const axios = require("axios")
const server_url = process.env.mockUrl
const {insertRequest,getCache} = require("../cache-utils/utils")

router.post("/:method",async(req,res)=>{
    try{
        const method = req.params.method, body = req.body
        const response  =  await axios.post(`${server_url}/${method}`,body)
        insertRequest(body)
        res.send(response.data)
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


module.exports = router
