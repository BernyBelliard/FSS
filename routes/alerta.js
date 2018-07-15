var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de alerta
var Alerta = mongoose.model('Alerta');

/* GET users listing. */
/* Aca van las rutas para la alerta */

router.get('/saludo', function(req, res, next) {
    res.send('Hola soy berny');
});

// Ruta que retorna todas las alertas
router.get('/', function (req, res, next) {
    Alerta.find({}, function (err, alertas) {
        if (err) {
            return next(err);
        }
        res.json(alertas);
    });
});

/* Ruta para retorna una alerta por id */
router.get('/id/:id', function(req, res, next) {
    Alerta.findById(req.params.id, function (err, alerta) {
        if (err) return next(err);
        res.json(alerta);
    });
});

// Ruta que guarda una alerta
router.post('/', function (req, res, next) {
    let alerta = new Alerta(req.body);
    alerta.save(function (err, alerta) {
        if (err) {
            return next(err);
        }
        // Envio la alerta creada
        res.json(alerta);
    });
});

/* Ruta para eliminar una alerta */
router.delete('/id/:id', function(req, res, next) {
    Alerta.findByIdAndRemove(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* Ruta para modificar una alerta */
router.put('/id/:id', function(req, res, next) {
    Alerta.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// Publico las rutas con express
module.exports = router;


/* Ruta para guardar una alerta
router.post('/', function(req, res, next) {
    Alerta.create(req.body, function (err, alerta) {
        if (err) return next(err);
        res.json(alerta);
    });
});
*/



