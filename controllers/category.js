const mongoose = require('mongoose');
require('../models/category');
const Category = mongoose.model('category');
const service = require('../services/index');
const config = require('../config')
const Api = require('../Api/Api');
const Util = require('../controllers/util');
var lang = {};
var params = new Array();

function categoryOperation(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const operation = req.body.command;
    switch(operation){
        case Api.operation.getcategory:
            getcategory(req, res);
            break;
        default :
            params[0] = "ERROR";
            params[1] = lang.mstrNotFoundOperation;
            return res
                .status(500)
                .send(Api.response(params));
    }
};

function getcategory(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const transaction = req.body.transaction;
    Category.find({ fl_inactivo: '0' }, (err, category) => {
        
        params[0] = (err || !category) ? 'ERROR' : 'SUCCESS'
        if(err){
            params[1] = err;
            return res
                .status(200)
                .send(Api.response(params));
        }
        if(Util.isEmptyObject(category)){
            params[0] = 'ERROR';
            params[1] = lang.mstrNotFoundCategory;
            return res
                .status(200)
                .send(Api.response(params));
        }else{
            params[1] = null;
            params[2] = category;
            return res
                .status(200)
                .send(Api.response(params));
        }
        
    });
};


module.exports = {
    categoryOperation
}