const mongoose = require('mongoose');
const CompraSchema = new mongoose.Schema({
    cliente: String,
    telefono: String,
    fecha: Date,
    items: [{
        producto: String,
        cantidad: Number,
        precio: Number
    }],
    domicilio: Boolean,
    direccion: {
        calle: String,
        ciudad: String
    },
    total: Number
});
module.exports = mongoose.model('Compra', CompraSchema);
