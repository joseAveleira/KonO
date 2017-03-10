/* jshint node: true */

'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura modelLine
 */
var menuSchema = new Schema({

    'IdEstructura': {
        type: String
    },
    'title': {
        type: String
    },
    'tituloEn': {
        type: String
    },
    'nodes': {
        type: Array
    }

});

// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('menuQueso', menuSchema);
module.exports = mongoose.model('menuHierba', menuSchema);
module.exports = mongoose.model('menuGitec', menuSchema);
