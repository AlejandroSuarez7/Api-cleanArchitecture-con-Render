/**
 * Entidad Compra del dominio.
 * @class Compra
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
class Compra {
    constructor({ cliente, telefono, fecha, items, domicilio, direccion, total }) {
        this.cliente = cliente;
        this.telefono = telefono;
        this.fecha = fecha;
        this.items = items;
        this.domicilio = domicilio;
        this.direccion = direccion;
        this.total = total;
    }
}
module.exports = Compra;
