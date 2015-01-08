(function(){
	'use strict';

	angular
		.module( 'app.core' )
		.factory( 'dataservice', dataservice );

	function dataservice( $http, $q, DB_URL ) {

		var service = {
			getBeers : getBeers,
			postBeer : postBeer,
			putBeer : putBeer,
			deleteBeer : deleteBeer
		};


		
		return service;

		function getBeers () {
			return $http.get( DB_URL )
				.then( getBeersCompleted )
				.catch(function( message ){
					console.log( 'XHR Failed for getBeers ', message );
					// exception.catcher('XHR Failed for getBeers ')(message);
					// $location.url( '/' );
				});
			function getBeersCompleted ( data, status, headers, config ) {
				console.log('getBeersCompleted fired ', data.data );
				return data.data;
			}
		}

		function postBeer () {

		}

		function putBeer () {

		}

		function deleteBeer ( beerId ) {
			return $http.delete( DB_URL + "/" + beerId )
				.then( deleteBeerCompleted )
				.catch(function( message ){
					console.log( 'XHR Failed for readBeers ', message );
					// exception.catcher('XHR Failed for readBeers')(message);
					// $location.url( '/' );
				});
			function deleteBeerCompleted ( data, status, headers, config ) {
				console.log('deleteBeerCompleted data ', data );
				console.log('deleteBeerCompleted fired ', data );
				console.log('deleteBeerCompleted status ', status );
				console.log('deleteBeerCompleted config ', config );
				// return data.data;
				// Remove beer from DB
				// Remove beer from local model
			}
		}

	}

})();