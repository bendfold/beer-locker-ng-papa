(function(){
	'use strict';
	angular
		.module( 'app.core' )
		.factory( 'beerLogService', beerLogService );
	
	function beerLogService ( dataservice ) {
		
		var service = {
			getBeers : getBeers,
			removeBeer : removeBeer 
		},
		beers;
		return service;

		beers = [];

		function getBeers () {
			var beerData = dataservice.getBeers().then(function( data ){
				return data;
			});
			beers = data;
			return beerData;
		}

		function removeBeer ( beer_id ) {

			console.log( 'beer_id ', beer_id );
			console.log( 'beers ', beers );

			// Remove from DB
			// Remove from Local beerData
		}

	}

})();