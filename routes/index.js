// Iniciamos las rutas de nuestro servidor/API
const express = require('express');
const api = express.Router();
const usermiddleware = require('../middleware/user.js');
const auth = require('../controllers/user');
const offer = require('../controllers/offer');

// Rutas de autenticación y login
api.post('/auth/', auth.emailOperation);

// Ruta solo accesible si estás autenticado
api.get('/private',usermiddleware, (req, res) => {
	res.status(200).send({message: 'Tienes Acceso'})
});

api.get('/',function(req, res){
	res.send("Welcome to ws sgrp!");
});

//Peticiones Ofertas
api.post('/offer/', offer.offerOperation);

module.exports = api