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
