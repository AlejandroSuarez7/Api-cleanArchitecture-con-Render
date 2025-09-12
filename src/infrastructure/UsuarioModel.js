const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
/**
 * Esquema Mongoose para la entidad Usuario.
 * @typedef {Object} Usuario
 * @property {string} email - Correo electrónico del usuario.
 * @property {string} password - Contraseña encriptada.
 * @property {string} rol - Rol del usuario.
 * @property {string} status - Estado del usuario.
 */
const UsuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, required: true },
  status: { type: String, default: 'activo' }
});

UsuarioSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Usuario', UsuarioSchema);
