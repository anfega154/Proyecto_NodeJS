const express = require('express')
const router = express.Router();


router.get('/',(req,res)=>{
    res.send('esta es la raiz')
    })


module.exports=router;