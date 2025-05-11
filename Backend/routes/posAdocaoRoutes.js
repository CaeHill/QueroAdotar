const express = require('express');
const router = express.Router();
const {
  criarAcompanhamento,
  listarAcompanhamentos,
  buscarPorPet
} = require('../controllers/posAdocaoController');

// POST: criar novo acompanhamento
router.post('/', criarAcompanhamento);

// GET: listar todos
router.get('/', listarAcompanhamentos);

// GET: buscar acompanhamento por pet
router.get('/pet/:petId', buscarPorPet);

module.exports = router;
