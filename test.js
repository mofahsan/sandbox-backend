const cache = require("node-cache")

const myCache = new cache( { stdTTL: 100, checkperiod: 120 } );

const success = myCache.set( "myKey", {name:"ahsan"}, 1 );

setTimeout(() => {
    console.log(myCache.get("myKey"))
}, 500); // Wait for 2 seconds (2000 milliseconds)

  setTimeout(() => {
    console.log(myCache.get("myKey"),"@")
}, 5000); // Wait for 2 seconds (2000 milliseconds)


