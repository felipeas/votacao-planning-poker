var mongoose = require('mongoose');

var UsuarioSchema = new mongoose.Schema({
    id:  { type: String, unique: true, index: true },
    email: String,
    nome: String,
    senha: String,
    criacao: { type: Date, default: Date.now }
});

Usuario = mongoose.model('Usuario', UsuarioSchema);
