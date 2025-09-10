/**
 * Casos de uso para la gestión de compras.
 * @class CompraUseCase
 */
class CompraUseCase {
  constructor(repository) { this.repository = repository; }
  /**
   * Crea una nueva compra.
   * @param {Object} data - Datos de la compra.
   * @returns {Promise<Object>} Compra creada.
   */
  createCompra(data) { return this.repository.create(data); }
  /**
   * Obtiene todas las compras.
   * @returns {Promise<Array>} Lista de compras.
   */
  getCompras() { return this.repository.findAll(); }
  /**
   * Obtiene una compra por su ID.
   * @param {string} id - ID de la compra.
   * @returns {Promise<Object>} Compra encontrada.
   */
  getCompraById(id) { return this.repository.findById(id); }
  /**
   * Actualiza una compra por su ID.
   * @param {string} id - ID de la compra.
   * @param {Object} data - Datos actualizados.
   * @returns {Promise<Object>} Compra actualizada.
   */
  updateCompra(id, data) { return this.repository.update(id, data); }
  /**
   * Elimina una compra por su ID.
   * @param {string} id - ID de la compra.
   * @returns {Promise<Object>} Compra eliminada.
   */
  deleteCompra(id) { return this.repository.delete(id); }
}
module.exports = CompraUseCase;
