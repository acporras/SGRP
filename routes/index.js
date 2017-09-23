// Iniciamos las rutas de nuestro servidor/API
const express = require('express');
const api = express.Router();
const usermiddleware = require('../middleware/user.js');
const auth = require('../controllers/user');
const offer = require('../controllers/offer');
const category = require('../controllers/category');

// Ruta solo accesible si estás autenticado
api.get('/private',usermiddleware, (req, res) => {
	res.status(200).send({message: 'Tienes Acceso'})
});

api.get('/',function(req, res){
	res.send("Welcome to ws sgrp!");
});

//Peticiones
api.post('/auth/', auth.emailOperation); //Autenticación y Login
api.post('/offer/', offer.offerOperation);// Peticiones Ofertas
api.post('/category/', category.categoryOperation);// Peticiones Categorias

module.exports = api