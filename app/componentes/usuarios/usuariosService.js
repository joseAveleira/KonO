(function () {
    'use strict';
    angular.module('blablapet.usuariosService', ['ngResource', 'blablapet.servername']);
    /*
     * Guarda el id y el nombre del CLE seleccionado
     */

    function AllUsers($resource, Nameserver) {
        return $resource(Nameserver.name + 'usuarios', {
            cle: '@_id'
        });
    }

    angular
        .module('blablapet.usuariosService')
        .factory('AllUsers', AllUsers);

})();
