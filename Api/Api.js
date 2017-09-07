const operation = {
	loginuser : 'LOGIN_TRANSACTION',
	registeruser : 'REGISTER_TRANSACTION'
}

function response(params){
	const dataResponse = {
	   "code": params[0],
	   "error": params[1],
	   "transactionResponse": params[2]
	}
	return dataResponse;
}

function request(params){

}

module.exports = {
	response,
	request
}