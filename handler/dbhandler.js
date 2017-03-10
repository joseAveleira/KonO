'use strict';
var mongoose = require('mongoose'),
    database = require('../config/database');
var colors = require('colors');

module.exports = {
    DBHandler: function () {

        this.getConexion = function () {
            return mongoose.connect(database.url, function (err) {
                if (err) {
                    console.log(' -'+colors.red(err));
                } else {
                    console.log(' -Conecectado a la base de datos: '+colors.green(database.url)+'\n');
                }
            });

        };
    }

};
