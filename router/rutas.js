const express = require('express');
const router = express.Router();
const server = express();
const path = require('path');

router.get('/', (req, res) =>{
    res.render("index")
});

router.get('/subir', (req, res) =>{
    res.sendFile(path.resolve('./public/subirContenido.html'));
});

module.exports = router;