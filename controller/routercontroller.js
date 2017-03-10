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


            var modelLines = ['/Queso/ModelLines',
                              '/Hierba/ModelLines',
                              '/Gitec/ModelLines'
                             ];
            router.get(modelLines, function (req, res) {
                //coleccion obtiene la primera palabra de la ruta queso, hierba...
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/ModelLines');
                modelLineController.modelLines(req, res, coleccion);

            });


            var cleget = ['/Queso/Cle/:cle', '/Hierba/Cle/:cle', '/Gitec/Cle/:cle'];
            router.get(cleget, function (req, res) {
                console.log('  ->>>' + req.originalUrl);
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Cle/:cle');
                cleController.FindNameCle(req, res, coleccion);

            });


            var cle = ['/Queso/Cle', '/hierba/Cle', '/Gitec/Cle'];
            router.get(cle, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Cle');
                cleController.allCle(req, res, coleccion);
            });


            var diccionario = ['/Queso/Diccionario', '/Hierba/Diccionario', '/Gitec/Diccionario'];
            router.get(diccionario, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Diccionario');
                diccionarioController.allEntradas(req, res, coleccion);
            });


            var diccionarioGet = ['/Queso/Diccionario/:Tipo', '/Hierba/Diccionario/:Tipo', '/Gitec/Diccionario/:Tipo'];
            router.get(diccionarioGet, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Diccionario/:Tipo');
                diccionarioController.findTipo(req, res, coleccion);
            });


            var estructura = ['/Queso/Estructura', '/Hierba/Estructura', '/Gitec/Estructura'];
            router.get(estructura, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Estructura');
                estructuraController.allEstructura(req, res, coleccion);
            });

            var estructuraget = ['/Queso/Estructura/:NumeroMenu', '/Hierba/Estructura/:NumeroMenu', '/Gitec/Estructura/:NumeroMenu'];
            router.get(estructuraget, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Estructura/:NumeroMenu');
                estructuraController.findEstructura(req, res, coleccion);
            });


            var menu = ['/Queso/Menu', '/Hierba/Menu', '/Gitec/Menu'];
            router.get(menu, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Menu');
                menuController.vistaMenu(req, res, coleccion);
            });



            var selectores = ['/Queso/Selectores', '/Hierba/Selectores', '/Gitec/Selectores'];
            router.get(selectores, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Selectores');
                selectorController.allSelector(req, res, coleccion);
            });

            var selectoresget = ['/Queso/Selectores/:IdSelector', '/Hierba/Selectores/:IdSelector', '/Gitec/Selectores/:IdSelector'];
            router.get(selectoresget, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/Selectores/:IdSelector');
                selectorController.findSelector(req, res, coleccion);
            });

            var login = ['/Queso/login', '/Hierba/login', '/Gitec/login'];
            router.post(login, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('POST') + ' /' + coleccion + '/login');
                autController.login(req, res, coleccion);
            });

//ejemplo de acceso
            var acceso = ['/Queso/private', '/Hierba/private', '/Gitec/private'];
            router.get(acceso, middleware.ensureAuthenticated, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/private');
                cleController.allCle(req, res, coleccion);
            });


            var usuario = ['/Queso/usuario/:idUsu', '/Hierba/usuario/:idUsu', '/Gitec/usuario/:idUsu'];
            router.get(usuario, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/usuario/:idUsu');

                autController.user(req, res, coleccion);
            });


            var listaCargar = ['/Queso/listacargar/:idUsu', '/Hierba/listacargar/:idUsu', '/Gitec/listacargar/:idUsu'];
            router.get(listaCargar, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/listacargar/:idUsu');

                guardarController.listaGuardado(req, res, coleccion);
            });

             var cargar = ['/Queso/cargar/:idGuardado/:step', '/Hierba/cargar/:idGuardado/:step', '/Gitec/cargar/:idGuardado/:step'];
            router.get(cargar, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/cargar/:idGuardado/:step');

                guardarController.cargar(req, res, coleccion);
            });


             var guardar = ['/Queso/guardar', '/Hierba/guardar', '/Gitec/guardar'];
            router.post(guardar, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('POST') + ' /' + coleccion + '/guardar');

                guardarController.guardar(req, res, coleccion);
            });

            var guardarDocumento = ['/Queso/guardarDocumento', '/Hierba/guardarDocumento', '/Gitec/guardarDocumento'];
            router.post(guardarDocumento, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('POST') + ' /' + coleccion + '/guardarDocumento');

                guardarController.guardarDocumento(req, res, coleccion);
            });


             var vistaDocumento = ['/Queso/vistaDocumento/:idGuardado', '/Hierba/vistaDocumento/:idGuardado', '/Gitec/vistaDocumento/:idGuardado'];
            router.get(vistaDocumento, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('GET') + ' /' + coleccion + '/vistaDocumento/:idGuardado');

                guardarController.vistaprevia(req, res, coleccion);
            });


             var guardaImagen = ['/Queso/guardaImagen', '/Hierba/guardaImagen', '/Gitec/guardaImagen'];
            router.post(guardaImagen, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n\n-Peticion ' + colors.magenta('post') + ' /' + coleccion + '/guardaImagen');

                guardarController.guardaImagen(req, res, coleccion);
            });


             var borarimagen = ['/Queso/borraImagen', '/Hierba/borraImagen', '/Gitec/borraImagen'];
            router.post(borarimagen, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('post') + ' /' + coleccion + '/borraImagen');

                guardarController.borrarImagen(req, res, coleccion);
            });


            var borradocumento = ['/Queso/borraDocumento', '/Hierba/borraDocumento', '/Gitec/borraDocumento'];
            router.post(borradocumento, function (req, res) {
                var coleccion = req.originalUrl.split('/')[1];
                console.log(' \n-Peticion ' + colors.magenta('post') + ' /' + coleccion + '/borraDocumento');

                guardarController.borrarDocumento(req, res, coleccion);
            });




        };
    }
};
