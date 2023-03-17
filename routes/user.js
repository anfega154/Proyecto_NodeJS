const express = require('express')
const router = express.Router();
const userController = require('../controller/user')


router.get('/',(req,res)=>{
    res.send('esta es la raiz')
    })

    router.post('/save',userController.save)


module.exports=router;