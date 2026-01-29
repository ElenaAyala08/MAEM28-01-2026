const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  nombres: { type: String, required: true },
  apellidos: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  dui: { type: String, required: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);