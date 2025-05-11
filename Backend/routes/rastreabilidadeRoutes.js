const express = require('express');
const router = express.Router();
const {
  criarRegistro,
  listarRegistros,
  listarRegistrosPorPet
} = require('../controllers/rastreabilidadeController');

// POST: adicionar registro
router.post('/', criarRegistro);

// GET: listar todos os registros
router.get('/', listarRegistros);

// GET: registros por pet
router.get('/pet/:petId', listarRegistrosPorPet);

module.exports = router;
