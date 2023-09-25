const express = require("express")
const app = express()
require('dotenv').config()
const router = require("./router/route"
)

app.use(express.json())


app.use(router)

app.listen(3000,()=>{
console.log("server listening at port 3000")

})
