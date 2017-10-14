var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var storeSchema = new Schema({
	co_sucursal : { type: String },
	no_sucursal : { type: String },
	no_email_sucursal : { type: String },
	nu_telefono_1 : { type: String },
	nu_telefono_2 : { type: String },
	no_direccion : { type: String },
	co_distrito : { type: String },
	nu_longitud : { type: String },
	nu_latitud : { type: String },
	qt_capacidad : { type: String },
	usuario_jefe: {
		co_user : { type: String },
		no_user : { type: String }
	}
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});
module.exports = mongoose.model('store', storeSchema);