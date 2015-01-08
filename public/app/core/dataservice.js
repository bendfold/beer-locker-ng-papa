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
					// exception.catcher('XHR Failed for readBeers')(message);
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

		function deleteBeer () {
			// return $http.delete( 'http://localhost:3333/api/beers:beer_id' )
			// 	.then( getBeersCompleted )
			// 	.catch(function( message ){
			// 		// exception.catcher('XHR Failed for readBeers')(message);
			// 		// $location.url( '/' );
			// 	});
			// function getBeersCompleted ( data, status, headers, config ) {
			// 	console.log('getBeersCompleted fired ', data.data );
			// 	return data.data;
			// }
		}

	}

})();