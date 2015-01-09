(function(){
	'use strict';
	angular
		.module( 'app.core' )
		.factory( 'beerLogService', beerLogService );
	
	function beerLogService ( dataservice ) {
		
		var service = {
			getBeers : getBeers,
			removeBeer : removeBeer 
		};
		return service;

		function getBeers () {
			var beerData = dataservice.getBeers().then(function( data ){
				return data;
			});
			return beerData;
		}

		function removeBeer ( beer_id ) {
			
		}

	}

})();