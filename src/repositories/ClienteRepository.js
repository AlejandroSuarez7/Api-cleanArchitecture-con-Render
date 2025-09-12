/**
 * Repositorio para la gestión de clientes en la base de datos.
 * @class ClienteRepository
 */
class ClienteRepository {
  constructor(model) {
    this.model = model;
  }
  /**
   * Crea un nuevo cliente.
   * @param {Object} cliente - Datos del cliente.
   * @returns {Promise<Object>} Cliente creado.
   */
  async create(cliente) { return await this.model.create(cliente); }
  /**
   * Obtiene todos los clientes.
   * @returns {Promise<Array>} Lista de clientes.
   */
  async findAll() { return await this.model.find(); }
  /**
   * Obtiene un cliente por su ID.
   * @param {string} id - ID del cliente.
   * @returns {Promise<Object>} Cliente encontrado.
   */
  async findById(id) { return await this.model.findById(id); }
  /**
   * Actualiza un cliente por su ID.
   * @param {string} id - ID del cliente.
   * @param {Object} cliente - Datos actualizados.
   * @returns {Promise<Object>} Cliente actualizado.
   */
  async update(id, cliente) { return await this.model.findByIdAndUpdate(id, cliente, { new: true }); }
  /**
   * Elimina un cliente por su ID.
   * @param {string} id - ID del cliente.
   * @returns {Promise<Object>} Cliente eliminado.
   */
  async delete(id) { return await this.model.findByIdAndDelete(id); }
}
module.exports = ClienteRepository;
