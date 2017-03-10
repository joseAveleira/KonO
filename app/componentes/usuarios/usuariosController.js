(function () {
    'use strict';
    angular
        .module('blablapet.usuariosController', ['blablapet.usuariosService']);

    /*
     *  Controla el foco de la cabecera
     */
    function UsuariosController($scope, $location,AllUsers) {

        //$scope.AllUsers=AllProjects.query();
        console.log(AllUsers.query());

    }

    angular
        .module('blablapet.usuariosController')
        .controller('UsuariosController', UsuariosController);


})();
