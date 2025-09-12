/**
 * Entidad Cliente del dominio.
 * @class Cliente
 * @property {string} documento - Documento de identidad del cliente.
 * @property {string} nombre - Nombre del cliente.
 * @property {string} email - Correo electrónico del cliente.
 * @property {string} whatsapp - Número de WhatsApp del cliente.
 */
class Cliente {
  constructor({ documento, nombre, email, whatsapp }) {
    this.documento = documento;
    this.nombre = nombre;
    this.email = email;
    this.whatsapp = whatsapp;
  }
}
module.exports = Cliente;
