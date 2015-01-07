(function(){
	'use strict';

	angular
		.module( 'app.core' )
		.factory( 'dataservice', dataservice );

	function dataservice( $http, $location, $q ) {
		var service = {
			createBeer : createBeer,
			readBeer : readBeer,
			updateBeer : updateBeer,
			deleteBeer : deleteBeer
		};
		function createBeer () {

		}
		function readBeer () {
			return $http.get( 'localhost:3333/api/beers' )
				.then( getBeersCompleted )
				.catch(function( message ){
					// exception.catcher('XHR Failed for readBeers')(message);
					$location.url( '/' );
				});
			function getBeersCompleted ( data, status, headers, config ) {
				return data.data[0].data.results;
			}
		}
		function updateBeer () {

		}
		function deleteBeer () {

		}
	}

})();