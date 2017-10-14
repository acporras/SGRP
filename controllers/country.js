const mongoose = require('mongoose');
require('../models/country');
const Country = mongoose.model('country');
const service = require('../services/index');
const config = require('../config')
const Api = require('../Api/Api');
const Util = require('../controllers/util');
var lang = {};
var params = new Array();

function countryOperation(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const operation = req.body.command;
    switch(operation){
        case Api.operation.getcountry:
            getcountry(req, res);
            break;
        default :
            params[0] = "ERROR";
            params[1] = lang.mstrNotFoundOperation;
            return res
                .status(500)
                .send(Api.response(params));
    }
};

function getcountry(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const transaction = req.body.transaction;
    Country.find({ fl_inactivo: '0' }, (err, country) => {
        
        params[0] = (err || !country) ? 'ERROR' : 'SUCCESS'
        if(err){
            params[1] = err;
            return res
                .status(200)
                .send(Api.response(params));
        }
        if(Util.isEmptyObject(country)){
            params[0] = 'ERROR';
            params[1] = lang.mstrNotFoundCountry;
            return res
                .status(200)
                .send(Api.response(params));
        }else{
            params[1] = null;
            params[2] = country;
            return res
                .status(200)
                .send(Api.response(params));
        }
        
    });
};

module.exports = {
    countryOperation
}