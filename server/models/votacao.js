var mongoose = require('mongoose');

var Voto = new mongoose.Schema({
    usuario_id: String,
    tarefa_id: String,
    voto: {type: Number, default: 0}
});

var VotacaoSchema = new mongoose.Schema({
    criacao: { type: Date, default: Date.now },
    votos: [Voto],
});

Votacao = mongoose.model('Votacao', VotacaoSchema);
