var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var countrySchema = new Schema({
	co_pais : { type: String },
	no_pais : { type: String },
	no_city : { type: String },
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});

module.exports = mongoose.model('country', countrySchema);