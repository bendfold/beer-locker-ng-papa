(function(){
	'use strict';
	angular
		.module( 'app.beerlist')
		.controller( 'BeerlistCtrl', BeerlistCtrl );

	/* @ngInject */
	function BeerlistCtrl ( dataservice, $scope, beerCollectionService ) {
		var vm = this;
		vm.beers = [];

		// activate();

		getBeers();

		function getBeers () {
			beerCollectionService.getBeers().then(function( data ){
				vm.beers = data;
				return vm.beers;
			});
		}

		$scope.$on( 'removeBeer', function ( evt, args ) {
			var beer_id = args[0];
			beerCollectionService.removeBeer( beer_id );

		});

		$scope.$on( 'editBeer', function ( evt, args ) {
			console.log( 'evt ', evt );
			console.log( 'args ', args );
			// Show edit panel
			// vm.edit = false;
			// console.log('args[0] ', args[0]);
			// console.log('args[1] ', $  );
			// console.log('args[1] ', document.getElementById( 'beer_' + args[0] ) );
			
			var beerListItem = document.getElementById( 'beer_' + args[0] );
			beerListItem.classList.add( 'edit-mode' );

		});

	}

})();