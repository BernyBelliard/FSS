var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de perimetro
var Perimetro = mongoose.model('Perimetro');

/* GET users listing. */
/* Aca van las rutas para el perimetro */

router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

// Ruta de ejemplo que retorna a todos los perimetros
router.get('/', function (req, res, next) {
    Perimetro.find({}, function (err, perimetros) {
        if (err) {
            return next(err);
        }
        res.json(perimetros);
    });
});

/* Ruta para retorna un perimetro por id */
router.get('/id/:id', function(req, res, next) {
    Perimetro.findById(req.params.id, function (err, perimetro) {
        if (err) return next(err);
        res.json(perimetro);
    });
});

// Ruta de ejemplo que guarda un perimetro
router.post('/', function (req, res, next) {
    let perimetro = new Perimetro(req.body);
    perimetro.save(function (err, perimetro) {
        if (err) {
            return next(err);
        }
        // Envio el perimetro creado
        res.json(perimetro);
    });
});

/* Ruta para eliminar un perimetro */
router.delete('/id/:id', function(req, res, next) {
    Perimetro.findByIdAndRemove(req.params.id, function (err, perimetro) {
        if (err) return next(err);
        res.json(perimetro);
    });
});

/* Ruta para modificar un perimetro */
router.put('/id/:id', function(req, res, next) {
    Perimetro.findByIdAndUpdate(req.params.id, req.body, function (err, perimetro) {
        if (err) return next(err);
        res.json(perimetro);
    });
});

// Publico las rutas con express
module.exports = router;