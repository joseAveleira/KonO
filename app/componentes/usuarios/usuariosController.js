(function () {
    'use strict';
    angular
        .module('blablapet.usuariosController', ['blablapet.usuariosService']);

    /*
     *  Controla el foco de la cabecera
     */
    function UsuariosController($scope, $location, AllUsers,Mysocket) {


        $scope.nombre = 'aaafa';
        Mysocket.emit('qrmensaje', $scope.nombre);
        Mysocket.on('qrmensaje2', function (data) {
            $scope.$apply(function () {
                $scope.resultado = data;
            });
        });

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

        $scope.initModalChat = function () {
            $('.modalChat').modal();
        }
        $scope.modalChat = function (usuarioChat, usuarioChatIMG) {
            console.log(usuarioChatIMG);
            $scope.usuarioChatIMG = usuarioChatIMG;
            $scope.usuarioChat = usuarioChat;

            $('.modalChat')
                .modal('setting', 'transition', 'horizontal flip')
                .modal('show');


        };


    }

    angular
        .module('blablapet.usuariosController')
        .controller('UsuariosController', UsuariosController);


})();
