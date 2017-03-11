'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var colors = require('colors');
var cors = require('cors');

module.exports = {
    APPHandler: function (pRouterPrefix, pRouterHandler, pPort) {
        var app = express(); // define our app using express

        var router = pRouterHandler.getRouter();
        var routerPrefix = pRouterPrefix;
        var port = pPort;
        var server = require('http').Server(app);
        var io = require('socket.io')(server);


        this.disableAccessControl = function () {
            // Add headers
            app.use(function (req, res, next) {

                // Website you wish to allow to connect
                res.setHeader('Access-Control-Allow-Origin', '*');

                // Request methods you wish to allow
                res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

                // Request headers you wish to allow
                res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

                // Set to true if you need the website to include cookies in the requests sent
                // to the API (e.g. in case you use sessions)
                res.setHeader('Access-Control-Allow-Credentials', true);

                // Pass to next layer of middleware
                next();
            });
        };

        this.run = function () {

            app.use(cors());
            app.use(bodyParser.urlencoded({
                extended: true
            }));

            app.use(express.static(__dirname + './../app'));

            //app.use(express.static(__dirname + 'uploads'));
            app.use(express.static(__dirname + './../uploads'));
            app.use(bodyParser.json());
            app.use(routerPrefix, router);

            io.sockets.on('connection', function(socket) {
                console.log('conectado');



            //console.log(io);
		});

            console.log('\n -Servidor en el puerto: ' + colors.green(port));
            app.listen(port);
        };
    }
};
