var mongoose = require('mongoose'), Schema = mongoose.Schema;

var EstoriaSchema = new mongoose.Schema({
    sprint : { type: Schema.Types.ObjectId, ref: 'Sprint' },
    nome: String,
    ordem: {type: Number, default: 0},
    tarefas : [{ type: Schema.Types.ObjectId, ref: 'Tarefa' }],
    pontos: {type: Number, default: 0},
});

Estoria = mongoose.model('Estoria', EstoriaSchema);