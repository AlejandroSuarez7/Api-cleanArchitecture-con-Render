/**
 * Controlador para la gestión de compras.
 * @class CompraController
 */
class CompraController {
    constructor(useCase) { this.useCase = useCase; }
        /**
         * Crea una nueva compra.
         * @function
         * @param {Object} req - Objeto de solicitud HTTP.
         * @param {Object} res - Objeto de respuesta HTTP.
         * @returns {Object} Compra creada.
         * @route POST /compras
         */
        async create(req, res) {
            try {
                const compra = await this.useCase.createCompra(req.body);
                res.status(201).json(compra);
            } catch (e) { res.status(400).json({ error: e.message }); }
        }
        /**
         * Obtiene todas las compras.
         * @function
         * @param {Object} req - Objeto de solicitud HTTP.
         * @param {Object} res - Objeto de respuesta HTTP.
         * @returns {Array} Lista de compras.
         * @route GET /compras
         */
        async getAll(req, res) {
            const compras = await this.useCase.getCompras();
            res.json(compras);
        }
        /**
         * Obtiene una compra por su ID.
         * @function
         * @param {Object} req - Objeto de solicitud HTTP.
         * @param {Object} res - Objeto de respuesta HTTP.
         * @returns {Object} Compra encontrada o error.
         * @route GET /compras/:id
         */
        async getById(req, res) {
            const compra = await this.useCase.getCompraById(req.params.id);
            if (compra) res.json(compra);
            else res.status(404).json({ error: 'No encontrada' });
        }
        /**
         * Actualiza los datos de una compra.
         * @function
         * @param {Object} req - Objeto de solicitud HTTP.
         * @param {Object} res - Objeto de respuesta HTTP.
         * @returns {Object} Compra actualizada.
         * @route PUT /compras/:id
         */
        async update(req, res) {
            const compra = await this.useCase.updateCompra(req.params.id, req.body);
            res.json(compra);
        }
        /**
         * Elimina una compra por su ID.
         * @function
         * @param {Object} req - Objeto de solicitud HTTP.
         * @param {Object} res - Objeto de respuesta HTTP.
         * @returns {void}
         * @route DELETE /compras/:id
         */
        async delete(req, res) {
            await this.useCase.deleteCompra(req.params.id);
            res.status(204).send();
        }
}
module.exports = CompraController;
