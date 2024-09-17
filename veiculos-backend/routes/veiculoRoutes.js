const express = require('express');
const veiculoController = require('../controllers/veiculoController');
const router = express.Router();

router.post('/', veiculoController.createVeiculo);
router.get('/', veiculoController.getVeiculos);
router.get('/:id', veiculoController.getVeiculo);
router.patch('/:id', veiculoController.updateVeiculo);
router.delete('/:id', veiculoController.deleteVeiculo);

router.post('/:id/acessorios', veiculoController.addAcessorio);
router.patch('/acessorios/:acessorioId', veiculoController.updateAcessorio);
router.delete('/acessorios/:acessorioId', veiculoController.deleteAcessorio);

module.exports = router;
