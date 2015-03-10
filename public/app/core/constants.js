(function(){
	'use strict';
	// TODO - NEED TO GET URL AS ENVIRONMENT VAR TO TO THIS IN BOTH PLACES, DONT HARDCODE localhost:5000 you DIV!
	
	// console.log( 'URL ', window.location.origin );

	angular
		.module( 'app.core' )
		.constant( 'DB_URL', window.location.origin + '/api/beers' );
})();