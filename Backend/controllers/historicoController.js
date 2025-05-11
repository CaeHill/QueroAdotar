const HistoricoCompatibilidade = require('../models/HistoricoCompatibilidade');

const listarHistoricoPorAdotante = async (req, res) => {
  const { adotanteId } = req.params;

  try {
    const historico = await HistoricoCompatibilidade.find({ adotante: adotanteId })
      .populate('pet', 'nome especie porte sexo')
      .sort({ dataConsulta: -1 });

    res.json(historico);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = { listarHistoricoPorAdotante };
