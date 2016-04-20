var mongoose = require('mongoose');
var _ = require('lodash');
var Sprints = mongoose.model('Sprint');

exports.get = function(req, res) {
    console.log('listar sprints');
    Sprints.find({encerrada: false}).exec(function(err, sprints) {
        if(!err) {
            console.log('listou sprints');
            res.json(sprints);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
}

exports.all = function(req, res) {
    console.log('listar sprints');
    Sprints.find({}).exec(function(err, sprints) {
        if(!err) {
            console.log('listou sprints');
            res.json(sprints);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
}

exports.add = function(req, res) {
    console.log('incluindo sprint: ' + req.body.nome);
    Sprints.findOne({nome: req.body.nome}, function(err, existente) {
        if (err) {
            console.log('erro incluir sprint');
            return res.status(500).send(err);
        };
        if(existente) {
            console.log('existente');
            return res.status(400).send(err);
        };

        Sprints.create(req.body, function (err) {
            if (err) {
                console.log(err);
                return res.status(400).send(err);
            }
            return res.status(200).send('sprint incluida');
        });
    });
};

exports.encerrar = function(req, res) {
    var query = { id: req.body.id };
    var dados = _.omit(req.body, omitKeys);

    dados.encerrada = true;

    Sprints.findOneAndUpdate(query, dados, function(err, data) {
        if(err) {
            console.log('deu pau')
        };

        res.status(200).send('sprint encerrada');
    });
};
