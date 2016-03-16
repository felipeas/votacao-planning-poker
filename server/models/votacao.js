var mongoose = require('mongoose');

var Voto = new mongoose.Schema({
    usuario_id: String,
    voto: {type: Number, default: 0}
});

var VotacaoSchema = new mongoose.Schema({
    id: String,
    criacao: { type: Date, default: Date.now },
    votos: [Voto],
});

Votacao = mongoose.model('Votacao', VotacaoSchema);
