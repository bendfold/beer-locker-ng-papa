(function(){
	'use strict';
	angular.
		module('app.newbeer')
		.controller( 'NewBeerCtrl', NewBeerCtrl );

	function NewBeerCtrl ( $scope, beerCollectionService, $location ) {
		var vm = this;
		vm.newBeer = {};

		$scope.$on( 'postBeer', function ( evt, args ) {
			// Add new beer to the DB
			beerCollectionService.postBeer( vm.newBeer );
			// Switch back to the main page
			$location.path( '/' );
		});
	
	}


})();