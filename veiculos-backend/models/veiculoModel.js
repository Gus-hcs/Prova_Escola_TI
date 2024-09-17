const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');  

const Veiculo = sequelize.define('Veiculo', {
  modelo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  anoFabricacao: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  placa: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

module.exports = Veiculo;
