(function(){
	'use strict';
	
	angular.module('app',[
		/*
		 * Everybody has access to these.
		 * We could place these under every feature area,
		 * but this is easier to maintain.
		 */
		'app.core',
		/*
		 * Feature areas
		 */
		'app.beerlist',
		'app.newbeer',
		'app.beerform',
		'app.imageupload',
		'ngRoute',
		'ui.router'
	])
	.config(function( $stateProvider, $urlRouterProvider ) {
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/beerlist");
		// Now set up the states
		$stateProvider
		.state('beerlist', {
			url: "/beerlist",
			templateUrl: "./app/beerlist/beerlist.tmpl.html",
			controller: 'BeerlistCtrl',
			controllerAs: 'vm'
		})
		.state('newbeer', {
			url: "/newbeer",
			templateUrl: "./app/newbeer/newbeer.tmpl.html",
			controller: 'NewBeerCtrl',
			controllerAs: 'vm'
		});
	});

})();
