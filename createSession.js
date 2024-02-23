const axios = require('axios');
let data = JSON.stringify({
  "version": "2.0.0",
  "country": "IND",
  "cityCode": "std:044",
  "configName": "metro-flow-1",
  "transaction_id": "629fdfe9-e77c-4d79-aa94-2da2de09f660",
  "message_id": "729fdfe9-e77c-4d79-aa94-2da2de09f660"
});

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: 'http://localhost:4000/mapper/session',
  headers: { 
    'Accept': 'application/json, text/plain, */*', 
    'Accept-Language': 'en-GB,en-US;q=0.9,en;q=0.8', 
    'Connection': 'keep-alive', 
    'Content-Type': 'application/json', 
    'Origin': 'https://mobility-staging.ondc.org', 
    'Referer': 'https://mobility-staging.ondc.org/', 
    'Sec-Fetch-Dest': 'empty', 
    'Sec-Fetch-Mode': 'cors', 
    'Sec-Fetch-Site': 'same-origin', 
    'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/121.0.0.0 Safari/537.36', 
    'sec-ch-ua': '"Not A(Brand";v="99", "Google Chrome";v="121", "Chromium";v="121"', 
    'sec-ch-ua-mobile': '?0', 
    'sec-ch-ua-platform': '"macOS"'
  },
  data : data
};

setTimeout(()=>{
  axios.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
  })
  .catch((error) => {
    console.log(error);
  });
},5)


