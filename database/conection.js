// requerir modulo mongoose
const mongoose = require("mongoose");
//llamar las variables de entorno
require('dotenv').config({path:'./.env'});
const url = process.env.URL;
// funcion de conexion a la base de datos
mongoose.set("strictQuery", true);
const conecction = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("conexion exitosa");
  } catch (error) {
    console.log(error);
    throw new Error("No se pudo conectar a base de datos ");
  }
};
// exportamos la conexion 
module.exports = conecction;