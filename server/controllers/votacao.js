var mongoose = require('mongoose');
var _ = require('lodash');
var util = require('util');
var Voto = mongoose.model('Voto');
var Estoria = mongoose.model('Estoria');
var Tarefa = mongoose.model('Tarefa');
var Sprints = mongoose.model('Sprint');
var Usuario = mongoose.model('Usuario');
var basicAuth = require('basic-auth');

getVotacao = function (req, res) {
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
                populate: {
                    path: 'votos',
                    model: 'Voto',
                }
            }
        })
        .exec(function (err, sprint) {
            if (!err) {

                sprint.estorias.forEach(function (estoria, index, array) {
                    // console.log('estoria: ' + util.inspect(estoria));
                    estoria.pontos = getPontos(estoria);
                    sprint.pontos += estoria.pontos;
                });
                console.log('sprint: ' + util.inspect(sprint));
                res.json(sprint);
            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
};

getEstoria = function (req, res) {
    var id = req.params.id;
    console.log('listando estoria: ' + id);

    Estoria
        .findById(id)
        .exec(function (err, estoria) {
            if (!err) {
                // console.log('estoria: ' + util.inspect(estoria));
                req.params.id = estoria.sprint;
                // console.log(getPontos(estoria));
                return getVotacao(req, res);
            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
};

getTarefa = function (req, res) {
    var id = req.params.id;
    console.log('listando tarefa: ' + id);

    Tarefa
        .findById(id)
        .populate({
            path: 'estoria',
            model: 'Estoria',
        })
        .exec(function (err, tarefa) {
            if (!err) {
                req.params.id = tarefa.estoria.sprint;
                return getVotacao(req, res);
            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
};

addEstoria = function (req, res, next) {
    var id = req.body.sprint;
    console.log(id);

    Sprints
        .findById(id)
        .exec(function (err, sprint) {
            if (!err) {
                req.body.sprint = sprint._id;
                Estoria.create(req.body, function (err, estoria) {
                    if (err) {
                        console.log(err);
                        return res.status(400).send(err);
                    }
                    console.log('incluida estoria: ' + req.body.nome);
                    sprint.estorias.push(estoria);
                    sprint.save(function (err, doc) {
                        if (err) {
                            console.log(err);
                            return res.status(400).send(err);
                        }
                    });

                    // io.emit('estoria', estoria);
                    return res.status(201).send();
                });
            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
};

addTarefa = function (req, res) {
    var id = req.body.estoria;
    console.log(id);

    Estoria
        .findById(id)
        .exec(function (err, estoria) {
            if (!err) {
                console.log('encountrou estoria ' + util.inspect(estoria));
                req.body.estoria = estoria._id;
                Tarefa.create(req.body, function (err, tarefa) {
                    if (err) {
                        console.log(err);
                        return res.status(400).send(err);
                    }
                    console.log('incluida tarefa: ' + id + ' = ' + req.body.nome);

                    estoria.tarefas.push(tarefa);

                    estoria.save(function (err, doc) {
                        if (err) {
                            console.log(err);
                            return res.status(400).send(err);
                        }
                    });

                    // io.emit('tarefa', tarefa);
                    return res.status(201).send();
                });
            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
};

addTarefaPontos = function (req, res) {
    var id = req.params.id;
    console.log(id);

    Tarefa
        .findById(id)
        .exec(function (err, tarefa) {
            if (!err) {
                console.log('encountrou tarefa ' + util.inspect(tarefa));
                tarefa.pontos = req.body.pontos;
                tarefa.travar = true;

                tarefa.save(function (err, doc) {
                    if (err) {
                        console.log(err);
                        return res.status(400).send(err);
                    }
                });

                return res.status(201).send();

            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
};

addVoto = function (req, res) {
    var id = req.body.tarefa;
    console.log(id);

    //TODO: Apagar voto do usuário

    Tarefa
        .findById(id)
        .exec(function (err, tarefa) {
            if (!err) {
                console.log('encountrou tarefa ' + util.inspect(tarefa));
                req.body.tarefa = tarefa._id;
                req.body.usuario = req.user;
                Voto.create(req.body, function (err, voto) {
                    if (err) {
                        console.log(err);
                        return res.status(400).send(err);
                    }
                    console.log('incluida voto: ' + id + ' = ' + util.inspect(voto));

                    tarefa.votos.push(voto);

                    tarefa.save(function (err, doc) {
                        if (err) {
                            console.log(err);
                            return res.status(400).send(err);
                        }
                    });

                    // io.emit('voto', voto);
                    return res.status(201).send();
                });
            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
};

remEstoria = function (req, res) {
    var query = { _id: req.params.id };
    Estoria.findOneAndRemove(query, function (err, data) {
        if (err) console.log('Error on delete');
        console.log('estoria excluida: ' + req.params.id);
        res.status(201).send('Estoria Excluida');
    });
};

remTarefa = function (req, res) {
    var query = { _id: req.params.id };
    
    Tarefa.findOneAndRemove(query, function (err, data) {
        if (err) console.log('Error on delete');
        console.log('tarefa excluida: ' + req.params.id);
        res.status(201).send('Tarefa Excluida');
    });
};

remTarefaPontos = function (req, res) {
    var id = req.params.id;
    Tarefa
        .findById(id)
        .exec(function (err, tarefa) {
            if (!err) {
                console.log('encountrou tarefa ' + util.inspect(tarefa));
                tarefa.pontos = 0;
                tarefa.travar = false;

                tarefa.save(function (err, doc) {
                    if (err) {
                        console.log(err);
                        return res.status(400).send(err);
                    }
                });

                return res.status(201).send();

            } else {
                console.log('erro desconhecido');
                return res.status(400).send(err);
            }
        });
}

remVoto = function (req, res) {
    var query = { _id: req.params.id };

    Voto.findOneAndRemove(query, function (err, data) {
        if (err) console.log('Error on delete');
        res.status(201).send('Voto Excluido');
    });

};

var getPontos = function (estoria) {
    var soma = 0;
    if (estoria) {
        estoria.tarefas.forEach(function (tarefa, index, array) {
            soma += tarefa.pontos;
            // console.log('estoria: ' + util.inspect(estoria));
        });
        console.log(soma);
        return soma;
    }

    return 0;
};

module.exports = {
    getVotacao: getVotacao,
    getEstoria: getEstoria,
    getTarefa: getTarefa,
    addEstoria: addEstoria,
    addTarefa: addTarefa,
    addTarefaPontos: addTarefaPontos,
    remTarefaPontos: remTarefaPontos,
    addVoto: addVoto,
    remEstoria: remEstoria,
    remTarefa: remTarefa,
    remVoto: remVoto
};