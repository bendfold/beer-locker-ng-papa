(function(){
	'use strict';

	angular
		.module( 'app.core' )
		.factory( 'dataservice', dataservice );

	function dataservice( $http, $q ) {
		var service = {
			getBeers : getBeers
		};
		
		return service;

		function getBeers () {
			return $http.get( 'http://localhost:3333/api/beers' )
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

	}

})();