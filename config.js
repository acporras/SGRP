// config.js
module.exports = {
	port: process.env.PORT || 3000,
	db: process.env.MONGODB || 'mongodb://localhost/sgrpprod_desa',
 	TOKEN_SECRET: process.env.TOKEN_SECRET || "tokenaccess"
};