//exportar modulo esquemas 
const {Schema,model}=require('mongoose')


/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - nombresUsuario
 *         - celularUsuario
 *       properties:
 *         nombresUsuario:
 *           type: string
 *           description: Nombre del usuario.
 *         celularUsuario:
 *           type: number
 *           description: Número de celular del usuario.
 *       example:
 *         nombresUsuario: John Doe
 *         celularUsuario: 123456789
 */
// en objeto declaramos el modelo del esquema con el vamos a trabajasr
const UserSchema= Schema({
    name:{
        type: String,
        required:true,
    
    },
    lastName:{
        type: String,
        required:true
    },
   bornYear:{
    type:Number
   },
   gender:{
    type:String
   },
   tall:{
type:Number
   },
   age:{
    type:Number
   },
   profession:{
    type:String,
    required:true
   },
   document:{
    type:Number,
    required:true,
    unique:true
   }
  

})
// exportamos modelo 
module.exports= model("user",UserSchema)