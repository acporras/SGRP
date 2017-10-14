const operation = {
	loginuser : 'LOGIN_TRANSACTION',
	registeruser : 'REGISTER_TRANSACTION',
	getoffers : 'GET_OFFERS',
	getcategory : 'GET_CATEGORY',
	getcountry : 'GET_COUNTRY'
}

function response(params){
	var dataResponse = {
	   "code": params[0],
	   "error": params[1],
	   "transactionResponse": params[2]
	}
	return dataResponse;
}

module.exports = {
	response,
	operation
}