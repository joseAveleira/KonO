'use strict';
var esquema = require('../models/diccionario');
module.exports = {



    DiccionarioController: function (conDB) {



        this.allEntradas = function (req, res,coleccion) {
            var sugerencias = new conDB.model('d'+coleccion);
            sugerencias.find(function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                console.log('  > Listando: ' + sugerencia.length);
                res.status(200).json(sugerencia);
            });
        };
        this.findTipo = function (req, res) {
            console.log(req.params);
            sugerencias.find(req.params, function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                console.log('  > Listando: ' + sugerencia.length);
                res.status(200).json(sugerencia);
            });
        };


    }
};
