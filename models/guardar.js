/* jshint node: true */

'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/*
 * Formato de la estructura listado documentos guardados
 */
var listaGuardado = new Schema({

    idUsu: {
        type: String
    },
    idGuardado: {
        type: Number


    },
    archivo: {
        type: String
    },
    borrado:{
        type: String
    }

});


// el nombre es el de la coleccion pero en singular
module.exports = mongoose.model('listaGuardadoQueso', listaGuardado);
module.exports = mongoose.model('listaGuardadoHierba', listaGuardado);
module.exports = mongoose.model('listaGuardadoGitec', listaGuardado);


/*
 * Formato de la estructura de steps guardados
 */
var guardado = new Schema({

    idGuardado: {
        type: String
    },
    step: {
        type: String
    },
    tituloEn: {
        type: String
    },
    texto: {
        type: String
    },
     foto: {
        type: Array
    }




});

module.exports = mongoose.model('guardarQueso', guardado);
module.exports = mongoose.model('guardarHierba', guardado);
module.exports = mongoose.model('guardarGitec', guardado);
