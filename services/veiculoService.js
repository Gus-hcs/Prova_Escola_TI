const Veiculo = require('../models/veiculoModel');
const Acessorio = require('../models/acessorioModel');

const createVeiculo = async (data) => {
  const veiculo = new Veiculo(data);
  return veiculo.save();
};

const getVeiculos = async () => {
  return Veiculo.find().populate('acessorios');
};

const getVeiculo = async (id) => {
  return Veiculo.findById(id).populate('acessorios');
};

const updateVeiculo = async (id, data) => {
  return Veiculo.findByIdAndUpdate(id, data, { new: true });
};

const deleteVeiculo = async (id) => {
  return Veiculo.findByIdAndDelete(id);
};

const addAcessorio = async (veiculoId, acessorioData) => {
  const acessorio = new Acessorio(acessorioData);
  const veiculo = await Veiculo.findById(veiculoId);
  veiculo.acessorios.push(acessorio);
  await acessorio.save();
  return veiculo.save();
};

const removeAcessorio = async (veiculoId, acessorioId) => {
  const veiculo = await Veiculo.findById(veiculoId);
  veiculo.acessorios = veiculo.acessorios.filter(ac => ac.toString() !== acessorioId);
  return veiculo.save();
};

module.exports = {
  createVeiculo,
  getVeiculos,
  getVeiculo,
  updateVeiculo,
  deleteVeiculo,
  addAcessorio,
  removeAcessorio
};
