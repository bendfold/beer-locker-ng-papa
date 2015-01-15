(function(){
	'use strict';
	angular
		.module( 'app.beerlist')
		.controller( 'BeerlistCtrl', BeerlistCtrl );

	/* @ngInject */
	function BeerlistCtrl ( dataservice, $scope, beerCollectionService ) {
		var vm = this;
		vm.beers = [];

		activate();

		////////////

		function activate() {
			return 	beerCollectionService.getBeers().then(function( data ){
				vm.beers = data;
				return vm.beers;
			});
		}

		$scope.$on( 'removeBeer', function ( evt, args ) {
			var beer_id = args[0];
			beerCollectionService.removeBeer( beer_id );
		});

		$scope.$on( 'toggleEditPanel', function ( evt, args ) {
			var beerListItem = document.getElementById( 'beer_' + args[0] );
			beerListItem.classList.toggle( 'edit-mode' );
		});

		$scope.$on( 'putBeer', function ( evt, args ) {
			beerCollectionService.putBeer( args );
		});

	}

})();