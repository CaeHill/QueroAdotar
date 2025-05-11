const Rastreabilidade = require('../models/Rastreabilidade');

// Criar novo registro de rastreabilidade
const criarRegistro = async (req, res) => {
  try {
    const novoRegistro = new Rastreabilidade(req.body);
    await novoRegistro.save();
    res.status(201).json(novoRegistro);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos os registros
const listarRegistros = async (req, res) => {
  try {
    const registros = await Rastreabilidade.find().populate('pet');
    res.json(registros);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Buscar por ID do pet
const listarRegistrosPorPet = async (req, res) => {
  try {
    const registros = await Rastreabilidade.find({ pet: req.params.petId }).populate('pet');
    res.json(registros);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  criarRegistro,
  listarRegistros,
  listarRegistrosPorPet
};
