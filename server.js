// SET UP ===========================================================================
// Load required packages
var express = require('express');						// Pull in the Express framework
var app = express();									// Create our Express application
var mongoose = require('mongoose');						// mongoose for mongodb
var morgan = require('morgan');							// Pull in logger middleware - https://github.com/expressjs/morgan
var port 	 = process.env.PORT || 3333;
var bodyParser = require('body-parser');

// var beerController = require('./app/controllers/beer');
// var userController = require('./app/controllers/user');

var database = require('./db_config/database');			// load the DB config

// CONFIGURATION ====================================================================
mongoose.connect( database.url );	// connect to mongoDB

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(morgan('dev')); 							// log every request to the console
	app.use( bodyParser() ); 							// Use the body-parser package in order to accept data via POST or PUT we need body parser
}

// ROUTES ===========================================================================
// Create our Express router
var router = express.Router();

require( './_server/routes/routes.js' )( router );

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen( port );