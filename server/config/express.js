var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');

var compression = require('compression');
//var cookieParser = require('cookie-parser');
var MongoStore =  require('connect-mongo')(session);
var path = require('path');
var secrets = require('./secrets');
//var methodOverride = require('method-override');
var Iso = require('iso');

module.exports = function (app) {
    app.set('port', (process.env.PORT || 3000));

    app.use(compression());
    app.use(express.static('client/dist'));
    app.use(bodyParser.json({ limit: '20mb' }));
    app.use(bodyParser.urlencoded({ extended: true, limit: '20mb' }));

    //app.use(methodOverride());
    //app.use('/static', express.static(path.join(__dirname, '../../client/dist/index.html')));

    //app.use(cookieParser());

    app.use(session({
        resave: true,
        saveUninitialized: true,
        secret: secrets.sessionSecret,
        store: new MongoStore({ url: secrets.db.mongo, autoReconnect: true})
    }));

    //TODO usar Flash
};
