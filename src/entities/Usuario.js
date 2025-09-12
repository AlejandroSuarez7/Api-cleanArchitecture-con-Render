/**
 * Entidad Usuario del dominio.
 * @class Usuario
 * @property {string} email - Correo electrónico del usuario.
 * @property {string} password - Contraseña encriptada.
 * @property {string} rol - Rol del usuario.
 * @property {string} status - Estado del usuario.
 */
class Usuario {
  constructor({ email, password, rol, status }) {
    this.email = email;
    this.password = password;
    this.rol = rol;
    this.status = status;
  }
}
module.exports = Usuario;
