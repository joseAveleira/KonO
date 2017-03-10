/* jshint node: true */

'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var cleSchema = new Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: Array
    },
    image: {
        type: String
    }


});
// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('proyecto', cleSchema);
module.exports = mongoose.model('cleHierba', cleSchema);
module.exports = mongoose.model('cleGitec', cleSchema);
