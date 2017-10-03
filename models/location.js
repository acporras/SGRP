var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var Provincia = new Schema({
no_provincia : { type: String },
co_provincia : { type: String }
});

var Distrito = new Schema({
    no_distrito : { type: String },
    co_distrito : { type: String }
});

var locationSchema = new Schema({
no_pais : { type: String },
provincia : [Provincia],
distrito : [Distrito],
fe_crea : { type: Date },
co_usuario_crea : { type: String },
fe_cambio : { type: Date },
co_usuario_cambio : { type: String },
fl_inactivo : { type: String }
});

module.exports = mongoose.model('location', locationSchema);