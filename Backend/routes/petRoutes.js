const express = require('express');
const router = express.Router();
const { criarPet, listarPets, buscarPetPorId } = require('../controllers/petController');

// Rota para criar um novo pet
router.post('/', criarPet);

// Rota para listar todos os pets
router.get('/', listarPets);

// Rota para buscar pet por ID
router.get('/:id', buscarPetPorId);

module.exports = router;
