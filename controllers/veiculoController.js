const veiculoService = require('../services/veiculoService');

const createVeiculo = async (req, res) => {
  try {
    const veiculo = await veiculoService.createVeiculo(req.body);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVeiculos = async (req, res) => {
  try {
    const veiculos = await veiculoService.getVeiculos();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getVeiculo = async (req, res) => {
  try {
    const veiculo = await veiculoService.getVeiculo(req.params.id);
    if (!veiculo) {
      return res.status(404).json({ error: 'Veículo não encontrado' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateVeiculo = async (req, res) => {
  try {
    const veiculo = await veiculoService.updateVeiculo(req.params.id, req.body);
    if (!veiculo) {
      return res.status(404).json({ error: 'Veículo não encontrado' });
    }
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteVeiculo = async (req, res) => {
  try {
    await veiculoService.deleteVeiculo(req.params.id);
    res.status(204).json();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const addAcessorio = async (req, res) => {
  try {
    const veiculo = await veiculoService.addAcessorio(req.params.id, req.body);
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const removeAcessorio = async (req, res) => {
  try {
    const veiculo = await veiculoService.removeAcessorio(req.params.id, req.params.acessorioId);
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
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

