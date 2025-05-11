const Pet = require('../models/Pet');

// Criar novo pet
const criarPet = async (req, res) => {
  try {
    const novoPet = new Pet(req.body);
    await novoPet.save();
    res.status(201).json(novoPet);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos os pets
const listarPets = async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Buscar pet por ID
const buscarPetPorId = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    if (!pet) return res.status(404).json({ erro: 'Pet não encontrado' });
    res.json(pet);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  criarPet,
  listarPets,
  buscarPetPorId
};
