var mongoose = require('mongoose');

var mensajeSchema = mongoose.Schema({
    mensaje: String
});

mongoose.model('Mensaje', mensajeSchema);