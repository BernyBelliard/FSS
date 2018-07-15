var mongoose = require('mongoose');

var estadoCollarSchema = mongoose.Schema({
    estado: String,
    fechaHora:{ type: Date, default: Date.now }
});

mongoose.model('Estado', estadoCollarSchema);