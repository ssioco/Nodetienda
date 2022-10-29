const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productoSchema = new Schema ({
    referencia : String,
    nombre : String,
    descripcion : Text,   //Preguntar a carmenso
    precio : Number,
    stock : Number,
<<<<<<< HEAD
    //imagen : , //link
=======
    //imagen : , //link para la imagen
>>>>>>> 524eeb2d266d506a24c2db13391234a698fdb3d0
    habilitado : Boolean
});

const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;