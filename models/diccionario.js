/* jshint node: true */

'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var diccionarioSchema = new Schema({
    Sp: {
        type: String
    },
    En: {
        type: String
    },
    Tipo: {
        type: String
    },
    Ejemplo: {
        type: String
    }

});

// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('dQueso', diccionarioSchema);
module.exports = mongoose.model('dHierba', diccionarioSchema);
module.exports = mongoose.model('dGitec', diccionarioSchema);
