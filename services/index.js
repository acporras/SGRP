var jwt = require('jwt-simple');
var moment = require('moment');
var config = require('../config');
var Api = require('../Api/Api');

function createToken(user){
  const payload = {
    "sub" : user._id,
    "iat" : moment().unix(),
    "exp": moment().add(14, "days").unix(),
  };
  return jwt.encode(payload, config.TOKEN_SECRET);
};

function decodeToken(token){
	var params = new Array();
	params[0] = 'ERROR'
	const decoded = new Promise((resolve, reject) =>{
		try{
			const payload = jwt.decode(token, config.TOKEN_SECRET);
			if(payload.exp <= moment().unix()) {
				params[1] = 'El token a expirado'
				params[2] = {
					status : 401,
					message : 'error'
				}
				reject(Api.response(params));
			}
			params[0] = 'SUCCESS'
			params[1] = null
			params[2] = {
				payload : payload.sub
			}
			resolve(Api.response(params));
		}catch(err){
			params[1] = err
			params[2] = {
				status : 500,
				message: 'Invalid token'
			}
			reject(Api.response(params));
		}
	});

	return decoded;
}

module.exports = {
	createToken,
	decodeToken
}