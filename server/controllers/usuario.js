var mongoose = require('mongoose');
var _ = require('lodash');
var Usuario = mongoose.model('Usuario');

exports.login = function(req, res) {
    console.log('Tentativa de login');
    Usuario.findOne({email: req.body.email, senha: req.body.senha}, function(err, logou) {
        if(logou) {
            console.log('logado');
            res.redirect('/');
        }
    });
};

exports.all = function(req, res) {
  Usuario.find({}).exec(function(err, usuarios) {
    if(!err) {
      res.json(usuarios);
    } else {
      console.log('Erro localizar usuario');
    }
  });
};

exports.add = function(req, res) {
    Usuario.findOne({email: req.body.email}, function(err, existente) {
        if(existente) {
            console.log('existente ');
            res.status(400).send(err);
            res.redirect('/');
        }
    });


    Usuario.create(req.body, function (err) {
        if (err) {
            console.log(err);
            res.status(400).send(err);
        }
        res.status(200).send('Usuário cadastrado');
    });
};

exports.remove = function(req, res) {
    var query = { id: req.body.id };
    Usuario.findOneAndRemove(query, function(err, data) {
        
    if(err) console.log('Erro excluir Usuario');
        res.status(200).send('Usuário Excluído');
    });
};
