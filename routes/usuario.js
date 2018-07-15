var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

// Para tener la tabla de usuario
var Usuario = mongoose.model('Usuario');

/* GET users listing. */
/*Aca van las rutas para el usuario*/

router.get('/saludo', function(req, res, next) {
  res.send('Hola soy berny');
});

// Ruta de ejemplo que retorna a todos los usuarios
router.get('/', function (req, res, next) {
    Usuario.find({}, function (err, usuarios) {
        if (err) {
            return next(err);
        }
        res.json(usuarios);
    });

});

/* Ruta para retorna un usuario por id */
router.get('/id/:id', function(req, res, next) {
    Usuario.findById(req.params.id, function (err, usuario) {
        if (err) return next(err);
        res.json(usuario);
    });
});

// Ruta de ejemplo que guarda un usuario
router.post('/', function (req, res, next) {
  let usuario = new Usuario(req.body);
    usuario.save(function (err, usuario) {
        if (err) {
            return next(err);
        }
        // Envio el usuario creado
        res.json(usuario);
    });
});

/* Ruta para eliminar un usuario */
router.delete('/id/:id', function(req, res, next) {
    Usuario.findByIdAndRemove(req.params.id, function (err, usuario) {
        if (err) return next(err);
        res.json(usuario);
    });
});

/* Ruta para modificar un usuario */
router.put('/id/:id', function(req, res, next) {
    Usuario.findByIdAndUpdate(req.params.id, req.body, function (err, usuario) {
        if (err) return next(err);
        res.json(usuario);
    });
});

// Publico las rutas con express
module.exports = router;


