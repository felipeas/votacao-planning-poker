var mongoose = require('mongoose');
var _ = require('lodash');
var util = require('util');
var Votacao = mongoose.model('Votacao');
var Estoria = mongoose.model('Estoria');
var Tarefa = mongoose.model('Tarefa');
var Sprints = mongoose.model('Sprint');

exports.getVotacao = function(req, res) {
    var id = req.params.id;
    console.log('listando votacao: ' + id);

    Sprints
    .findById(id)
    .populate({  
        path: 'estorias',
        model: 'Estoria',
        populate: {
            path: 'tarefas',
            model: 'Tarefa'
        }
    })    
    .exec(function(err, sprint){      
        if(!err) {
            console.log('sprint: ' + util.inspect(sprint));
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
    var id = req.body.estoria;
    console.log(id);
    
    Estoria
    .findById(id)
    .exec(function(err, estoria){
        if(!err) {
            console.log('encountrou estoria ' + util.inspect(estoria));
            req.body.estoria = estoria._id;
            Tarefa.create(req.body, function (err, tarefa) {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err);
                }
                console.log('incluida tarefa: ' + id + ' = ' + req.body.nome);
                
                estoria.tarefas.push(tarefa);
                
                estoria.save(function(err,doc){
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
