const Tutor = require('../models/Tutor');

// Criar novo tutor
const criarTutor = async (req, res) => {
  try {
    const novoTutor = new Tutor(req.body);
    await novoTutor.save();
    res.status(201).json(novoTutor);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos os tutores
const listarTutores = async (req, res) => {
  try {
    const tutores = await Tutor.find().populate('pets');
    res.json(tutores);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Buscar tutor por ID
const buscarTutorPorId = async (req, res) => {
  try {
    const tutor = await Tutor.findById(req.params.id).populate('pets');
    if (!tutor) return res.status(404).json({ erro: 'Tutor não encontrado' });
    res.json(tutor);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  criarTutor,
  listarTutores,
  buscarTutorPorId
};
