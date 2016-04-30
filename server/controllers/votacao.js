var mongoose = require('mongoose');
var _ = require('lodash');
var util = require('util');
var Votacao = mongoose.model('Votacao');
var Estoria = mongoose.model('Estoria');
var Tarefa = mongoose.model('Tarefa');
var Sprints = mongoose.model('Sprint');

exports.getVotacao = function(req, res) {
    var id = req.params.id;
    console.log(id);
    
    Sprints
    .findById(id)
    .populate('estorias')
    .exec(function(err, sprint){
        if(!err) {
            console.log('votacao ' + util.inspect(sprint));
            res.json(sprint);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
};


exports.addEstoria = function(req, res) {
    var id = req.body.sprint;
    console.log(id);
    
    Sprints
    .findById(id)
    .exec(function(err, sprint){
        if(!err) {
            console.log('encountrou sprint ' + util.inspect(sprint));
            req.body.sprint = sprint._id;
            Estoria.create(req.body, function (err, estoria) {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err);
                }
                console.log('incluida estoria: ' + req.body.nome);
                sprint.estorias.push(estoria);
                sprint.save(function(err,doc){
                    if (err) {
                        console.log(err);
                        return res.status(400).send(err);
                    }
                });
    
                return res.status(201).send();
            });
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });

};

exports.addTarefa = function(req, res) {
    Tarefa.findOne({nome: req.body.nome, estoriaId: req.body.estoriaId}, function(err, existente) {
        if (err) {
            console.log('erro incluir tarefa');
            return res.status(500).send(err);
        };
        if(existente) {
            console.log('existente');
            return res.status(400).send(err);
        };

        Tarefa.create(req.body, function (err) {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            console.log('incluida tarefa: ' + req.body.nome);
            return res.status(201).send();
        });
    });
};
