var path = require('path');
var util = require('util');
var express = require('express');
var votacao = require('../controllers/votacao');
var auth = require('../auth');
var usuarios = require('../controllers/usuario');
var sprints = require('../controllers/sprint');

// var Voto = mongoose.model('Votacao');
// var Usuario = mongoose.model('Usuario');

// var usuarios = require('../controllers/usuarios')(app);
// var sprints = require('../controllers/sprints')(app);

module.exports = function(app, io) {
    // TODO:
    //  - Todas as outras rotas
    //  - loadsg
    // app.get('/votacoes', votacao.all);
    // app.post('/voto', function(req, res) {
    //     votacao.add(req, res);
    //     io.sockets.emit('votacao change');
    // });

    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });

    app.get('/teste', function() {
        console.log('teste');
    });

    app.post('/api/login', usuarios.login);
    app.post('/api/conta', usuarios.add);

    app.post('/api/sprint', auth(), sprints.add);
    app.get('/api/sprints', auth(), sprints.all);
    app.delete('/api/sprints/:id', auth(), sprints.remove);

    // app.get('/api/sprints', votacao.all);
    // app.get('/api/sprints', votacao.add);
}
