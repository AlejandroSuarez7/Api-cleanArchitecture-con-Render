const mongoose = require('mongoose');
/**
 * Esquema Mongoose para la entidad Compra.
 * @typedef {Object} Compra
 * @property {string} cliente - Nombre del cliente.
 * @property {string} telefono - Teléfono del cliente.
 * @property {Date} fecha - Fecha de la compra.
 * @property {Array<Object>} items - Productos comprados.
 * @property {boolean} domicilio - Si la compra es a domicilio.
 * @property {Object} direccion - Dirección de envío.
 * @property {string} direccion.calle - Calle de la dirección.
 * @property {string} direccion.ciudad - Ciudad de la dirección.
 * @property {number} total - Total de la compra.
 */
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
