const express = require('express');
const router = express.Router();
const bcd = require('../config/connection')



router.get('/inicio', (req,res)=>{
    res.send("soy un inicio enrutado");
})


router.get('/conectar', (req,res)=>{
    bcd.mongoose;
    res.send("Conectado a db")
})

router.get('/index', (req,res)=>{
    //Me falta hacer esta coneccion al index!!!
})

router.get('/enviarcorreo', require('../controller/enviocorreo').sendEmail);

module.exports = router;