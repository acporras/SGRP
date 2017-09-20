const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('../models/offer');
const Offer = mongoose.model('offer');
const service = require('../services/index');
const config = require('../config')
const Api = require('../Api/Api');
const Util = require('util');
var lang = {};
var params = new Array();


function offerOperation(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const operation = req.body.command;
    switch(operation){
        case Api.operation.getoffers:
            getoffers(req, res);
            break;
        default :
            params[0] = "ERROR";
            params[1] = lang.mstrNotFoundOperation;
            return res
                .status(500)
                .send(Api.response(params));
    }
};

function getoffers(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const transaction = req.body.transaction;
    Offer.find({ fl_inactivo: '0' }, (err, offer) => {
        params[0] = (err || !offer) ? 'ERROR' : 'SUCCESS'
        if(err){
            params[1] = err;
            return res
                .status(200)
                .send(Api.response(params));
        }
        if(!offer){
            params[1] = lang.mstrNotFoundOffer;
            return res
                .status(200)
                .send(Api.response(params));
        }else{
            params[1] = null;
            params[2] = offer;
            return res
                .status(200)
                .send(Api.response(params));
        }
        
    });
};


module.exports = {
    offerOperation
}