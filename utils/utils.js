const cache = require("node-cache")
const {createAuthorizationHeader, isSignatureValid} = require("ondc-crypto-sdk-nodejs")
const axios = require("axios");
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

async function generateHeader(message){
    const result =  await createAuthorizationHeader({
       message: message,
       privateKey: process.env.PRIVATE_KEY , //SIGNING private key
       bapId: process.env.BAPID , // Subscriber ID that you get after registering to ONDC Network
       bapUniqueKeyId: process.env.UNIQUE_KEY, // Unique Key Id or uKid that you get after registering to ONDC Network
     })
     
     return result
       
   }

   function deleteCache(transactionId) {
    return myCache.set(transactionId,[],15000)
}

const verifyHeader = async (req, lookup_uri) => {
    const headers = req.headers;
    const public_key = await getPublicKey(lookup_uri, headers);
    // logger.info(`Public key retrieved from registry : ${public_key}`);
    // const public_key = security.publickey;
    //Validate the request source against the registry
    const isValidSource = await isSignatureValid({
      header: headers.authorization, // The Authorisation header sent by other network participants
      body: req.body,
      publicKey: public_key,
    });
    if (!isValidSource) {
      return false;
    }
    return true;
  };

const getPublicKey = async (lookupUri, header) => {
try {
    // let lookupUri = "https://preprod.registry.ondc.org/ondc/lookup";
    const extractSubscriberIdukId = extractSubscriberId(header);
    const subscriberId = extractSubscriberIdukId.subscriberID;
    const ukId = extractSubscriberIdukId.uniquePublicKeyID;
    let publicKey;
    await axios
    .post(lookupUri, {
        subscriber_id: subscriberId,
        ukId: ukId,
    })
    .then((response) => {
        response = response.data;
        publicKey = response[0]?.signing_public_key;
    });

    return publicKey;
} catch (error) {
    console.trace(error);
}
};

const extractSubscriberId = (header) => {
// Find the Authorization header
const authorizationHeader = header.authorization;
const regex = /keyId="([^"]+)"/;
const matches = regex.exec(authorizationHeader);
const keyID = matches[1];
if (keyID) {
    // Split the header value using the delimiter '|'
    const parts = keyID.split("|");

    // Check if the parts array has at least two elements
    if (parts.length >= 2) {
    const subscriberID = parts[0];
    const uniquePublicKeyID = parts[1];
    // Return an object with both values
    return { subscriberID, uniquePublicKeyID };
    }
}
return null; // Subscriber ID not found
};

const insertSession = (session) => {
    console.log("session", session)
   myCache.set("jm_" + session.transaction_id, session) 
};   


module.exports = {
insertRequest,getCache,generateHeader,deleteCache, verifyHeader, insertSession
}

