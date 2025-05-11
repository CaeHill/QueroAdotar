const mongoose = require('mongoose');

const adotanteSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: String,
  telefone: String,
  endereco: String,
  possuiPets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }],
  especieDesejada: String,
  porteDesejado: String,
  sexoDesejado: String,
  aceitaNecessidadesEspeciais: Boolean,
  aceitaDoencaCronica: Boolean,
  aceitaSomenteSaudavel: Boolean,
  possuiOutrosAnimais: Boolean,
  disponibilidadeDeTempo: Boolean
}, { timestamps: true });

module.exports = mongoose.model('Adotante', adotanteSchema, 'adotantes');
