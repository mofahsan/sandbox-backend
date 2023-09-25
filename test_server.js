const express = require("express")
const app = express()
require('dotenv').config()
const router = require("./router/route"
)

app.use(express.json())


app.use("*",(req,res)=>{
    console.log("req received")
    res.send("hello")
})

app.listen(5500,()=>{
console.log("server listening at port 5500")

})
