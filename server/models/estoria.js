var mongoose = require('mongoose');

var TarefaSchema = new mongoose.Schema({
    descricao: String,
    ordem: {type: Number, default: 0}
});

Tarefa = mongoose.model('Tarefa', TarefaSchema);

var EstoriaSchema = new mongoose.Schema({
    descricao: String,
    tarefas: [Tarefa],
    ordem: {type: Number, default: 0}
});

Estoria = mongoose.model('Estoria', EstoriaSchema);
