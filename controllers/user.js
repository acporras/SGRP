const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('../models/user');
const User = mongoose.model('user');
const service = require('../services/index');
const config = require('../config')
const Api = require('../Api/Api');
var lang = {};
var params = new Array();

function getDateTime() {
    var date = new Date();
    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;
    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;
    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
    return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
}

function emailOperation(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
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
                .status(500)
                .send(Api.response(params));
    }
};

function emailSignup(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const transaction = req.body.transaction;
    const register = transaction.action;
    const BCRYPT_SALT_ROUNDS = config.BCRYPT_SALT_ROUNDS;
    var no_user = register.no_user;
    var no_password = register.no_password;
    var persona = register.persona;
    var fe_crea = getDateTime();
    bcrypt.hash(no_password, BCRYPT_SALT_ROUNDS)
        .then((hashedPassword) => {
            const user = new User({
                no_user : no_user,
                no_password : hashedPassword,
                persona : persona,
                fe_crea : fe_crea,
                fl_inactivo : 0
            });
            user.save((err) =>{
                params[0] = (err) ? 'ERROR' : 'SUCCESS';
                params[1] = null;
                params[2] = {
                    token: service.createToken(user),
                    message: lang.mstrSuccessfulregistration
                };
                if(err){
                    params[1] = err;
                    return res.status(200).send(Api.response(params));
                }
                return res
                    .status(200)
                    .send(Api.response(params));
            });
        })
        .catch((error) =>{
            params[0] = 'ERROR';
            params[1] = error;
            return res.status(200).send(Api.response(params));
        })
    const user = new User();
};

function emailLogin(req, res) {
    var params = new Array();
    var lang = require('../lang/' + req.body.language);
    const transaction = req.body.transaction;
    const login = transaction.action;
    const user = login.no_user, password = login.no_password;
    User.findOne({ no_user: user.toLowerCase() }, (err, user) => {
        params[0] = (err || !user) ? 'ERROR' : 'SUCCESS'
        if(err){
            params[1] = err;
            return res
                .status(200)
                .send(Api.response(params));
        }
        if(!user){
            params[1] = lang.mstrNotFoundUser;
            return res
                .status(200)
                .send(Api.response(params));
        }else{
            bcrypt.compare(password, user.no_password)
                .then((validate) => {
                    if(validate){
                        params[1] = null;
                        params[2] = {
                            token: service.createToken(user),
                            message: lang.mstrSuccessfullogeo
                        };
                        return res
                            .status(200)
                            .send(Api.response(params));
                    }else{
                        params[0] = 'ERROR';
                        params[1] = lang.mstrIncorrectPassword;
                        return res
                            .status(200)
                            .send(Api.response(params));
                    }
                })
                .catch((error) => {
                    params[0] = 'ERROR';
                    params[1] = error;
                    return res
                        .status(200)
                        .send(Api.response(params));
                });
        }
        
    });
};

module.exports = {
    emailOperation
}