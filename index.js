const express= require('express')
const app= express();
const cors=require("cors")
const port=3000;


app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const router = require('./routes/index')

app.use("/",router);







app.listen(port,()=>{

console.log(`server in  http://localHost:${port}`)

})



