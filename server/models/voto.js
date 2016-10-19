var mongoose = require('mongoose'), Schema = mongoose.Schema;

var VotoSchema = new mongoose.Schema({
    tarefa : { type: Schema.Types.ObjectId, ref: 'tarefa' },
    usuario : { type: Schema.Types.ObjectId, ref: 'usuario' },
    voto: {type: Number, default: 0}
});

Voto = mongoose.model('Voto', VotoSchema);