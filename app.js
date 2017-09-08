'use strict'

const express = require('express'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	hbs = require('express-handlebars'),
	cors = require('cors'),
	methodOverride = require('method-override');

const api = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.engine('.hbs', hbs({
  defaultLayout: 'default',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.use(methodOverride());
app.use(cors());

app.use(api);

module.exports = app