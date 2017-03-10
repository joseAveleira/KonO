(function () {
    'use strict';
    angular
        .module('blablapet.proyectosController', ['blablapet.proyectosService', 'angularify.semantic.rating', 'angularify.semantic.dropdown']);

    /*
     *  Controla el foco de la cabecera
     */
    function ProyectosController($scope, UserData, $location,AllProjects) {

        $scope.allprojects=AllProjects.query();
       // console.log(AllProyects.query());

    }

    angular
        .module('blablapet.proyectosController')
        .controller('ProyectosController', ProyectosController);


})();
