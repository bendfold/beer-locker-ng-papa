(function(){
	'use strict';
	angular
		.module( 'app.core' )
		.constant( 'DB_URL', 'http://localhost:3333/api/beers' );
})();