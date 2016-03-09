var mongoose = require('mongoose');

var VotacaoSchema = new mongoose.Schema({
  id: String,
  count: { type: Number, min: 0 },
});

Votacao = mongoose.model('Votacao', VotacaoSchema);
