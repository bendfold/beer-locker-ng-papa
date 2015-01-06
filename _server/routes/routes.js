var beerController = require('../controllers/beer');

// ROUTES ===========================================================================
// expose the routes to our app with module.exports
module.exports = function( router ) {

	// Create endpoint handlers for /beers
	router.route('/beers')
		.post(beerController.postBeers)
		.get(beerController.getBeers);

	// Create endpoint handlers for /beers/:beer_id
	router.route('/beers/:beer_id')
		.get(beerController.getBeer)
		.put(beerController.putBeer)
		.delete(beerController.deleteBeer);

};