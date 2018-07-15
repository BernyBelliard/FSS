var mongoose = require('mongoose');

var usuarioSchema = mongoose.Schema({
    username: String,
    password: String,
    nombre: String,
    telefono: String,
    direccion: String
});

// Para publicarlo
mongoose.model('Usuario', usuarioSchema);
