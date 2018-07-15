var mongoose = require('mongoose');

var ganadoSchema = mongoose.Schema({
    nombre: String,
    libras: String,
    estado: String

});
mongoose.model('Ganado', ganadoSchema);