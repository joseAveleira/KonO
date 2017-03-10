(function () {
    'use strict';
    angular
        .module('blablapet.proyectosController', ['blablapet.proyectosService', 'angularify.semantic.rating', 'angularify.semantic.dropdown']);

    /*
     *  Controla el foco de la cabecera
     */
    function ProyectosController($scope, UserData, $location) {


        $scope.rating = 2;

        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.inicio = function () {

            $location.path('/');
        };

        $scope.proyectos = function () {

            $location.path('/proyectos');
        };
    }

    angular
        .module('blablapet.proyectosController')
        .controller('ProyectosController', ProyectosController);


})();
