var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de estado
var Estado = mongoose.model('Estado');

/* GET users listing. */
/* Aca van las rutas para el estado */
router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

// Ruta que retorna a todos los estados
router.get('/', function (req, res, next) {
    Estado.find({}, function (err, estados) {
        if (err) {
            return next(err);
        }
        res.json(estados);
    });

});

/* Ruta para retorna un estado por id */
router.get('/id/:id', function(req, res, next) {
    Estado.findById(req.params.id, function (err, estado) {
        if (err) return next(err);
        res.json(estado);
    });
});

// Ruta que guarda un estado
router.post('/', function (req, res, next) {
    let estado = new Estado(req.body);
    estado.save(function (err, estado) {
        if (err) {
            return next(err);
        }
        // Envio el estado creado
        res.json(estado);
    });
});

/* Ruta para eliminar un estado */
router.delete('/id/:id', function(req, res, next) {
    Estado.findByIdAndRemove(req.params.id, function (err, estado) {
        if (err) return next(err);
        res.json(estado);
    });
});

/* Ruta para modificar un estado */
router.put('/id/:id', function(req, res, next) {
    Estado.findByIdAndUpdate(req.params.id, req.body, function (err, estado) {
        if (err) return next(err);
        res.json(estado);
    });
});

// Publico las rutas con express
module.exports = router;