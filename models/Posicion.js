var mongoose = require('mongoose');

var posicionSchema = mongoose.Schema({
    latitud: String,
    longitud: String,
    altitud: String,
    fechaHora: Date
});

mongoose.model('Posicion', posicionSchema);