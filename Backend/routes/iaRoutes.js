const express = require('express');
const router = express.Router();
const { verificarCompatibilidade } = require('../controllers/iaController');

router.post('/compatibilidade', verificarCompatibilidade);

module.exports = router;
