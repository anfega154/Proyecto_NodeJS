//exportar modulo esquemas 
const {Schema,model}=require('mongoose')


/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         -lastName
 *         -bornYear
 *         -gender
 *         -tall
 *         -age   
 *         - profession
 *         -document
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del usuario.
 *         lastNname:
 *           type: string
 *           description: Apellido del usuario.
 *         bornYear:
 *           type: number
 *           description: Año de nacimiento del usuario.
 *         gender:
 *           type: string
 *           description: Genero del usuario.
 *         tall:
 *           type: number
 *           description: Altura del usuario.
 *         age:
 *           type: number
 *           description: Edad del usuario.
 *         profession:
 *           type: string
 *           description: profesion del usuario.
 *         document:
 *           type: number
 *           description: documento del usuario.
 *       example:
 *         name: John 
 *         lastName: Doe
 *         bornYear: 1994
 *         gender: masculino
 *         tall: 174
 *         age: 29
 *         profession: developer
 *         document: 123456789
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