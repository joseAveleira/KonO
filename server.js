

'use strict';
var app = require('./handler/apphandler');
var db = require('./handler/dbhandler');
var router = require('./controller/routercontroller');

var defaultPort = 11342;

var dbHandler = new db.DBHandler();
var routerHandler = new router.RouterHandler(dbHandler);
var appHandler = new app.APPHandler('/', routerHandler, defaultPort);


routerHandler.configureRoutes();
appHandler.disableAccessControl();
appHandler.run();
