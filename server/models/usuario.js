var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    id: String,
    senha: String,
    criacao: { type: Date, default: Date.now }
});

Usuario = mongoose.model('Usuario', UsuarioSchema);
