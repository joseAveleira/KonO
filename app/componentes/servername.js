(function () {
    'use strict';
    angular.module('blablapet.servername',[]);

    /*
     * Direccion del api del servidor
     */
    function Nameserver() {
        return {
            //en la url la coleccion a la que se accede (Queso,Hierba)
            name: 'http://localhost:11342/' //para local
           // name: 'http://178.62.82.186/' //para despliegue servidor
        };

    }
    angular
        .module('blablapet.servername')
        .factory('Nameserver', Nameserver);

})();
