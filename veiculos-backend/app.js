const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const veiculoRoutes = require('./routes/veiculoRoutes');
const sequelize = require('./config/database');  
require('./models/associations'); 

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/veiculos', veiculoRoutes);

sequelize.sync({ force: true }) 
  .then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco de dados:', err);
  });
