(function () {
    'use strict';
    angular
        .module('blablapet.inicioController', ['blablapet.inicioService' ]);




    /*
     *  Controla el foco de la cabecera
     */
    function InicioController($scope, UserData) {

      $scope.prueba='holaaaaaaaaaaaaaaa';

        $scope.despide=function(){
            $scope.prueba='adioss';
        }


    }




    angular
        .module('blablapet.inicioController')
        .controller('InicioController', InicioController);


})();
