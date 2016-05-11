var mongoose = require('mongoose');
var _ = require('lodash');
var util = require('util');
var Voto = mongoose.model('Voto');
var Estoria = mongoose.model('Estoria');
var Tarefa = mongoose.model('Tarefa');
var Sprints = mongoose.model('Sprint');

getVotacao = function(req, res) {
    var id = req.params.id;
    console.log('listando votacao: ' + id);

    Sprints
    .findById(id)
    .populate({  
        path: 'estorias',
        model: 'Estoria',
        populate: {
            path: 'tarefas',
            model: 'Tarefa',
            populate 'votos',
            model: 'Voto'
        }
    })    
    .exec(function(err, sprint){      
        if(!err) {
            // console.log('sprint: ' + util.inspect(sprint));
            res.json(sprint);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
};

getEstoria = function(req, res) {
    var id = req.params.id;
    console.log('listando estoria: ' + id);

    Estoria
    .findById(id)    
    .exec(function(err, estoria){      
        if(!err) {
            // console.log('estoria: ' + util.inspect(estoria));
            req.params.id = estoria.sprint;
            return getVotacao(req,res);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
};

addEstoria = function(req, res) {
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

addTarefa = function(req, res) {
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

addVoto = function(req, res) {
    var id = req.body.tarefa;
    console.log(id);
    
    Tarefa
    .findById(id)
    .exec(function(err, tarefa){
        if(!err) {
            console.log('encountrou tarefa ' + util.inspect(tarefa));
            req.body.tarefa = tarefa._id;
            Voto.create(req.body, function (err, voto) {
                if (err) {
                    console.log(err);
                    return res.status(400).send(err);
                }
                console.log('incluida voto: ' + id + ' = ' + req.body.nome);
                
                tarefa.votos.push(voto);
                
                tarefa.save(function(err,doc){
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

remEstoria = function(req, res) {
    var query = { _id: req.params.id };
    Estoria.findOneAndRemove(query, function(err, data) {
        if(err) console.log('Error on delete');
        console.log('estoria excluida: ' + req.params.id);
        res.status(201).send('Estoria Excluida');
    });
};  

remTarefa = function(req, res) {
    var query = { _id: req.params.id };
    Tarefa.findOneAndRemove(query, function(err, data) {
        if(err) console.log('Error on delete');
        console.log('tarefa excluida: ' + req.params.id);
        res.status(201).send('Tarefa Excluida');
    });
};

remVoto = function(req, res) {
    var query = { _id: req.params.id };
    Voto.findOneAndRemove(query, function(err, data) {
        if(err) console.log('Error on delete');
        res.status(201).send('Voto Excluido');
    });
};

module.exports = {
    getVotacao: getVotacao,
    getEstoria: getEstoria,
    addEstoria: addEstoria,
    addTarefa: addTarefa,
    remEstoria: remEstoria,
    remTarefa: remTarefa,
    remVoto: remVoto
};