/**
 * Rutas para la gestión de clientes.
 * @module clienteRoutes
 * @param {object} controller - Controlador de clientes.
 * @returns {object} router - Router de Express con las rutas de clientes.
 */
const express = require('express');
const router = express.Router();
module.exports = (controller) => {
  /**
   * @route POST /clientes
   * @description Crea un nuevo cliente
   */
  router.post('/', controller.create.bind(controller));
  /**
   * @route GET /clientes
   * @description Obtiene todos los clientes
   */
  router.get('/', controller.getAll.bind(controller));
  /**
   * @route GET /clientes/:id
   * @description Obtiene un cliente por su ID
   */
  router.get('/:id', controller.getById.bind(controller));
  /**
   * @route PUT /clientes/:id
   * @description Actualiza un cliente por su ID
   */
  router.put('/:id', controller.update.bind(controller));
  /**
   * @route DELETE /clientes/:id
   * @description Elimina un cliente por su ID
   */
  router.delete('/:id', controller.delete.bind(controller));
  return router;
};
