const express = require('express');
const router = express.Router();
const { criarTutor, listarTutores, buscarTutorPorId } = require('../controllers/tutorController');

// POST: criar novo tutor
router.post('/', criarTutor);

// GET: listar todos os tutores
router.get('/', listarTutores);

// GET: buscar tutor por ID
router.get('/:id', buscarTutorPorId);

module.exports = router;
