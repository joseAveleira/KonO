'use strict';
var express = require('express');
var colors = require('colors');
var cle = require('./cleController');

var save = require('./guardarController');
var auth = require('../auth/authController');
var middleware = require('../auth/middleware');




module.exports = {
    RouterHandler: function (pDBHandler) {
        var router = express.Router();
        var dbHandler = pDBHandler.getConexion();
        var cleController = new cle.CLEController(dbHandler);
        var autController = new auth.AuthController(dbHandler),
            io = null;


        this.getRouter = function () {
            return router;
        };


        // socket, io
		this.setSocketIO = function(newIO) {
			io = newIO;
		};

        this.configureRoutes = function () {

                io.on('connection',function(Mysocket){



            });
            router.get('/proyectos', function (req, res) {
                console.log(' \n-Peticion /proyectos');
                cleController.allProyectos(req, res);
            });




            router.get('/login/:nombre/:password', function (req, res) {

                console.log(' \n-Peticion GET /login');
                autController.loginf(req, res);
            });


            router.get('/usuario/:idUsu', function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion GET /usuario/:idUsu');

                autController.user(req, res, coleccion);
            });
            router.get('/usuarios', function (req, res) {
                console.log(' \n-Peticion POST  /usuarios');

                autController.allUser(req, res);
            });














        };
    }
};
