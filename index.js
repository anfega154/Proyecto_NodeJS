// debemos llamar laconexion 
const conection=require('./database/conection')
conection();

const express= require('express')
const app= express();
const cors=require("cors")

// llamar variables de entorno
require('dotenv').config({path:'./.env'});
const port = process.env.PORT;
// especificar que vamos trabajar con URLENCODE y que vamos a trabajar en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//llamar modulo de rutas 
const router = require('./routes/user')
app.use("/api",router);



// crear servidor
app.listen(port,()=>{

console.log(`server in  http://localHost:${port}`)

})



