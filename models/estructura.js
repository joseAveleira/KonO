/* jshint node: true */

'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var estructuraSchema = new Schema({


    IdMenu: {
        type: Number
    },
    NumeroMenu: {
        type: String
    },
    Texto: {
        type: String
    },
    Ayuda: {
        type: String
    },

    ModelLines: {
        type: Array
    },
    ReplaceModelLine: {
        type: String
    },
    Selectores: {
        type: Array
    }

});

// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('estructuraQueso', estructuraSchema);
module.exports = mongoose.model('estructuraHierba', estructuraSchema);
module.exports = mongoose.model('estructuraGitec', estructuraSchema);
