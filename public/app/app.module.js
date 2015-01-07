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
		'app.beerlisting',
		'ngRoute',
		'ui.router'
	])
	.config(function( $stateProvider, $urlRouterProvider ) {
		// For any unmatched url, redirect to /state1
		$urlRouterProvider.otherwise("/state1");
		// Now set up the states
		$stateProvider
		.state('beerlisting', {
			url: "/beerlisting",
			templateUrl: "./app/beer_listing/beerlisting.html",
			controller: 'BeerlistingCtrl'
		})
		.state('newbeer', {
			url: "/newbeer",
			templateUrl: "./app/_test/newbeer_test.html"
		});
		// .state('state1', {
		// 	url: "/state1",
		// 	templateUrl: "./app/_test/state1.html"
		// })
		// .state('state1.list', {
		// 	url: "/list",
		// 	templateUrl: "./app/_test/state1.list.html",
		// 	controller: function($scope) {
		// 		$scope.items = ["A", "List", "Of", "Items"];
		// 	}
		// })
		// .state('state2', {
		// 	url: "/state2",
		// 	templateUrl: "./app/_test/state2.html"
		// })
		// .state('state2.list', {
		// 	url: "/list",
		// 	templateUrl: "./app/_test/state2.list.html",
		// 	controller: function($scope) {
		// 		$scope.things = ["A", "Set", "Of", "Things"];
		// 	}
		// });
	});

})();
