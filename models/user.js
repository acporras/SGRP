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
		nu_documento : { type: String },
		ubigeo : {
			pais : {
				no_pais : { type: String }
			},
			provincia : { 
				no_provincia : { type: String }
			},
			distrito : {
				no_distrito : { type: String }	
			}
		}
	},
	fe_crea : { type: Date },
	fe_cambio : { type: Date },
	fl_inactivo : { type: String }
});
module.exports = mongoose.model('user', userSchema);