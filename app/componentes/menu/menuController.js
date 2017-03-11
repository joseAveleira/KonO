(function () {
    'use strict';
    angular
        .module('blablapet.menuController', ['blablapet.menuService', 'angularify.semantic.rating', 'angularify.semantic.dropdown']);

    /*
     *  Controla el foco de la cabecera
     */
    function MenuController($scope, User, UserData, $location) {



        $scope.isActive = function (viewLocation) {
            return viewLocation === $location.path();
        };

        $scope.inicio = function () {

            $location.path('/');
        };

        $scope.proyectos = function () {

            $location.path('/proyectos');
        };

        $scope.usuarios = function () {

            $location.path('/usuarios');
        };

        $scope.initModal = function () {

            $('.modalLogin').modal();
        }

        $scope.modalInicio = function () {

            $('.modalLogin').modal('show');
        };

        $scope.modalRegistro = function () {

            console.error('En construccion');
        };


        $scope.login = function () {
            console.log($scope.usuario);
            console.log($scope.password);

            var consulta = {
                nombre: $scope.usuario,
                password: $scope.password
            };
            var datos = UserData.get(consulta);
            datos
                .$promise.then(
                    function (data) {


                            console.log('dato '+data.nombre);

                            $scope.usuario=data.nombre;


                    }
                );


        };
    }

    angular
        .module('blablapet.menuController')
        .controller('MenuController', MenuController);


})();
