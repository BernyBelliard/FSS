var mongoose = require('mongoose');

var alertaSchema = mongoose.Schema({
    fechaHora :{ type: Date, default: Date.now }
});

mongoose.model('Alerta', alertaSchema);