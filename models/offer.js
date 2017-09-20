var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var offerSchema = new Schema({
	no_oferta : { type: String },
	no_imagen : { type: String },
	no_direccion_imagen : { type: String },
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});
module.exports = mongoose.model('offer', offerSchema);