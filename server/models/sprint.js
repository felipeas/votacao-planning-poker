var mongoose = require('mongoose');

var SprintSchema = new mongoose.Schema({
    nome: String,
    criacao: { type: Date, default: Date.now }
});

Sprint = mongoose.model('Sprint', SprintSchema);
