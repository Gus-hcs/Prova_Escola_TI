const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');
const veiculoRoutes = require('./routes/veiculoRoutes');

const app = express();

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Rotas
app.use('/veiculos', veiculoRoutes);

// Iniciar o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

