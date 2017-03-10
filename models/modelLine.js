/* jshint node: true */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var modelLineSchema = new Schema({
    id: {
        type: Number
    },
    sugerencia: {
        type: String
    },
    ejemplo: {
        type: String
    }

});
// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('ModelLinesQueso', modelLineSchema);
module.exports = mongoose.model('ModelLinesHierba', modelLineSchema);
module.exports = mongoose.model('ModelLinesGitec', modelLineSchema);
