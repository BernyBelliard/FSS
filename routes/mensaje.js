var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de mensaje
var Mensaje = mongoose.model('Mensaje');

/* GET users listing. */
/* Aca van las rutas para el mensaje */

router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

// Ruta de ejemplo que retorna a todos los mensajes
router.get('/', function (req, res, next) {
    Mensaje.find({}, function (err, mensajes) {
        if (err) {
            return next(err);
        }
        res.json(mensajes);
    });
});

/* Ruta para retorna un mensaje por id */
router.get('/id/:id', function(req, res, next) {
    Mensaje.findById(req.params.id, function (err, mensaje) {
        if (err) return next(err);
        res.json(mensaje);
    });
});

// Ruta de ejemplo que guarda un mensaje
router.post('/', function (req, res, next) {
    let mensaje = new Mensaje(req.body);
    mensaje.save(function (err, mensaje) {
        if (err) {
            return next(err);
        }
        // Envio el mensaje creado
        res.json(mensaje);
    });
});

/* Ruta para eliminar un mensaje */
router.delete('/id/:id', function(req, res, next) {
    Mensaje.findByIdAndRemove(req.params.id, function (err, mensaje) {
        if (err) return next(err);
        res.json(mensaje);
    });
});

/* Ruta para modificar un mensaje */
router.put('/id/:id', function(req, res, next) {
    Mensaje.findByIdAndUpdate(req.params.id, req.body, function (err, mensaje) {
        if (err) return next(err);
        res.json(mensaje);
    });
});

// Publico las rutas con express
module.exports = router;