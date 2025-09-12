/**
 * Rutas para la gestión de usuarios.
 * @module usuarioRoutes
 * @param {object} controller - Controlador de usuarios.
 * @returns {object} router - Router de Express con las rutas de usuarios.
 */
const express = require('express');
const router = express.Router();
module.exports = (controller) => {
  /**
   * @route POST /usuarios
   * @description Crea un nuevo usuario
   */
  router.post('/', controller.create.bind(controller));
  /**
   * @route GET /usuarios
   * @description Obtiene todos los usuarios
   */
  router.get('/', controller.getAll.bind(controller));
  /**
   * @route GET /usuarios/:id
   * @description Obtiene un usuario por su ID
   */
  router.get('/:id', controller.getById.bind(controller));
  /**
   * @route PUT /usuarios/:id
   * @description Actualiza un usuario por su ID
   */
  router.put('/:id', controller.update.bind(controller));
  /**
   * @route DELETE /usuarios/:id
   * @description Elimina un usuario por su ID
   */
  router.delete('/:id', controller.delete.bind(controller));
  return router;
};
