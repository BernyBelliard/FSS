var mongoose = require('mongoose');

var collarSchema = mongoose.Schema({
    temperatura: Number,
    bateria: Number
});

mongoose.model('Collar', collarSchema);