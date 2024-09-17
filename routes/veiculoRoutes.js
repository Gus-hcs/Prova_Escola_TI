const express = require('express');
const router = express.Router();
const veiculoController = require('../controllers/veiculoController');

router.post('/', veiculoController.createVeiculo);
router.get('/', veiculoController.getVeiculos);
router.get('/:id', veiculoController.getVeiculo);
router.patch('/:id', veiculoController.updateVeiculo);
router.delete('/:id', veiculoController.deleteVeiculo);
router.post('/:id/acessorios', veiculoController.addAcessorio);
router.delete('/:id/acessorios/:acessorioId', veiculoController.removeAcessorio);

module.exports = router;

