const mongoose = require("mongoose");
require('dotenv').config({path:'./.env'});
const url = process.env.URL;
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

module.exports = conecction;