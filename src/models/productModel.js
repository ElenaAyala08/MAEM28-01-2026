const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  codigo: { type: String, required: true, unique: true },
  marca: { type: String, required: true },
  nombre: { type: String, required: true },
  descripcion: { type: String }
});

module.exports = mongoose.model('Product', productSchema);