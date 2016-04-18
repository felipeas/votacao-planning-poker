var express = require('express');
var fs = require('fs');
var mongoose = require('mongoose');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var secrets = require('./config/secrets');

//Conexão com o Mongo
var mongoConnect = function() {
    mongoose.connect(secrets.db.mongo, function(err, res) {
        if(err) {
            console.log('Erro ao conectar: ' + secrets.db.mongo + '. ' + err);
        }else {
            console.log('Conectado: ' + secrets.db.mongo);
        }
    });
};

mongoConnect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', mongoConnect);

//Importacao de models
fs.readdirSync(__dirname + '/models').forEach(function(file) {
    if(~file.indexOf('.js')) require(__dirname + '/models/' + file);
});

// Configuracoes / rotas
require('./config/express')(app);
require('./config/routes')(app, io);

server.listen(app.get('port'));
console.log('It\'s Happening! ' + app.get('port'));
