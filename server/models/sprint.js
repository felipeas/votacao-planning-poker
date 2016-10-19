var mongoose = require('mongoose'), Schema = mongoose.Schema;

var SprintSchema = new mongoose.Schema({
    nome: String,
    criacao: { type: Date, default: Date.now },
    encerrada:  {type: Boolean, default: false},
    estorias : [{ type: Schema.Types.ObjectId, ref: 'Estoria' }],
    pontos: {type: Number, default: 0},
});

Sprint = mongoose.model('Sprint', SprintSchema);