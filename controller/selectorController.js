'use strict';
var esquema = require('../models/selector');
var esquemaModelLine = require('../models/modelLine');
module.exports = {



    SelectorController: function (conDB) {



        this.allSelector = function (req, res, coleccion) {
            var sugerencias = new conDB.model('selectores' + coleccion);
            sugerencias.find(function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                console.log('  > Listando: ' + sugerencia.length);
                res.status(200).json(sugerencia);
            });
        };



        this.findSelector = function (req, res, coleccion) {
            var selector = new conDB.model('selectores' + coleccion);
            var sugerencias = new conDB.model('ModelLines' + coleccion);
            selector.findOne(req.params, function (err, sele) {
                if (err) {
                    return res.status(500).send(err.message);
                }
                var busquedaOr = {
                    $or: []
                };
                //console.log(sele.ModelLines.length);

                for (var i = 0; i < sele.ModelLines.length; i++) {
                    console.log('  > Buscar ModelLine id: ' + sele.ModelLines[i]);
                    var idModelLine = {
                        id: sele.ModelLines[i]
                    };
                    busquedaOr.$or.push(idModelLine);

                }

                  sugerencias.find(busquedaOr, function (err, modelLines) {

                        //console.log(modelLines);
                        sele.ModelLines = modelLines;
                        res.status(200).json(sele);

                    });



            });
        };

    }
};
