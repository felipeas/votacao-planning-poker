var express = require('express');
var votacao = require('../controllers/votacao');
var mongoose = require('mongoose');
var Voto = mongoose.model('Votacao');

module.exports = function(app, io) {
    // TODO:
    //  - Todas as outras rotas
    //  - loadsg
    app.get('/votacoes', votacao.all);
    app.post('/voto', function(req, res) {
        votacao.add(req, res);
        io.sockets.emit('votacao change');
    });
};;
