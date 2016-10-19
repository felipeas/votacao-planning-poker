var mongoose = require('mongoose'), Schema = mongoose.Schema;

var TarefaSchema = new mongoose.Schema({
    estoria : { type: Schema.Types.ObjectId, ref: 'Estoria' },
    nome: String,
    ordem: {type: Number, default: 0},
    votos: [{ type: Schema.Types.ObjectId, ref: 'Voto' }],
    travar:  {type: Boolean, default: false},
    pontos: {type: Number, default: 0},
});

Tarefa = mongoose.model('Tarefa', TarefaSchema);