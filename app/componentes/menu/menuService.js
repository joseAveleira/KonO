(function () {
    'use strict';
    angular.module('blablapet.menuService', ['ngResource', 'blablapet.servername']);
    /*
     * Guarda el id y el nombre del CLE seleccionado
     */

    function UserData($resource, Nameserver) {
        return $resource(Nameserver.name + 'login/:nombre/:password', {
            cle: '@_id'
        });
    }

     function User() {

        //http://stackoverflow.com/questions/32718264/updating-the-scope-variable-across-multiple-controllers-in-angularjs
        return {
            nombre: '',
            id: '',
            setNombre: function (newNombre, id) {
                this.nombre = newNombre;
                this.id = id;
            },
            getNombre: function () {
                return this.nombre;
            },
            getId: function () {
                return this.id;
            }
        };


    }

    angular
        .module('blablapet.menuService')

        .factory('User', User)
        .factory('UserData', UserData);

})();
