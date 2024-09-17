const mongoose = require('mongoose');

const acessorioSchema = new mongoose.Schema({
  nome: { type: String, required: true }
});

module.exports = mongoose.model('Acessorio', acessorioSchema);
