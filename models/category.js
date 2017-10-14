var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var Subcategoria = new Schema({
	co_subcategoria : { type: String },
    no_subcategoria : { type: String },
	co_tipo : { type: String }
});

var categorySchema = new Schema({
	co_categoria : { type: String },
	no_categoria : { type: String },
	co_tipo : { type: String },
	subcategoria : [Subcategoria],
	fe_crea : { type: Date },
	co_usuario_crea : { type: String },
	fe_cambio : { type: Date },
	co_usuario_cambio : { type: String },
	fl_inactivo : { type: String }
});

module.exports = mongoose.model('category', categorySchema);