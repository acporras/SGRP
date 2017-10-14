var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var provinceSchema = new Schema({
	co_provincia : { type: String },
	no_provincia : { type: String },
	co_departamento : { type: String },
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});

module.exports = mongoose.model('province', provinceSchema);