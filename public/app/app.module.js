(function(){
	'use strict';
	
	angular.module('locker-app',[
		/*
		 * Everybody has access to these.
		 * We could place these under every feature area,
		 * but this is easier to maintain.
		 */
		'app.core',
		/*
		 * Feature areas
		 */
		'papa.test.main'
	]);

})();
