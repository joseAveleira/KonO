/* jshint node: true */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var usuariosSchema = new Schema({

    nombre: {
        type: String
    },
    password: {
        type: String
    },
    idUsu: {
        type: String
    }
});
// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('usuariosQueso', usuariosSchema);
module.exports = mongoose.model('usuariosHierba', usuariosSchema);
module.exports = mongoose.model('usuariosGitec', usuariosSchema);
