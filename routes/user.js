const express = require('express')
const router = express.Router();
// importamos el modulos de los controladores 
const userController = require('../controller/user')

// declaromos endpoint 
router.get('/',(req,res)=>{
    res.send('esta es la raiz')
    })

    
    // lammar controladores
    router.post('/save',userController.save)


module.exports=router;