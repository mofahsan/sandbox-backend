const cache = require("node-cache")

const myCache = new cache( { stdTTL: 100, checkperiod: 120 } );

function  insertRequest(request,header){
let response = myCache.get(request.context.transaction_id)||[]
const order = response.length >= 1 ? response[response.length-1].order+1 : 1
const date = new Date()
myCache.set(request.context.transaction_id,[...response,{action: request.context.action,order:order,header:header?header:null,timestamp:date,data:request}],15000)
return order
}

function getCache(key){
    if(key === undefined || key===""){
        return myCache.keys()
    }
    
    return myCache.get(key)
}

const getCallback = () => {

}

module.exports = {
insertRequest,getCache,getCallback
}

