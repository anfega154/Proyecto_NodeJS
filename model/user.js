const {Schema,model}=require('mongoose')

const UserSchema= Schema({
    name:{
        type: String,
        required:true,
        unique:true
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
   profesion:{
    type:String,
    required:true
   },
   cedula:{
    type:Number,
    required:true
   }
  

})

module.exports= model("user",UserSchema)