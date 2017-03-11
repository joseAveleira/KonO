'use strict';
var express = require('express');
var colors = require('colors');
var modeline = require('./modelLineController');
var cle = require('./cleController');
var dic = require('./diccionarioController');
var men = require('./menuController');
var est = require('./estructuraController');
var sele = require('./selectorController');
var save = require('./guardarController');
var auth = require('../auth/authController');
var middleware = require('../auth/middleware');


module.exports = {
    RouterHandler: function (pDBHandler) {
        var router = express.Router();
        var dbHandler = pDBHandler.getConexion();
        var modelLineController = new modeline.ModelLineController(dbHandler);
        var cleController = new cle.CLEController(dbHandler);
        var diccionarioController = new dic.DiccionarioController(dbHandler);
        var estructuraController = new est.EstructuraController(dbHandler);
        var selectorController = new sele.SelectorController(dbHandler);
        var menuController = new men.MenuController(dbHandler);
        var autController = new auth.AuthController(dbHandler);
        var guardarController= new save.GuardarController(dbHandler);


        this.getRouter = function () {
            return router;
        };

        this.configureRoutes = function () {


            router.get('/proyectos', function (req, res) {
                console.log(' \n-Peticion /proyectos');
                cleController.allProyectos(req, res);
            });




            router.get('/login/:nombre/:password', function (req, res) {

                console.log(' \n-Peticion GET /login');
                autController.loginf(req, res);
            });

//ejemplo de acceso

            router.get('/acceso', middleware.ensureAuthenticated, function (req, res) {

                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/private');
                cleController.allCle(req, res, coleccion);
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



            var guardarDocumento = ['/Queso/guardarDocumento', '/Hierba/guardarDocumento', '/Gitec/guardarDocumento'];
            router.post(guardarDocumento, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('POST') + ' /' + coleccion + '/guardarDocumento');

                guardarController.guardarDocumento(req, res, coleccion);
            });




             var guardaImagen = ['/Queso/guardaImagen', '/Hierba/guardaImagen', '/Gitec/guardaImagen'];
            router.post(guardaImagen, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n\n-Peticion ' + colors.magenta('post') + ' /' + coleccion + '/guardaImagen');

                guardarController.guardaImagen(req, res, coleccion);
            });









        };
    }
};
