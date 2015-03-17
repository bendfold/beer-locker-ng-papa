// SET UP ===========================================================================
// Load required packages
var express = require('express');						// Pull in the Express framework
var app = express();									// Create our Express application
var mongoose = require('mongoose');						// mongoose for mongodb
var morgan = require('morgan');							// Pull in logger middleware - https://github.com/expressjs/morgan
var port 	 = process.env.PORT || 3333;
var bodyParser = require('body-parser');

var uriUtil = require('mongodb-uri');
/*
 * The following comes form the mongodb-uri github page, seems to make mongolab play well with the app so leaving it in.  
 * Mongoose by default sets the auto_reconnect option to true.
 * We recommend setting socket options at both the server and replica set level.
 * We recommend a 30 second connection timeout because it allows for 
 * plenty of time in most operating environments.
 */
var options = { server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } } };  
// Our heroku app mongo lab DB connection
// var mongodbUri = 'mongodb://heroku_app34737082:8000efbsnmtvc2o4htrser0tal@dbh15.mongolab.com:27157/heroku_app34737082';
var mongoUri = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/papa-locker';
// Make sure the DB URL plays nice with mongoose
var mongooseUri = uriUtil.formatMongoose( mongoUri );

// CONFIGURATION ====================================================================

// Connect to the DB
mongoose.connect( mongooseUri, options );

var env = process.env.NODE_ENV || 'development';
if ('development' == env) {
	app.use(express.static(__dirname + '/public')); 	// set the static files location /public/img will be /img for users
	app.use(morgan('dev')); 							// log every request to the console
	// app.use( bodyParser() ); 							// Use the body-parser package in order to accept data via POST or PUT we need body parser
	app.use( bodyParser.json() ); 
}

// ROUTES ===========================================================================
// Create our Express router
var router = express.Router();

require( './_server/routes/routes.js' )( router );

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen( port );