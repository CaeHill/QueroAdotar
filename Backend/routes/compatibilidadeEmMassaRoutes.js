const express = require('express');
const router = express.Router();
const { verificarCompatibilidadeEmMassa } = require('../controllers/compatibilidadeEmMassaController');

router.post('/compatibilidade-em-massa/:adotanteId', verificarCompatibilidadeEmMassa);

module.exports = router;
