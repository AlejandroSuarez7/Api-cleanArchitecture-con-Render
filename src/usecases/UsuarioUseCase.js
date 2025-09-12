/**
 * Casos de uso para la gestión de usuarios.
 * @class UsuarioUseCase
 */
class UsuarioUseCase {
  constructor(repository) { this.repository = repository; }
  /**
   * Crea un nuevo usuario.
   * @param {Object} data - Datos del usuario.
   * @returns {Promise<Object>} Usuario creado.
   */
  createUsuario(data) { return this.repository.create(data); }
  /**
   * Obtiene todos los usuarios.
   * @returns {Promise<Array>} Lista de usuarios.
   */
  getUsuarios() { return this.repository.findAll(); }
  /**
   * Obtiene un usuario por su ID.
   * @param {string} id - ID del usuario.
   * @returns {Promise<Object>} Usuario encontrado.
   */
  getUsuarioById(id) { return this.repository.findById(id); }
  /**
   * Actualiza un usuario por su ID.
   * @param {string} id - ID del usuario.
   * @param {Object} data - Datos actualizados.
   * @returns {Promise<Object>} Usuario actualizado.
   */
  updateUsuario(id, data) { return this.repository.update(id, data); }
  /**
   * Elimina un usuario por su ID.
   * @param {string} id - ID del usuario.
   * @returns {Promise<Object>} Usuario eliminado.
   */
  deleteUsuario(id) { return this.repository.delete(id); }
}
module.exports = UsuarioUseCase;
