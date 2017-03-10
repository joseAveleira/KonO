'use strict';
var esquema = require('../models/cle');
var dic = require('../models/diccionario');
module.exports = {



    CLEController: function (conDB) {




        /*
         * Devuleve un CLE segun su nombre
         */
        this.FindNameCle = function (req, res, coleccion) {
            var celes = new conDB.model('cle' + coleccion);
            var diccionario = new conDB.model('d' + coleccion);

            console.log('  > CLE: ' + req.params.cle);

            celes.find(req.params, function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }


                //Buscar aqui en el diccionario
                var buscarDic = sugerencia[0].buscar;

                //aqui obtengo parametros buscar diccionario

                var busquedaOr = {
                    $or: []
                };
                for (var i = 0; i < buscarDic.length; i++) {
                    console.log('  > Diccionario: ' + buscarDic[i]);
                    var tipo = {
                        Tipo: buscarDic[i]
                    };
                    busquedaOr.$or.push(tipo);
                }

                diccionario.find(busquedaOr,
                    function (err, docs) {
                        sugerencia[0].diccionario = docs;
                        res.status(200).json(sugerencia[0]);
                    });
            });

        };





        /*
         * Devuleve todos los CLE
         */
        this.allProyectos = function (req, res,coleccion) {
            var celes = new conDB.model('proyecto');

            celes.find({}, function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                console.log('  > Listando: ' + sugerencia.length);
                res.status(200).json(sugerencia);
            });

        };


    }
};
