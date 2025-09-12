/**
 * Controlador para la gestión de usuarios.
 * @class UsuarioController
 */
class UsuarioController {
  constructor(useCase) { this.useCase = useCase; }
  /**
   * Crea un nuevo usuario.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Object} Usuario creado.
   * @route POST /usuarios
   */
  async create(req, res) {
    try {
      const usuario = await this.useCase.createUsuario(req.body);
      res.status(201).json(usuario);
    } catch (e) { res.status(400).json({ error: e.message }); }
  }
  /**
   * Obtiene todos los usuarios.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Array} Lista de usuarios.
   * @route GET /usuarios
   */
  async getAll(req, res) {
    const usuarios = await this.useCase.getUsuarios();
    res.json(usuarios);
  }
  /**
   * Obtiene un usuario por su ID.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Object} Usuario encontrado o error.
   * @route GET /usuarios/:id
   */
  async getById(req, res) {
    const usuario = await this.useCase.getUsuarioById(req.params.id);
    if (usuario) res.json(usuario);
    else res.status(404).json({ error: 'No encontrado' });
  }
  /**
   * Actualiza los datos de un usuario.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {Object} Usuario actualizado.
   * @route PUT /usuarios/:id
   */
  async update(req, res) {
    const usuario = await this.useCase.updateUsuario(req.params.id, req.body);
    res.json(usuario);
  }
  /**
   * Elimina un usuario por su ID.
   * @function
   * @param {Object} req - Objeto de solicitud HTTP.
   * @param {Object} res - Objeto de respuesta HTTP.
   * @returns {void}
   * @route DELETE /usuarios/:id
   */
  async delete(req, res) {
    await this.useCase.deleteUsuario(req.params.id);
    res.status(204).send();
  }
}
module.exports = UsuarioController;
