var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var districtSchema = new Schema({
	co_distrito : { type: String },
	no_distrito : { type: String },
	co_provincia : { type: String },
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});

module.exports = mongoose.model('district', districtSchema);