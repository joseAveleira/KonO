'use strict';
var esquema = require('../models/estructura');
var esquemaModelLine = require('../models/modelLine');
var esquemaSelector = require('../models/selector');
module.exports = {



    EstructuraController: function (conDB) {



        this.allEstructura = function (req, res, coleccion) {
            var sugerencias = new conDB.model('estructura' + coleccion);
            sugerencias.find(function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                console.log('  > Listando: ' + sugerencia.length);
                res.status(200).json(sugerencia);
            });
        };


        this.findEstructura = function (req, res, coleccion) {
            var steps = new conDB.model('estructura' + coleccion);
            var sugerencias = new conDB.model('ModelLines' + coleccion);
            var selectores = new conDB.model('selectores' + coleccion);
            console.log('  > NumeroMenu: ' + req.params.NumeroMenu);
            steps.findOne(req.params, function (err, step) {
                if (err) {
                    return res.status(500).send(err.message);
                }
                var busquedaOr = {
                    $or: []
                };

                if (step.Selectores.length > 0) {
                    for (var j = 0; j < step.Selectores.length; j++) {
                        console.log('  > Buscar Selector id: ' + step.Selectores[j]);
                        var idselector = {
                            IdSelector: step.Selectores[j]
                        };
                        busquedaOr.$or.push(idselector);
                    }

                    //console.log(selectores.find(busquedaOr));

                    selectores.find(busquedaOr, function (err, selectores) {
                        step.Selectores = selectores;
                        res.status(200).json(step);

                    });


                } else if (step.ModelLines.length > 0) {
                    for (var i = 0; i < step.ModelLines.length; i++) {
                        console.log('  > Buscar ModelLine id: ' + step.ModelLines[i]);
                        var idModelLine = {
                            id: step.ModelLines[i]
                        };
                        busquedaOr.$or.push(idModelLine);

                    }

                    sugerencias.find(busquedaOr, function (err, modelLines) {

                        //console.log(modelLines);
                        step.ModelLines = modelLines;
                        res.status(200).json(step);

                    });

                } else {
                    console.log('  > Sin ModelLines');
                    res.status(200).json(step);
                }







            });
        };




    }
};
