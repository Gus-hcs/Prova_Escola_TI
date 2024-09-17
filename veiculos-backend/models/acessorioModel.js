const { DataTypes } = require('sequelize');
const sequelize = require('../config/database'); 
const Veiculo = require('./veiculoModel');  

const Acessorio = sequelize.define('Acessorio', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

Acessorio.belongsTo(Veiculo, {
  foreignKey: 'veiculoId',
  as: 'veiculoAcessorio', 
});

module.exports = Acessorio;
