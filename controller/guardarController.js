'use strict';
var esquema = require('../models/guardar');
var multer = require('multer');

module.exports = {

    GuardarController: function (conDB) {


        /*
         * Carga un step segun el id guardado
         */
        this.cargar = function (req, res, coleccion) {
            var documentos = new conDB.model('guardar' + coleccion);
            //var diccionario = new conDB.model('d' + coleccion);

            console.log('  > Id guardado: ' + req.params.idGuardado);
            console.log('  > Step: ' + req.params.step);

            documentos.findOne({
                $and: [req.params]
            }, function (err, sugerencia) {
                if (err) {
                    return res.status(500).send(err.message);
                }

                res.status(200).json(sugerencia);

            });

        };


        /*
         * Guarda un step
         */
        this.guardar = function (req, res, coleccion) {
            var documentos = new conDB.model('guardar' + coleccion);
            //var diccionario = new conDB.model('d' + coleccion);

            console.log('  > Guardar Step');
            //console.log(req.body);
            documentos.findOne({
                $and: [{
                    idGuardado: req.body.idGuardado
                }, {
                    step: req.body.step
                }]
            }, function (err, stepGuarda) {


                //console.log(stepGuarda);

                if (stepGuarda === null) {
                    console.log('  > Se agrega');
                    var newStep = new documentos({
                        idGuardado: req.body.idGuardado,
                        step: req.body.step,
                        texto: req.body.texto,
                        tituloEn: req.body.tituloEn
                    });
                    newStep.save();
                    res.status(200).send();
                } else {
                    console.log('  > Se guarda');
                    stepGuarda.idGuardado = req.body.idGuardado;
                    stepGuarda.step = req.body.step;
                    stepGuarda.texto = req.body.texto;
                    stepGuarda.tituloEn = req.body.tituloEn;
                    stepGuarda.save();
                    res.status(200).send();
                }
            });

        };



        this.guardarDocumento = function (req, res, coleccion) {
            var documentos = new conDB.model('listaGuardado' + coleccion);
            //var diccionario = new conDB.model('d' + coleccion);

            console.log('  > Guardar Documento');
            console.log('  > Documento: ' + req.body.archivo);
            console.log('  > idUsuario: ' + req.body.idUsu);
            var dato = documentos
                .findOne({}, function (err, idMax) {
                    var idNuevo = 0;
                    if (idMax !== null) {
                        idNuevo = idMax.idGuardado;
                        idNuevo  = idNuevo+1;
                    }
                    console.log('  > idGuardado: ' + idNuevo);

                    var newDocument = new documentos({
                        idGuardado: idNuevo,
                        idUsu: req.body.idUsu,
                        borrado: 'no',
                        archivo: req.body.archivo
                    });
                    newDocument.save();

                    res.status(200).json(newDocument);


                })
                .sort({
                    idGuardado: -1
                })
                .limit(1);

        };


        /*
         * Devuleve todo el documento (para lavista previa)
         */
        this.vistaprevia = function (req, res, coleccion) {
            var celes = new conDB.model('guardar' + coleccion);
            console.log('  > idGuardado: ' + req.params.idGuardado);

            celes.find(req.params, function (err, sugerencia) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }

                    console.log('  > Listando: ' + sugerencia.length);
                    res.status(200).json(sugerencia);
                })
                .sort({
                    'step': 1
                });
        };


        /*
         * Devuleve lista de documentos guardados
         */
        this.listaGuardado = function (req, res, coleccion) {
            var celes = new conDB.model('listaGuardado' + coleccion);
            console.log('  > IdUsu: ' + req.params.idUsu);

            celes.find(req.params, function (err, sugerencia) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }

                    console.log('  > Listando: ' + sugerencia.length);
                    res.status(200).json(sugerencia);
                })
                .sort({
                    'idGuardado': -1
                });
        };



        /*
         *Guarda una imagen
         */
        this.guardaImagen = function (req, res, coleccion) {


            var storage = multer.diskStorage({
                destination: function (req, file, callback) {
                    callback(null, './uploads/Queso/imagesUser');
                },
                filename: function (req, file, callback) {
                    //console.log(file);

                    var extension = file.mimetype.split('/');
                    callback(null, file.fieldname + '-' + Date.now() + '.' + extension[1]);
                }
            });

            var upload = multer({
                storage: storage,
            }).single('file');


            //var celes = new conDB.model('listaGuardado' + coleccion);
            //
            upload(req, res, function (err) {

                var documentos = new conDB.model('guardar' + coleccion);
                console.log('  > Guardar Imagen');
                console.log('  > idGuardado: ' + req.body.idGuardado);
                console.log('  > step: ' + req.body.step);
                console.log('  > Imagen: ' + req.file.filename);

                console.log('  > Guardar Step');
                //console.log(req.body);
                documentos.findOne({
                    $and: [{
                        idGuardado: req.body.idGuardado
                }, {
                        step: req.body.step
                }]
                }, function (err, stepGuarda) {



                    if (stepGuarda === null) {
                        console.log('  > Se agrega');
                        var newStep = new documentos({
                            idGuardado: req.body.idGuardado,
                            step: req.body.step,
                            texto: req.body.texto,
                            tituloEn: req.body.tituloEn,
                            foto: req.file.filename
                        });
                        newStep.save();
                        res.status(200).send();
                    } else {
                        console.log('  > Se guarda');
                        stepGuarda.idGuardado = req.body.idGuardado;
                        stepGuarda.step = req.body.step;
                        stepGuarda.texto = req.body.texto;
                        stepGuarda.tituloEn = req.body.tituloEn;
                        stepGuarda.foto.push(req.file.filename);

                        stepGuarda.save();
                        res.status(200).send(req.file);
                    }
                });




                if (err) {
                    return res.end('Error uploading file.');
                }
                //
            });

        };


        /*
         * Quita la imagen del array de imagenes
         */
        this.borrarImagen = function (req, res, coleccion) {

            var documentos = new conDB.model('guardar' + coleccion);
            documentos.findOne({
                $and: [{
                    idGuardado: req.body.idGuardado
                }, {
                    step: req.body.step
                }]
            }, function (err, stepGuarda) {

                for (var i = 0; i < stepGuarda.foto.length; i++) {
                    if (stepGuarda.foto[i] === req.body.nombre) {
                        console.log('  > Se borra  posicion: ' + i);
                        stepGuarda.foto.splice(i, 1);
                    }
                }

                stepGuarda.save();
                res.status(200).send();
            });


        };


        /*
         * pasa a borrado un documento
         */
        this.borrarDocumento = function (req, res, coleccion) {
            var celes = new conDB.model('listaGuardado' + coleccion);
            console.log('  >  borrar idGuardado: ' + req.body.idGuardado);

            celes.findOne(req.body, function (err, sugerencia) {
                    if (err) {
                        return res.status(500).send(err.message);
                    }
                    sugerencia.borrado = 'si';
                    //console.log(sugerencia);
                    sugerencia.save();
                    res.status(200).json();
                })
                .sort({
                    'idGuardado': -1
                });
        };





    }
};
