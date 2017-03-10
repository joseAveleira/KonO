/* jshint node: true */

'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var cleSchema = new Schema({
    cle: {
        type: String
    },
    buscar: {
        type: Array
    },
    tipo: {
        type: String
    },
    datos: {
        type: String
    },

    diccionario: {
        type: Array
    }


});
// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('cleQueso', cleSchema);
module.exports = mongoose.model('cleHierba', cleSchema);
module.exports = mongoose.model('cleGitec', cleSchema);
