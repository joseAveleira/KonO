/* jshint node: true */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var usuariosSchema = new Schema({

    idUsu: {
        type: Number
    },
    nombre: {
        type: String
    },
    area: {
        type: String
    },
    descripcion: {
        type: String
    },
    localidad: {
        type: String
    },
    imagen: {
        type: String
    },
    estrellas: {
        type: Number
    }

});
// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('usuario', usuariosSchema);
