(function(){
	'use strict';
	angular.
		module('app.newbeer')
		.controller( 'NewBeerCtrl', NewBeerCtrl );

	function NewBeerCtrl ( $scope, beerCollectionService, $location ) {
		var vm = this;
		vm.newBeer = {};

		// console.log( 'NewBeerCtrl ------------------' );
		// console.log( 'vm ', vm );

		$scope.$on( 'postBeer', function ( evt, args ) {
			// console.log( 'evt ', evt );
			// console.log( 'args ', args );
			// console.log( 'newBeer ', vm.newBeer );
			
			// Add new beer to the DB
			beerCollectionService.postBeer( vm.newBeer );
			// Switch back to the main page
			$location.path( '/' );
		});
	
	}


})();