var mongoose = require('mongoose');

var TarefaSchema = new mongoose.Schema({
    sprintId: String,
    descricao: String,
    ordem: {type: Number, default: 0}
});

Tarefa = mongoose.model('Tarefa', TarefaSchema);

var EstoriaSchema = new mongoose.Schema({
    sprintId: String,
    descricao: String,
    tarefas: [Tarefa],
    ordem: {type: Number, default: 0}
});

Estoria = mongoose.model('Estoria', EstoriaSchema);
