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

			

			// $scope.orderProp = null ? lastOrderProp : null;
			// if ( typeof $scope.orderProp  === 'string' ) {
				
			// 	console.log( 'switch it to null' );
			// 	$scope.orderProp = undefined;
			// 	vm.lastOrderProp = $scope.orderProp;
				
			
			// } else {

			// 	$scope.orderProp = vm.lastOrderProp;

			// }
			
			console.log( '$scope.orderProp ', $scope.orderProp , typeof $scope.orderProp );
			console.log( 'vm.lastOrderProp ', vm.lastOrderProp, typeof vm.lastOrderProp );
			console.log('toggleEditPanel ',  beerListItem );

		});

		$scope.$on( 'toggleInfoPanel', function ( evt, args ) {

			var beerListItem = document.getElementById( 'beer_' + args[0] );
			beerListItem.classList.toggle( 'flip-right' );
			
		});

		$scope.$on( 'putBeer', function ( evt, args ) {
			// Add the changes to the DB
			beerCollectionService.putBeer( args );
			// Close the panel up
			$rootScope.$broadcast( 'toggleEditPanel', args );
		});

	}

})();