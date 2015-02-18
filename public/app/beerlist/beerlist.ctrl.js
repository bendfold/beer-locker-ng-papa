(function(){
	'use strict';
	angular
		.module( 'app.beerlist')
		.controller( 'BeerlistCtrl', BeerlistCtrl );

	/* @ngInject */
	function BeerlistCtrl ( $scope, beerCollectionService, $rootScope ) {
		var vm = this;
		vm.beers = [];

		activate();

		////////////

		function activate() {
			return 	beerCollectionService.getBeers().then(function( data ){
				vm.beers = data;
				// Set filter deafult
				$scope.orderProp = 'name';

				// Add beers to scope
				return vm.beers;
			});
		}

		$scope.$on( 'removeBeer', function ( evt, args ) {
			var beer_id = args[0];
			beerCollectionService.removeBeer( beer_id );
		});

		$scope.$on( 'toggleEditPanel', function ( evt, args ) {

			var beerListItem = document.getElementById( 'beer_' + args[0] );
			beerListItem.classList.toggle( 'flip' );
			
			console.log('toggleEditPanel ',  beerListItem );

			// var beerListItem = document.getElementById( 'beer_' + args[0] );
			// beerListItem.classList.toggle( 'edit-mode' );
		});

		$scope.$on( 'putBeer', function ( evt, args ) {
			// Add the changes to the DB
			beerCollectionService.putBeer( args );
			// Close the panel up
			$rootScope.$broadcast( 'toggleEditPanel', args );
		});

	}

})();