(function () {
    'use strict';
    angular
        .module('blablapet.usuariosController', ['blablapet.usuariosService','blablapet.menuService']);

    /*
     *  Controla el foco de la cabecera
     */
    function UsuariosController($scope, $location, AllUsers, Mysocket,User) {


        $scope.enviarChat = function () {

            console.log(User.getNombre());
            Mysocket.emit('chatmessage','<b>'+User.getNombre()+'</b>: '+$scope.textoChat+'<br/>');
            $scope.textoChat='';
        };

        $scope.resultado='';
        Mysocket.on('chatmessage', function (data) {
            $scope.$apply(function () {
                $scope.resultado += data;
            });
        });

        $scope.allUsers = AllUsers.query();

        $scope.rating = function () {
            // All your normal JS code goes in here
            $('.rating').rating();
        };

        $scope.dimmer = function () {

            $('.special.cards .image').dimmer({
                on: 'hover'
            });
        };

        $scope.initModalChat = function () {
            $('.modalChat').modal();
        };

        $scope.modalChat = function (usuarioChat, usuarioChatIMG) {
            console.log(usuarioChatIMG);
            $scope.usuarioChatIMG = usuarioChatIMG;
            $scope.usuarioChat = usuarioChat;

            $('.modalChat')
                .modal('setting', 'transition', 'horizontal flip')
                .modal('show');
        };

        $scope.enviarEnter = function(keyEvent) {
          if (keyEvent.which === 13) {

              console.log('holaaa');
              $scope.enviarChat();
          }
        };

    }

    angular
        .module('blablapet.usuariosController')
        .controller('UsuariosController', UsuariosController);


})();
