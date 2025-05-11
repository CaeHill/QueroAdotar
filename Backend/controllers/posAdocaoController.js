const PosAdocao = require('../models/PosAdocao');

// Criar acompanhamento
const criarAcompanhamento = async (req, res) => {
  try {
    const novo = new PosAdocao(req.body);
    await novo.save();
    res.status(201).json(novo);
  } catch (error) {
    res.status(400).json({ erro: error.message });
  }
};

// Listar todos
const listarAcompanhamentos = async (req, res) => {
  try {
    const lista = await PosAdocao.find().populate('pet').populate('tutor');
    res.json(lista);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Buscar por pet
const buscarPorPet = async (req, res) => {
  try {
    const acompanhamento = await PosAdocao.findOne({ pet: req.params.petId }).populate('pet').populate('tutor');
    if (!acompanhamento) return res.status(404).json({ erro: 'Nenhum acompanhamento encontrado para este pet.' });
    res.json(acompanhamento);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  criarAcompanhamento,
  listarAcompanhamentos,
  buscarPorPet
};
