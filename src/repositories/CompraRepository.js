/**
 * Repositorio para la gestión de compras en la base de datos.
 * @class CompraRepository
 */
class CompraRepository {
    constructor(model) {
        this.model = model;
    }
        /**
         * Crea una nueva compra en la base de datos.
         * @param {Object} compra - Datos de la compra.
         * @returns {Promise<Object>} Compra creada.
         */
        async create(compra) { return await this.model.create(compra); }
        /**
         * Obtiene todas las compras.
         * @returns {Promise<Array>} Lista de compras.
         */
        async findAll() { return await this.model.find(); }
        /**
         * Obtiene una compra por su ID.
         * @param {string} id - ID de la compra.
         * @returns {Promise<Object>} Compra encontrada.
         */
        async findById(id) { return await this.model.findById(id); }
        /**
         * Actualiza una compra por su ID.
         * @param {string} id - ID de la compra.
         * @param {Object} compra - Datos actualizados.
         * @returns {Promise<Object>} Compra actualizada.
         */
        async update(id, compra) { return await this.model.findByIdAndUpdate(id, compra, { new: true }); }
        /**
         * Elimina una compra por su ID.
         * @param {string} id - ID de la compra.
         * @returns {Promise<Object>} Compra eliminada.
         */
        async delete(id) { return await this.model.findByIdAndDelete(id); }
}
module.exports = CompraRepository;
