var mongoose = require('mongoose');

var perimetroSchema = mongoose.Schema({
    punto1: String,
    punto2: String,
    punto3: String,
    punto4: String
});

// Para publicarlo
mongoose.model('Perimetro', perimetroSchema);