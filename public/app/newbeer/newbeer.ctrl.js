(function(){
	'use strict';
	angular.
		module('app.newbeer')
		.controller( 'NewBeerCtrl', NewBeerCtrl );

	function NewBeerCtrl ( $scope, beerCollectionService ) {
		var vm = this;
		vm.newBeer = {};

		console.log( 'NewBeerCtrl ------------------' );
		console.log( 'vm ', vm );

		$scope.$on( 'postBeer', function ( evt, args ) {
			console.log( 'evt ', evt );
			console.log( 'args ', args );
			console.log( 'newBeer ', vm.newBeer );
			beerCollectionService.postBeer( vm.newBeer );
		});
	
	}


})();