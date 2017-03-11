'use strict';

module.exports = {

    QrController: function () {


        this.mensajes = function (req, res, io) {

            io.on('connection',function(Mysocket){

                Mysocket.on('qrmensaje',function(data) {
                    Mysocket.emit('qrmensaje2',data);
                });

            });

			res.status(200).send();
        };

    }
};
