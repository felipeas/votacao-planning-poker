var mongoose = require('mongoose');
var _ = require('lodash');
var Votacao = mongoose.model('Votacao');
var Estoria = mongoose.model('Estoria');
var Tarefa = mongoose.model('Tarefa');

exports.get = function(req, res) {
    var query = { _id: req.params.id };
    Votacao.find(query}).exec(function(err, votacao) {
        if(!err) {
            console.log('votacao ' + query);
            res.json(votacao);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
};


exports.add = function(req, res) {
    Estoria.findOne({nome: req.body.nome, sprintId: req.body.sprintId}, function(err, existente) {
        if (err) {
            console.log('erro incluir sprint');
            return res.status(500).send(err);
        };
        if(existente) {
            console.log('existente');
            return res.status(400).send(err);
        };

        Estoria.create(req.body, function (err) {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            console.log('incluida estoria: ' + req.body.nome);
            return res.status(201).send();
        });
    });
};
