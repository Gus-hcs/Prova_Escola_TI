const mongoose = require('mongoose');
const Acessorio = require('./acessorioModel');

const veiculoSchema = new mongoose.Schema({
  modelo: { type: String, required: true },
  anoFabricacao: { type: Number, required: true },
  placa: { type: String, required: true, unique: true },
  acessorios: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Acessorio' }]
});

module.exports = mongoose.model('Veiculo', veiculoSchema);
