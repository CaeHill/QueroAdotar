const mongoose = require('mongoose');

const tutorSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  email: String,
  telefone: String,
  endereco: String,
  pets: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet'
  }]
}, { timestamps: true });

module.exports = mongoose.model('Tutor', tutorSchema, 'tutors');
