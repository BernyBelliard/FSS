
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jsrender = require('jsrender');
var mongoose = require('mongoose');

// Conectando con la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/fss', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log("¡Conectado con exito!");
});

require('./models/Usuario');
require('./models/Alerta');
require('./models/Collar');
require('./models/Estado');
require('./models/Finca');
require('./models/Ganado');
require('./models/Mensaje');
require('./models/Perimetro');
require('./models/Posicion');

var indexRouter = require('./routes/index');
var usuarioRouter = require('./routes/usuario');
var alertaRouter = require('./routes/alerta');
var collarRouter = require('./routes/collar');
var estadoRouter = require('./routes/estado');
var fincaRouter = require('./routes/finca');
var ganadoRouter = require('./routes/ganado');
var mensajeRouter = require('./routes/mensaje');
var perimetroRouter = require('./routes/perimetro');
var posicionRouter = require('./routes/posicion');

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/usuario', usuarioRouter);
app.use('/alerta', alertaRouter);
app.use('/collar', collarRouter);
app.use('/estado', estadoRouter);
app.use('/finca', fincaRouter);
app.use('/ganado', ganadoRouter );
app.use('/mensaje', mensajeRouter);
app.use('/perimetro', perimetroRouter);
app.use('/posicion', posicionRouter);

module.exports = app;
