/**
 * Casos de uso para la gestión de clientes.
 * @class ClienteUseCase
 */
class ClienteUseCase {
  constructor(repository) { this.repository = repository; }
  /**
   * Crea un nuevo cliente.
   * @param {Object} data - Datos del cliente.
   * @returns {Promise<Object>} Cliente creado.
   */
  createCliente(data) { return this.repository.create(data); }
  /**
   * Obtiene todos los clientes.
   * @returns {Promise<Array>} Lista de clientes.
   */
  getClientes() { return this.repository.findAll(); }
  /**
   * Obtiene un cliente por su ID.
   * @param {string} id - ID del cliente.
   * @returns {Promise<Object>} Cliente encontrado.
   */
  getClienteById(id) { return this.repository.findById(id); }
  /**
   * Actualiza un cliente por su ID.
   * @param {string} id - ID del cliente.
   * @param {Object} data - Datos actualizados.
   * @returns {Promise<Object>} Cliente actualizado.
   */
  updateCliente(id, data) { return this.repository.update(id, data); }
  /**
   * Elimina un cliente por su ID.
   * @param {string} id - ID del cliente.
   * @returns {Promise<Object>} Cliente eliminado.
   */
  deleteCliente(id) { return this.repository.delete(id); }
}
module.exports = ClienteUseCase;
