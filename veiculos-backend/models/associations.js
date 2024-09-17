const Veiculo = require('./veiculoModel');
const Acessorio = require('./acessorioModel');

Veiculo.hasMany(Acessorio, {
  foreignKey: 'veiculoId',
  as: 'acessorios', 
});

Acessorio.belongsTo(Veiculo, {
  foreignKey: 'veiculoId',
  as: 'veiculo', 
});