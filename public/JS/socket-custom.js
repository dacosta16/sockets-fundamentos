var socket = io();
// escuchar
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

// Enviar Informacion
socket.emit('enviarMensaje', {
    usuario: 'Douglas',
    mensaje: 'HELLO WORLD'
}, function(resp) {
    console.log('Respuesta server: ', resp);
});


// Escuchar informacion
socket.on('enviarMensaje', function(resp) {
    console.log('Servidor: ', resp);
});