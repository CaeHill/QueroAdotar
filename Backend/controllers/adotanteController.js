const Adotante = require('../models/Adotante');

// Criar novo adotante
const criarAdotante = async (req, res) => {
  try {
    const novoAdotante = new Adotante(req.body);
    await novoAdotante.save();
    res.status(201).json(novoAdotante);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos os adotantes
const listarAdotantes = async (req, res) => {
  try {
    const adotantes = await Adotante.find().populate('possuiPets');
    res.json(adotantes);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Buscar adotante por ID
const buscarAdotantePorId = async (req, res) => {
  try {
    const adotante = await Adotante.findById(req.params.id).populate('possuiPets');
    if (!adotante) return res.status(404).json({ erro: 'Adotante não encontrado' });
    res.json(adotante);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  criarAdotante,
  listarAdotantes,
  buscarAdotantePorId
};
