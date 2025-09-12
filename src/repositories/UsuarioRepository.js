/**
 * Repositorio para la gestión de usuarios en la base de datos.
 * @class UsuarioRepository
 */
class UsuarioRepository {
  constructor(model) {
    this.model = model;
  }
  /**
   * Crea un nuevo usuario.
   * @param {Object} usuario - Datos del usuario.
   * @returns {Promise<Object>} Usuario creado.
   */
  async create(usuario) { return await this.model.create(usuario); }
  /**
   * Obtiene todos los usuarios.
   * @returns {Promise<Array>} Lista de usuarios.
   */
  async findAll() { return await this.model.find(); }
  /**
   * Obtiene un usuario por su ID.
   * @param {string} id - ID del usuario.
   * @returns {Promise<Object>} Usuario encontrado.
   */
  async findById(id) { return await this.model.findById(id); }
  /**
   * Actualiza un usuario por su ID.
   * @param {string} id - ID del usuario.
   * @param {Object} usuario - Datos actualizados.
   * @returns {Promise<Object>} Usuario actualizado.
   */
  async update(id, usuario) { return await this.model.findByIdAndUpdate(id, usuario, { new: true }); }
  /**
   * Elimina un usuario por su ID.
   * @param {string} id - ID del usuario.
   * @returns {Promise<Object>} Usuario eliminado.
   */
  async delete(id) { return await this.model.findByIdAndDelete(id); }
}
module.exports = UsuarioRepository;
