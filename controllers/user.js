const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('user');
const service = require('../services/index');
const Api = require('../Api/Api');

var params = new Array();

function emailSignup(req, res) {
    const transaction = req.body.transaction;
    const register = transaction.action;
    const user = new User(register);
    params[1] = null;
    params[2] = {
        token: service.createToken(user),
        message: 'Register success'
    };
    user.save(function(err){
        params[0] = (err) ? 'ERROR' : 'SUCCESS'
        params[1] = null;
        params[2] = {
            token: service.createToken(user),
            message: 'Register success'
        };
        if(err){
            params[1] = err;
            params[2] = {};
            return res.status(500).send(Api.response(params))
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
            params[2] = {};
            return res
                .status(500)
                .send(err);
            return res
                .status(500)
                .send(Api.response(params));
        }
        if(!user){
            params[1] = 'No se Encontro el usuario';
            params[2] = {};
            return res
                .status(404)
                .send(Api.response(params));
        }
        params[1] = null;
        params[2] = {
            token: service.createToken(user),
            message: 'Login success'
        };
        return res
        .status(200)
        .send(Api.response(params));
    });
};

module.exports = {
    emailSignup,
    emailLogin
}