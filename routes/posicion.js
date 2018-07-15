var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de posicion
var Posicion = mongoose.model('Posicion');

/* GET users listing. */
/* Aca van las rutas para la posicion */

router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

// Ruta de ejemplo que retorna a todas las posiciones
router.get('/', function (req, res, next) {
    Posicion.find({}, function (err, posiciones) {
        if (err) {
            return next(err);
        }
        res.json(posiciones);
    });
});

/* Ruta para retorna una posicion por id */
router.get('/id/:id', function(req, res, next) {
    Posicion.findById(req.params.id, function (err, posicion) {
        if (err) return next(err);
        res.json(posicion);
    });
});

// Ruta de ejemplo que guarda una posicion
router.post('/', function (req, res, next) {
    let posicion = new Posicion(req.body);
    posicion.save(function (err, posicion) {
        if (err) {
            return next(err);
        }
        // Envio la posicion creada
        res.json(posicion);
    });
});

/* Ruta para eliminar una posicion */
router.delete('/id/:id', function(req, res, next) {
    Posicion.findByIdAndRemove(req.params.id, function (err, posicion) {
        if (err) return next(err);
        res.json(posicion);
    });
});

/* Ruta para modificar una posicion */
router.put('/id/:id', function(req, res, next) {
    Posicion.findByIdAndUpdate(req.params.id, req.body, function (err, posicion) {
        if (err) return next(err);
        res.json(posicion);
    });
});

// Publico las rutas con express
module.exports = router;