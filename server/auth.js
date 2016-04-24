var basicAuth = require('basic-auth');
var db = require('./db');
var mongoose = require('mongoose');
var Usuario = mongoose.model('Usuario');

module.exports = function (options) {
    options = options || {};

    function auth(req, res, next) {
        var user = basicAuth(req);

        if (!user || !user.name || !user.pass) {
            return unauthorized(res, next);
        }

        Usuario.findOne({email: user.name, senha: user.pass}, function(err, logou) {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            if (logou) {
                console.log('usuario: ' + user.name + ' - autorizado');
                req.user = logou
                return next();
            }

            return unauthorized(res, next);
        });
    }

    function unauthorized(res, next) {
        if (options.optional) {
            next();
        } else {
            res.send(401);
        }
    }

    return auth;
};
