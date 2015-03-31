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

		vm.lastOrderProp;

		$scope.$on( 'toggleEditPanel', function ( evt, args ) {

			var beerListItem = document.getElementById( 'beer_' + args[0] );
			beerListItem.classList.toggle( 'flip-left' );

		});

		$scope.$on( 'toggleInfoPanel', function ( evt, args ) {

			var beerListItem = document.getElementById( 'beer_' + args[0] );
			beerListItem.classList.toggle( 'flip-right' );
			
		});

		$scope.$on( 'putBeer', function ( evt, args ) {
			
			console.log( "putBeer evt ", evt );
			console.log( "putBeer args ", args );

			// Add the changes to the DB
			beerCollectionService.putBeer( args );
			// Close the panel up
			$rootScope.$broadcast( 'toggleEditPanel', args );
		});

	}

})();