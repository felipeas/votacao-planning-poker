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
    // app.get('/teste', function() {
    //     console.log('teste');
    // });

    api.post('/login', usuarios.login);
    api.post('/conta', usuarios.add);

    api.get('/sprints', auth(), sprints.get);
    
    api.post('/sprints', auth(), sprints.add);
    api.delete('/sprints/:id', auth(), sprints.encerrar);
    
    api.get('/votacao/:id', auth(), votacao.getVotacao);
    api.get('/estorias/:id', auth(), votacao.getEstoria);
    api.get('/tarefas/:id', auth(), votacao.getTarefa);
    
    api.post('/estorias', auth(), function (req, res) {
        votacao.addEstoria(req, res);
        io.emit('estoria', 'estoriaId');
    });
    
    // api.delete('/estorias/:id', auth(), votacao.remEstoria);
    api.delete('/estorias/:id', auth(), function (req, res) {
        votacao.remEstoria(req,res);
        io.emit('estoria', 'estoriaId');
    });
    
    // api.post('/tarefas', auth(), votacao.addTarefa);
    // api.delete('/tarefas/:id', auth(), votacao.remTarefa);
    
    api.post('/tarefas', auth(), function (req, res) {
        votacao.addTarefa(req, res);
        io.emit('tarefa', 'tarefaId');
    });
    
    api.post('/tarefas/:id', auth(), function (req, res) {
        votacao.addTarefaPontos(req, res);
        io.emit('tarefa', 'tarefaId');
    });
    
     api.delete('/tarefasPontos/:id', auth(), function (req, res) {
        votacao.remTarefaPontos(req, res);
        io.emit('tarefa', 'tarefaId');
    });
    
    api.delete('/tarefas/:id', auth(), function (req, res) {
        votacao.remTarefa(req, res);
        io.emit('tarefa', 'tarefaId');
    });
    
    //api.post('/votos', auth(), votacao.addVoto);
    //api.delete('/votos/:id', auth(), votacao.remVoto);
    
    api.post('/votos', auth(), function (req, res) {
        votacao.addVoto(req, res);
        io.emit('voto', 'votoId');
    });
    
    api.delete('/votos/:id', auth(), function (req, res) {
        votacao.remVoto(req, res);
        io.emit('voto', 'votoId');
    });
    
    app.get('*', function (req, res) {
      res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
    });
}
