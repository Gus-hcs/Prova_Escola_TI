const veiculoService = require('../services/veiculoService'); 

// Função para criar um novo veículo
const createVeiculo = async (req, res) => {
  try {
    const veiculo = await veiculoService.createVeiculo(req.body);
    res.status(201).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função para obter todos os veículos com seus acessórios
const getVeiculos = async (req, res) => {
  try {
    const veiculos = await veiculoService.getVeiculos();
    res.status(200).json(veiculos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função para obter um veículo específico pelo ID
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

// Função para atualizar um veículo
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

// Função para excluir um veículo
const deleteVeiculo = async (req, res) => {
  try {
    const deleted = await veiculoService.deleteVeiculo(req.params.id);
    if (!deleted) {
      return res.status(404).json({ error: 'Veículo não encontrado para exclusão' });
    }
    res.status(204).send(); 
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função para adicionar um acessório a um veículo
const addAcessorio = async (req, res) => {
  try {
    const veiculo = await veiculoService.addAcessorio(req.params.id, req.body);
    res.status(200).json(veiculo);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função para atualizar um acessório
const updateAcessorio = async (req, res) => {
  try {
    const acessorio = await veiculoService.updateAcessorio(req.params.acessorioId, req.body);
    res.status(200).json(acessorio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Função para excluir um acessório de um veículo
const deleteAcessorio = async (req, res) => {
  try {
    const deleted = await veiculoService.deleteAcessorio(req.params.acessorioId);
    res.status(204).send(); 
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
  updateAcessorio,
  deleteAcessorio,
};
