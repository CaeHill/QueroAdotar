const express = require('express');
const router = express.Router();
const { listarHistoricoPorAdotante } = require('../controllers/historicoController');

router.get('/historico/:adotanteId', listarHistoricoPorAdotante);

module.exports = router;
