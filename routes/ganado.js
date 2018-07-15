var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de ganado
var Ganado = mongoose.model('Ganado');

/* GET users listing. */
/* Aca van las rutas para el ganado */

router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

// Ruta que retorna a todos los ganados
router.get('/', function (req, res, next) {
    Ganado.find({}, function (err, ganados) {
        if (err) {
            return next(err);
        }
        res.json(ganados);
    });
});

/* Ruta para retorna un ganado por id */
router.get('/id/:id', function(req, res, next) {
    Ganado.findById(req.params.id, function (err, ganado) {
        if (err) return next(err);
        res.json(ganado);
    });
});

// Ruta que guarda un ganado
router.post('/', function (req, res, next) {
    let ganado = new Ganado(req.body);
    ganado.save(function (err, collar) {
        if (err) {
            return next(err);
        }
        // Envio el ganado creado
        res.json(collar);
    });
});

/* Ruta para eliminar un ganado */
router.delete('/id/:id', function(req, res, next) {
    Ganado.findByIdAndRemove(req.params.id, function (err, ganado) {
        if (err) return next(err);
        res.json(ganado);
    });
});

/* Ruta para modificar un ganado */
router.put('/id/:id', function(req, res, next) {
    Ganado.findByIdAndUpdate(req.params.id, req.body, function (err, ganado) {
        if (err) return next(err);
        res.json(ganado);
    });
});

// Publico las rutas con express
module.exports = router;