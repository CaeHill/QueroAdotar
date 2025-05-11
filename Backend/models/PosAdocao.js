const mongoose = require('mongoose');

const posAdocaoSchema = new mongoose.Schema({
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
  tutor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tutor',
    required: true
  },
  visitas: [
    {
      data: Date,
      observacoes: String
    }
  ],
  incidentesDeSaude: [
    {
      tipo: String,
      descricao: String,
      data: Date
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('PosAdocao', posAdocaoSchema, 'posadocaos');
