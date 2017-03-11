(function () {
    'use strict';
    angular.module('blablapet.usuariosService', ['ngResource', 'blablapet.servername']);
    /*
     * Guarda el id y el nombre del CLE seleccionado
     */

    function AllUsers($resource, Nameserver) {
        return $resource(Nameserver.name + 'usuarios', {
            cle: '@_id'
        });
    }

   function Mysocket($rootScope,Nameserver){
		var socket = io.connect('http://178.62.82.186:3000');
		//var socket = io.connect('http://localhost:4041');
		return {
			on: function(eventName, callback){
				socket.on(eventName, callback);
			},
			emit: function(eventName, data) {
				socket.emit(eventName, data);
			}
		};
	}

    angular
        .module('blablapet.usuariosService')
        .factory('AllUsers', AllUsers)
        .factory('Mysocket', Mysocket);

})();
