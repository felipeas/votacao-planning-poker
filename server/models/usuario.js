var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    email: String,
    nome: String,
    senha: String,
    criacao: { type: Date, default: Date.now }
});

Usuario = mongoose.model('Usuario', UsuarioSchema);
