const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clienteSchema = new Schema ({
    nombre : String,
    tel : String,
    totalComprado : Number ,
    historicoCompras : Number,
<<<<<<< HEAD
    ubicacion : {longitud : Number,    
=======
    ubicacion :{longitud : Number,    
>>>>>>> 524eeb2d266d506a24c2db13391234a698fdb3d0
        latitud : Number,
        zoom :  Number}
});

const Cliente = mongoose.model('Cliente', clienteSchema); 

module.exports = Cliente;