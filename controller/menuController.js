'use strict';
var esquema = require('../models/menu');
module.exports = {



    MenuController: function (conDB) {



        this.vistaMenu = function (req, res, coleccion) {
            var sugerencias = new conDB.model('menu' + coleccion);
            sugerencias
                .find(function (err, sugerencia) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }

                    console.log('  > Listando: ' + sugerencia.length);
                    res.status(200).json(sugerencia);
                })
                .sort({
                    'IdEstructura': 1
                });
        };


    }
};
