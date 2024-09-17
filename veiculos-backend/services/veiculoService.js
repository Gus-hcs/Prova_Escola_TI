const Veiculo = require('../models/veiculoModel'); 
const Acessorio = require('../models/acessorioModel');

// Função para criar um novo veículo
const createVeiculo = async (data) => {
  return Veiculo.create(data);
};

// Função para obter todos os veículos com seus acessórios
const getVeiculos = async () => {
  return Veiculo.findAll({
    include: [
      {
        model: Acessorio,
        as: 'acessorios', 
      },
    ],
  });
};

// Função para obter um veículo específico pelo ID
const getVeiculo = async (id) => {
  return Veiculo.findByPk(id, {
    include: [
      {
        model: Acessorio,
        as: 'acessorios',
      },
    ],
  });
};

// Função para atualizar um veículo
const updateVeiculo = async (id, data) => {
  const veiculo = await Veiculo.findByPk(id);
  if (veiculo) {
    return veiculo.update(data);
  }
  return null; 
};

// Função para excluir um veículo
const deleteVeiculo = async (id) => {
  const veiculo = await Veiculo.findByPk(id);
  if (veiculo) {
    // Excluir acessórios associados antes de excluir o veículo
    await Acessorio.destroy({ where: { veiculoId: id } });
    await veiculo.destroy(); // Exclui o veículo
    return true; 
  }
  return false; 
};

// Função para adicionar um acessório a um veículo
const addAcessorio = async (veiculoId, acessorioData) => {
  const veiculo = await Veiculo.findByPk(veiculoId);
  if (veiculo) {
    const acessorio = await Acessorio.create({ ...acessorioData, veiculoId });
    await veiculo.addAcessorio(acessorio); 
    return veiculo; 
  }
  throw new Error('Veículo não encontrado');
};

// Função para atualizar um acessório
const updateAcessorio = async (acessorioId, acessorioData) => {
  const acessorio = await Acessorio.findByPk(acessorioId);
  if (acessorio) {
    return acessorio.update(acessorioData);
  }
  throw new Error('Acessório não encontrado');
};

// Função para excluir um acessório
const deleteAcessorio = async (acessorioId) => {
  const acessorio = await Acessorio.findByPk(acessorioId);
  if (acessorio) {
    await acessorio.destroy(); 
    return true; 
  }
  throw new Error('Acessório não encontrado');
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
