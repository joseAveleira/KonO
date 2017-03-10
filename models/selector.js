/* jshint node: true */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var selectorSchema = new Schema({

    IdSelector: {
        type: Number
    },
    Texto: {
        type: String
    },
    ModelLines: {
        type: Array
    },
    ReplaceModelLine: {
        type: Boolean
    },

});
// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('selectoresQueso', selectorSchema);
module.exports = mongoose.model('selectoresHierba', selectorSchema);
module.exports = mongoose.model('selectoresGitec', selectorSchema);
