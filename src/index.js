//const http = require('hppt');
//console.log('Prueba 1');
const express =  require('express');
const server = express();

server.get('/user', function(req, res){
    res.send('<H1>Hola Mundo </H1>');
    res.end();
});

server.use(express.static('public'));

server.listen(3060, function() {
    console.log('Node se esta ejecutando');
        
});
