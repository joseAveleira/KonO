'use strict';
var esquema = require('../models/modelLine');

module.exports = {



    ModelLineController: function (conDB) {



        this.modelLines = function (req, res, coleccion) {
            var sugerencias = new conDB.model('ModelLines' + coleccion);
            console.log('  > ' + coleccion);
            sugerencias.find(function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                console.log('  > Listando: ' + sugerencia.length);
                res.status(200).json(sugerencia);
            });


        };
    }
};
