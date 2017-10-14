var mongoose = require('mongoose'),
Schema   = mongoose.Schema;

var departmentSchema = new Schema({
	co_departamento : { type: String },
	no_departamento : { type: String },
	co_pais : { type: String },
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});

module.exports = mongoose.model('department', departmentSchema);