const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('user');
const service = require('../services/index');
const Api = require('../Api/Api');
var lang = {};
var params = new Array();
function emailOperation(req, res) {
    var lang = require('../lang/' + req.body.language);
    console.log(lang);
    const operation = req.body.command;
    switch(operation){
        case Api.operation.registeruser:
            emailSignup(req, res);
            break;
        case Api.operation.loginuser:
            emailLogin(req, res);
            break;
        default :
            params[0] = "ERROR";
            params[1] = lang.mstrNotFoundOperation;
            return res
                .status(200)
                .send(Api.response(params));
    }
};

function emailSignup(req, res) {
    const transaction = req.body.transaction;
    const register = transaction.action;
    const user = new User(register);
    user.save(function(err){
        params[0] = (err) ? 'ERROR' : 'SUCCESS'
        params[1] = null;
        params[2] = {
            token: service.createToken(user),
            message: lang.mstrSuccessfulregistration
        };
        if(err){
            params[1] = err;
            return res.status(200).send(Api.response(params))
        }
        return res
            .status(200)
            .send(Api.response(params));
    });
};

function emailLogin(req, res) {
    const transaction = req.body.transaction;
    const login = transaction.action;
    const user = login.no_user, password = login.no_password;
    User.findOne({ no_user: user.toLowerCase(), no_password : password }, (err, user) => {
        params[0] = (err || !user) ? 'ERROR' : 'SUCCESS'
        if(err){
            params[1] = err;
            return res
                .status(200)
                .send(err);
            return res
                .status(200)
                .send(Api.response(params));
        }
        if(!user){
            params[1] = lang.mstrNotFoundUser;
            return res
                .status(200)
                .send(Api.response(params));
        }
        params[1] = null;
        params[2] = {
            token: service.createToken(user),
            message: lang.mstrSuccessfullogeo
        };
        return res
        .status(200)
        .send(Api.response(params));
    });
};

module.exports = {
    emailOperation
}