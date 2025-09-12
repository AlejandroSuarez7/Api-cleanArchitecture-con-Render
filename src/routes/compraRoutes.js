/**
 * Rutas para la gestión de compras.
 * @module compraRoutes
 * @param {object} controller - Controlador de compras.
 * @returns {object} router - Router de Express con las rutas de compras.
 */
const express = require('express');
const router = express.Router();
module.exports = (controller) => {
    /**
     * @route POST /compras
     * @description Crea una nueva compra
     */
    router.post('/', controller.create.bind(controller));
    /**
     * @route GET /compras
     * @description Obtiene todas las compras
     */
    router.get('/', controller.getAll.bind(controller));
    /**
     * @route GET /compras/:id
     * @description Obtiene una compra por su ID
     */
    router.get('/:id', controller.getById.bind(controller));
    /**
     * @route PUT /compras/:id
     * @description Actualiza una compra por su ID
     */
    router.put('/:id', controller.update.bind(controller));
    /**
     * @route DELETE /compras/:id
     * @description Elimina una compra por su ID
     */
    router.delete('/:id', controller.delete.bind(controller));
    return router;
};
