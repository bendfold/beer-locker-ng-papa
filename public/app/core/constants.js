(function(){
	'use strict';
	angular
		.module( 'app.core' )
		.constant( 'DB_URL', window.location.origin + '/api/beers' );
})();