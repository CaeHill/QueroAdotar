const mongoose = require('mongoose');

const rastreabilidadeSchema = new mongoose.Schema({
  pet: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Pet',
    required: true
  },
  localizacao: {
    type: String,
    required: true
  },
  data: {
    type: Date,
    required: true
  },
  tempoDePermanencia: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Rastreabilidade', rastreabilidadeSchema, 'rastreabilidades');
