const express = require("express")
const app = express()
const cors = require("cors")
require('dotenv').config()

app.use(cors())

const router = require("./router/route"
)

const PORT = process.env.PORT
app.use(express.json())

app.use((req, res, next) => {
    // Allow all origins for demonstration purposes
    res.header('Access-Control-Allow-Origin', '*');
    // Other headers you may need to set
    req.header('Access-Control-Allow-Credentials', 'true')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS , PUT, PATCH, DELETE');
    // Continue to the next middleware
    next();
  });

app.use(router)

app.listen(PORT,()=>{
console.log("server listening at port "+PORT)

})
