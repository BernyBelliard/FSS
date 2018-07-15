var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de finca
var Finca = mongoose.model('Finca');

/* GET users listing. */
/* Aca van las rutas para la finca */
router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

//ruta que retorna a todas las fincas
router.get('/', function (req, res, next) {
    Finca.find({}, function (err, fincas) {
        if (err) {
            return next(err);
        }
        res.json(fincas);
    });

});

/* Ruta para retorna una finca por id */
router.get('/id/:id', function(req, res, next) {
    Finca.findById(req.params.id, function (err, finca) {
        if (err) return next(err);
        res.json(finca);
    });
});

// Ruta que guarda una finca
router.post('/', function (req, res, next) {
    let finca = new Finca(req.body);
   finca.save(function (err, finca) {
        if (err) {
            return next(err);
        }
        // Envio la finca creada para que lo vea
        res.json(finca);
    });
});

/* Ruta para eliminar una finca */
router.delete('/id/:id', function(req, res, next) {
    Finca.findByIdAndRemove(req.params.id, function (err, finca) {
        if (err) return next(err);
        res.json(finca);
    });
});

/* Ruta para modificar una finca */
router.put('/id/:id', function(req, res, next) {
    Finca.findByIdAndUpdate(req.params.id, req.body, function (err, finca) {
        if (err) return next(err);
        res.json(finca);
    });
});

// Publico las rutas con express
module.exports = router;