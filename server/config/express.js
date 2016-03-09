var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var MongoStore =  require('connect-mongo')(session);
var path = require('path');
var secrets = require('./secrets');
var swig = require('swig');
var methodOverride = require('method-override');
var Iso = require('iso');

module.exports = function (app) {
    app.set('port', (process.env.PORT || 3000));
    app.engine('html', swig.renderFile);
    app.set('view engine', 'html');
    app.set('views', path.join(__dirname, '..', 'views'));

    app.set('view cache', false);

    swig.setDefaults({cache: false});

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(methodOverride());
    app.use('/static', express.static(path.join(__dirname, '../..', 'public')));

    app.use(cookieParser());

    app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secrets.sessionSecret,
    store: new MongoStore({ url: secrets.db.mongo, autoReconnect: true})
    }));

    //TODO usar Flash
};
