const mongoose = require('mongoose');

const petSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  especie: {
    type: String,
    required: true
  },
  porte: {
    type: String,
    required: true
  },
  sexo: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['Disponível', 'Adotado', 'Perdido', 'Falecido'],
    default: 'Disponível'
  },
  necessidadesEspeciais: {
    type: String,
    default: ''
  },
  tratamentoContinuo: {
    type: String,
    default: ''
  },
  doencaCronica: {
    type: String,
    default: ''
  },
  sociavel: {
    type: Boolean,
    default: false
  },
  exigeCuidadosConstantes: {
    type: Boolean,
    default: false
  },
  historicoRastreabilidade: [
    {
      localizacao: String,
      data: Date,
      tempoDePermanencia: String
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('Pet', petSchema, 'pets');
