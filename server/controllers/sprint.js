var mongoose = require('mongoose');
var _ = require('lodash');
var Sprints = mongoose.model('Sprint');

exports.get = function(req, res) {
    Sprints.find({encerrada: false}).exec(function(err, sprints) {
        if(!err) {
            console.log('sprints listadas');
            res.json(sprints);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
}

exports.all = function(req, res) {
    Sprints.find({}).exec(function(err, sprints) {
        if(!err) {
            console.log('sprints listadas todas');
            res.json(sprints);
        } else {
            console.log('deu pau');
            return res.status(400).send(err);
        }
    });
}

exports.add = function(req, res) {
    Sprints.findOne({nome: req.body.nome, encerrada: false}, function(err, existente) {
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
            console.log('incluida sprint: ' + req.body.nome);
            return res.status(201).send();
        });
    });
};

exports.encerrar = function(req, res) {
    var query = { _id: req.params.id };

    Sprints.findOneAndUpdate(query, {$set:{encerrada:true}}, {new: true}, function(err, data) {
        if(err) {
            console.log(err);
        };

        res.status(201).send();
    });
};
