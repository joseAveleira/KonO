(function () {
    'use strict';
    angular
        .module('blablapet.menuController', ['blablapet.menuService','angularify.semantic.rating','angularify.semantic.dropdown' ]);

    /*
     *  Controla el foco de la cabecera
     */
    function MenuController($scope, UserData, $location) {

      $scope.prueba='holaaaaaaaaaaaaaaa';

        $scope.despide=function(){
            $scope.prueba='adioss';
        };
        $scope.rating=2;

        $scope.isActive=function(viewLocation){
            return viewLocation === $location.path();
        };

        $scope.inicio = function() {

            $location.path('/');
        };

        $scope.proyectos = function() {

            $location.path('/proyectos');
        };
    }

    angular
        .module('blablapet.menuController')
        .controller('MenuController', MenuController);


})();
