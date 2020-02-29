const { io } = require('../server');


io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        message: 'Welcome to the Yongol'
    })

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    })

    //Escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        /*if (mensaje.usuario) {
            callback({
                resp: 'Todo salio OKKKK'
            });
        } else {
            callback({
                resp: 'Todo salio FAKYU'
            });
        };*/


    })


});