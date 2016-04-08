var path = require('path');
var util = require('util');
var express = require('express');
var votacao = require('../controllers/votacao');
var usuarios = require('../controllers/usuario');
var mongoose = require('mongoose');
var Voto = mongoose.model('Votacao');
var Usuario = mongoose.model('Usuario');

module.exports = function(app, io) {
    // TODO:
    //  - Todas as outras rotas
    //  - loadsg
    app.get('/votacoes', votacao.all);
    app.post('/voto', function(req, res) {
        votacao.add(req, res);
        io.sockets.emit('votacao change');
    });

    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });

    app.get('/lo', function() {
        console.log('teste funcionou');
    });

    app.post('/api/login', usuarios.login);
    app.post('/api/conta', usuarios.add);
};
