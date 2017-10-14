const mongoose = require('mongoose');
require('../models/district');
const District = mongoose.model('district');
const service = require('../services/index');
const config = require('../config')
const Api = require('../Api/Api');
const Util = require('../controllers/util');
var lang = {};
var params = new Array();

function districtOperation(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const operation = req.body.command;
    switch(operation){
        case Api.operation.getdistrict:
            getdistrict(req, res);
            break;
        default :
            params[0] = "ERROR";
            params[1] = lang.mstrNotFoundOperation;
            return res
                .status(500)
                .send(Api.response(params));
    }
};

function getdistrict(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const transaction = req.body.transaction;
    District.find({ fl_inactivo: '0' }, (err, district) => {
        
        params[0] = (err || !district) ? 'ERROR' : 'SUCCESS'
        if(err){
            params[1] = err;
            return res
                .status(200)
                .send(Api.response(params));
        }
        if(Util.isEmptyObject(district)){
            params[0] = 'ERROR';
            params[1] = lang.mstrNotFoundCountry;
            return res
                .status(200)
                .send(Api.response(params));
        }else{
            params[1] = null;
            params[2] = district;
            return res
                .status(200)
                .send(Api.response(params));
        }
        
    });
};

module.exports = {
    districtOperation
}