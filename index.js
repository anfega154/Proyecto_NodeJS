const express= require('express')
const app= express;
const port=3000;
app.get('/',(req,res)=>{
res.send('esta es la raiz')
})
app.listen(port,()=>{

console.log(`mi aplicacion corriendo en el puerto ${port}`)

})

console.log("Hola Mundo")

