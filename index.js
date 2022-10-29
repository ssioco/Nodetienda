const express = require('express')
const PORT = process.env.PORT ||9002 ;
const enrutador = require("./routes/enrutador")
app = express()

app.use('/',enrutador)

app.listen(PORT,(req,res)=>{
    console.log("servidor corriendo en el server: "+PORT)
})



//Aca debo agregar el index