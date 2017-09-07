const services = require('../services/index');
const Api = require('../Api/Api');

function ensureAuthenticated(req, res, next) {
  if(!req.headers.authorization) {
    var params = new Array();
    params[0] = 'ERROR'
    params[1] = 'Tu petición no tiene cabecera de autorización'
    params[2] = {}
    return res
      .status(403)
      .send(Api.response(params));
  }
  const token = req.headers.authorization.split(" ")[1];
  
  services.decodeToken(token)
    .then(response =>{
      req.user = response
      next()
    })
    .catch(response =>{
      res.status(response.transactionResponse.status)
    })
}

module.exports = ensureAuthenticated