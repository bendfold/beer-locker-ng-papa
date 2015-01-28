// Load required packages
var mongoose = require('mongoose');

// Define our beer schema
var BeerSchema = new mongoose.Schema({
	name: String,
	image: String,
	type: String,
	quantity: Number,
	abv: Number,
	origin: String,
	details: String
});

// Export the Mongoose model
module.exports = mongoose.model('Beer', BeerSchema);