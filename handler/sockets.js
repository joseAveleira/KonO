'use strict';

module.exports = {

	SocketIO: function(io) {
		io.sockets.on('connection', function(socket) {


            var texto='';
            socket.emit('qrmensaje2',texto);
             socket.on('qrmensaje',function(data) {
                    texto=data;
                    io.emit('qrmensaje2',texto);
                });


		});

		this.getSocketIO = function() {
			return io;
		};
	}
};
