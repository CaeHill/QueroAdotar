const express = require('express');
const router = express.Router();
const { criarAdotante, listarAdotantes, buscarAdotantePorId } = require('../controllers/adotanteController');

// POST: criar novo adotante
router.post('/', criarAdotante);

// GET: listar todos os adotantes
router.get('/', listarAdotantes);

// GET: buscar adotante por ID
router.get('/:id', buscarAdotantePorId);

module.exports = router;
