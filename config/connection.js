const mongoose = require('mongoose');

const user ='Fe_Tienda';
const passwors = 'n7JL7jZJwGkxx65Y';
const dbname = 'POSTienda'

const url = `mongodb+srv://${user}:${passwors}@cluster0.6wd0h.mongodb.net/${dbname}?retryWrites=true&w=majority`

const connectionParams ={
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose.connect(url,connectionParams)
    .then(()=>{
        console.log('conectado a la base de datos');
    })
    .catch((err)=>{
        console.error(`error en la coneccion a la base de datos: ${err}̣`)
    })

module.exports={
    mongoose
}