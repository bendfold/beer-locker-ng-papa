(function(){
	'use strict';
	angular
		.module( 'app.core' )
		.factory( 'beerCollectionService', beerCollectionService );
	
	function beerCollectionService ( dataservice ) {
		
		var service = {
			getBeers : getBeers,
			removeBeer : removeBeer, 
			editBeer : editBeer
		},
		localBeerCollection = [];

		return service;

		

		function getBeers () {
			var beerData = dataservice.getBeers().then(function( data ){
				// Update this factories local beer model 
				localBeerCollection = data;
				// Return 
				return data;
			});
			return beerData;
		}

		function removeBeer ( beer_id ) {
			// Remove from DB
			dataservice.deleteBeer( beer_id ).then(function( data ){
				console.log( data , data.status, beer_id );
				if ( data.status === 200 ) {
					// Remove from Local beerData
					removeBeerFromLocalModel( beer_id );
				} else {
					console.error( 'Dev note: Beer not removed' );
				}
			});
			
			function removeBeerFromLocalModel ( beer_id ) {
				var i;
				for ( i = 0; i < localBeerCollection.length; i += 1 ) {
					if ( localBeerCollection[ i ]._id === beer_id ) {
						localBeerCollection.splice( i, 1 );
					}
				}
			}

		}

		function editBeer () {
			console.log( 'editBeer fired ' );
		} 

	}

})();