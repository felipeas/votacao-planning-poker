var mongoose = require('mongoose');
var _ = require('lodash');
var Usuario = mongoose.model('Usuario');

exports.login = function(req, res) {
    console.log(req.body.email);
    Usuario.findOne({email: req.body.email, senha: req.body.senha}, function(err, logou) {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        if (logou) {
            console.log('usuario: ' + req.body.email + ' - logado');
            return res.status(200).send(logou);
        }
    });
};

exports.add = function(req, res) {
    console.log(req.body.email);

    Usuario.findOne({email: req.body.email}, function(err, existente) {
        if (err) {
            console.log('erro incluir usuario');
            return res.status(500).send(err);
        };
        if(existente) {
            console.log('existente');
            return res.status(400).send(err);
        };

        Usuario.create(req.body, function (err) {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            return res.status(200).send('Usuário cadastrado');
        });
    });
};
