//exportar modulo esquemas 
const {Schema,model}=require('mongoose')


/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
 *       type: object
 *       required:
 *         - name
 *         - profession
 *         -document
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del usuario.
 *         profession:
 *           type: string
 *           description: profesion del usuario.
 *       example:
 *         name: John Doe
 *         profession: 123456789
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