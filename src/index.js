//const http = require('hppt');
//console.log('Prueba 1');
const express =  require('express');
const server = express();


server.use(express.static('public'));

server.use('/', require('../router/rutas'))

server.listen(3060, function() {
    console.log('Node se esta ejecutando');
        
});
