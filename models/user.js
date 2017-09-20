var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var userSchema = new Schema({
	no_user : { type: String },
	no_password : { type: String },
	persona : {
		no_nombre : { type: String },
		no_ape_mat : { type: String },
		no_ape_pat : { type: String },
		nu_tel : { type: String },
		nu_cel : { type: String },
		documento : { 
			co_tipo_documento : { type: String },
			no_tipo_documento : { type: String },
			nu_documento : { type: String }
		},
		ubigeo : {
			pais : {
				co_pais : { type: String },
				no_pais : { type: String }
			},
			provincia : { 
				co_provincia : { type: String },
				no_provincia : { type: String }
			},
			distrito : {
				co_distrito : { type: String },
				no_distrito : { type: String }
			}
		},
		no_correo : { type: String }
	},
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});
module.exports = mongoose.model('user', userSchema);