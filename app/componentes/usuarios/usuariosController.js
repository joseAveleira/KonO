(function () {
    'use strict';
    angular
        .module('blablapet.usuariosController', ['blablapet.usuariosService']);

    /*
     *  Controla el foco de la cabecera
     */
    function UsuariosController($scope, $location, AllUsers) {

        $scope.allUsers = AllUsers.query();

        $scope.rating = function () {
            // All your normal JS code goes in here
            $(".rating").rating();
        }

        $scope.dimmer = function () {

            $('.special.cards .image').dimmer({
                on: 'hover'
            });
        };

    }

    angular
        .module('blablapet.usuariosController')
        .controller('UsuariosController', UsuariosController);


})();
