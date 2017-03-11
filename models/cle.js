/* jshint node: true */

'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura Basica un proyecto propuesto
 */
var cleSchema = new Schema({
    nombre: {
        type: String
    },
    descripcion: {
        type: String
    },
    image: {
        type: String
    }


});
// el nombre es el de la coleccion pero en singular!
module.exports = mongoose.model('proyecto', cleSchema);

