const mongoose = require('mongoose');

const historicoCompatibilidadeSchema = new mongoose.Schema({
  adotante: { type: mongoose.Schema.Types.ObjectId, ref: 'Adotante', required: true },
  pet: { type: mongoose.Schema.Types.ObjectId, ref: 'Pet', required: true },
  pontuacao: Number,
  justificativa: String,
  dataConsulta: { type: Date, default: Date.now }
});

module.exports = mongoose.model('HistoricoCompatibilidade', historicoCompatibilidadeSchema, 'historicoscompatibilidade');
