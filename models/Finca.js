var mongoose = require('mongoose');

var fincaSchema = mongoose.Schema({
    descripcion: String,
    direccion: String

});

// Para publicarlo
mongoose.model('Finca', fincaSchema);