var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de collar
var Collar = mongoose.model('Collar');

/* GET users listing. */
/* Aca van las rutas para el collar */

router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

// Ruta que retorna a todos los collares
router.get('/', function (req, res, next) {
    Collar.find({}, function (err, collares) {
        if (err) {
            return next(err);
        }
        res.json(collares);
    });

});

/* Ruta para retornar un collar por id */
router.get('/id/:id', function(req, res, next) {
    Collar.findById(req.params.id, function (err, collar) {
        if (err) return next(err);
        res.json(collar);
    });
});

// Ruta que guarda un collar
router.post('/', function (req, res, next) {
    let collar = new Collar(req.body);
    collar.save(function (err, collar) {
        if (err) {
            return next(err);
        }
        // Envio el collar creado
        res.json(collar);
    });
});

/* Ruta para eliminar un collar */
router.delete('/id/:id', function(req, res, next) {
    Collar.findByIdAndRemove(req.params.id, function (err, collar) {
        if (err) return next(err);
        res.json(collar);
    });
});

/* Ruta para modificar un collar */
router.put('/id/:id', function(req, res, next) {
    Collar.findByIdAndUpdate(req.params.id, req.body, function (err, collar) {
        if (err) return next(err);
        res.json(collar);
    });
});

// Publico las rutas con express
module.exports = router;