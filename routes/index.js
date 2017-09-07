// Iniciamos las rutas de nuestro servidor/API
const express = require('express');
const router = express.Router();
const usermiddleware = require('../middleware/user.js');
const auth = require('../controllers/user');

// Rutas de autenticación y login
router.post('/auth/signup', auth.emailSignup);
router.post('/auth/login', auth.emailLogin);

// Ruta solo accesible si estás autenticado
router.get('/private',usermiddleware, (req, res) => {
	res.status(200).send({message: 'Tienes Acceso'})
});
router.get('/',function(req, res){
	res.send("Welcome to ws sgrp!");
});

module.exports = router