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
			var foo ;
			var beerData = dataservice.getBeers().then(function( data ){
				foo = data;
				return data;
			});
			
			beers = beerData;
			console.log('beers ', beers);
			return beerData;
		}

		function removeBeer ( beer_id ) {
			// Remove beer from DB
			// Remove beer from VM
			console.log( 'vm.beers ', vm.beers );
		}

	}

})();