(function () {
    'use strict';
    angular.module('blablapet.menuService', ['ngResource', 'blablapet.servername']);
    /*
     * Guarda el id y el nombre del CLE seleccionado
     */

    function UserData($resource, Nameserver) {
        return $resource(Nameserver.name + 'usuario/:idUsu', {
            cle: '@_id'
        });
    }

    angular
        .module('blablapet.menuService')

        .factory('UserData', UserData);

})();
