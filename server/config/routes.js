var path = require('path');
var util = require('util');
var express = require('express');
var votacao = require('../controllers/votacao');
var auth = require('../auth');
var usuarios = require('../controllers/usuario');
var sprints = require('../controllers/sprint');
var api = express.Router();
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
    app.use('/api', api);

    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });

    app.get('/teste', function() {
        console.log('teste');
    });

    app.post('/login', usuarios.login)(api);
    app.post('/conta', usuarios.add)(api);

    app.post('/sprint', auth(), sprints.add)(api);
    app.get('/sprints', auth(), sprints.all)(api);
    app.delete('/sprints/:id', auth(), sprints.remove)(api);

    // app.get('/api/sprints', votacao.all);
    // app.get('/api/sprints', votacao.add);
}
