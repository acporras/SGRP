// server.js
const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	cors = require('cors'),
	methodOverride = require('method-override');

const config = require('./config');

// Configuramos Express	
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride());
app.use(cors());

app.set('port', config.port);

// Importamos nuestros modelos
require('./models/user');

// Importamos nuestras rutas
const router = require('./routes/index');
app.use(router);

// Iniciamos el servidor y la base de datos
mongoose.connect(config.db,{ 
	useMongoClient: true 
}, (err) => {
    app.listen(app.get('port'), function(){
    	console.log('Express corriendo en http://localhost:3000');
    });
});