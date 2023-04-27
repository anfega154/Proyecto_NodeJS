// debemos llamar laconexion 
const conection=require('./database/conection')
conection();

const express= require('express')
const app= express();
const cors=require("cors")
const swaggerUI=require('swagger-ui-express');
const swaggerApi=require('./docs/swagger');

// llamar variables de entorno
require('dotenv').config({path:'./.env'});
const port = process.env.PORT || 3000;
// especificar que vamos trabajar con URLENCODE y que vamos a trabajar en formato JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//llamar modulo de rutas 
const router = require('./routes/user')
app.use("/api/users",router);

app.use("/documetation",swaggerUI.serve,swaggerUI.setup(swaggerApi));

// crear servidor
app.listen(port,()=>{

console.log(`server in  http://localHost:${port}`)

})



