(function () {
    'use strict';
    angular.module('blablapet.proyectosService', ['ngResource', 'blablapet.servername']);
    /*
     * Guarda el id y el nombre del CLE seleccionado
     */

    function AllProyects($resource, Nameserver) {
        return $resource(Nameserver.name + 'proyectos', {
            cle: '@_id'
        });
    }

    angular
        .module('blablapet.proyectosService')

        .factory('AllProyects', AllProyects);

})();
