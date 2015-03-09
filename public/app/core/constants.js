(function(){
	'use strict';
	angular
		.module( 'app.core' )
		.constant( 'DB_URL', 'http://localhost:5000/api/beers' );
})();