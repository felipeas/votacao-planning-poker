var mongoose = require('mongoose'), Schema = mongoose.Schema;

var SprintSchema = new mongoose.Schema({
    nome: String,
    criacao: { type: Date, default: Date.now },
    encerrada:  {type: Boolean, default: false},
    estorias : [{ type: Schema.Types.ObjectId, ref: 'Estoria' }]
});

Sprint = mongoose.model('Sprint', SprintSchema);

var EstoriaSchema = new mongoose.Schema({
    sprint : { type: Schema.Types.ObjectId, ref: 'Sprint' },
    nome: String,
    ordem: {type: Number, default: 0},
    tarefas : [{ type: Schema.Types.ObjectId, ref: 'Tarefa' }]
});

Estoria = mongoose.model('Estoria', EstoriaSchema);
    
var TarefaSchema = new mongoose.Schema({
    estoria : { type: Schema.Types.ObjectId, ref: 'Estoria' },
    nome: String,
    ordem: {type: Number, default: 0},
    votos: [{ type: Schema.Types.ObjectId, ref: 'Voto' }],
    pontos: {type: Number, default: 0},
});

Tarefa = mongoose.model('Tarefa', TarefaSchema);

var VotoSchema = new mongoose.Schema({
    tarefa : { type: Schema.Types.ObjectId, ref: 'tarefa' },
    usuario : { type: Schema.Types.ObjectId, ref: 'usuario' },
    voto: {type: Number, default: 0}
});

Voto = mongoose.model('Voto', VotoSchema);
