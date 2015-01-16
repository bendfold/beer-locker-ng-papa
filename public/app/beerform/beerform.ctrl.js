(function(){
	'use strict';
	angular.
		module('app.beerform')
		.controller( 'BeerFormCtrl', BeerFormCtrl );

	function BeerFormCtrl ( $scope, beerCollectionService ) {
		var vm = this;
		vm.newBeer = {};

		console.log( 'BeerFormCtrl ------------------' );
		console.log( 'vm ', vm );

		$scope.$on( 'postBeer', function ( evt, args ) {
			console.log( 'evt ', evt );
			console.log( 'args ', args );
			console.log( 'newBeer ', vm.newBeer );
			beerCollectionService.postBeer( vm.newBeer );
		});
	
	}


})();