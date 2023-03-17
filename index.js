const conection=require('./database/conection')
conection();

const express= require('express')
const app= express();
const cors=require("cors")
require('dotenv').config({path:'./.env'});
const port = process.env.PORT;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes/user')

app.use("/api",router);







app.listen(port,()=>{

console.log(`server in  http://localHost:${port}`)

})



