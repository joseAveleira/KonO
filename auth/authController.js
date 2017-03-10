'use strict';
var esquema = require('../models/usuarios');
var service = require('./service');
module.exports = {



    AuthController: function (conDB) {



        this.login = function (req, res, coleccion) {
            var usuarios = new conDB.model('usuarios' + coleccion);

            console.log('  > Usuario: ' + req.body.nombre);
            console.log('  > Contraseña: ' + req.body.password);
            usuarios.findOne({
                $and: [{
                    nombre: req.body.nombre
            }, {
                    password: req.body.password
                }]
            }, function (err, usuario) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                if (usuario === null) {
                    return res.status(500).send();
                } else {
                    return res
                        .status(200)
                        .send({
                            token: service.createToken(usuario)
                        });
                }
            });
        };

        this.user = function (req, res) {
            console.log(req.params);
            var usuarios = new conDB.model('usuario');
            usuarios.findOne(req.params, function (err, usuario) {
                return res.status(200).json(usuario);
            });
        };

        this.allUser = function (req, res) {

            var usuarios = new conDB.model('usuario');

            usuarios.find({}, function (err, usuarios) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }

                    console.log('  > Listando: ' + usuarios.length);
                    res.status(200).json(usuarios);
                })
                .sort({
                    'estrellas': -1
                });



        };



    }
};
