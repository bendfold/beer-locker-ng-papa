(function(){
	'use strict';
	angular
		.module( 'app.beerlist')
		.controller( 'BeerlistCtrl', BeerlistCtrl );

	/* @ngInject */
	function BeerlistCtrl ( dataservice, $scope, beerLogService ) {
		var vm = this;
		vm.beers = [];

		// activate();

		getBeers();

		function getBeers () {
			beerLogService.getBeers().then(function( data ){
				vm.beers = data;
				return vm.beers;
			});
		}

		$scope.$on( 'removeBeer', function ( evt, args ) {
			console.log( 'evt ', evt );
			console.log( 'args ', args );
			var beer_id = args[0];
			beerLogService.removeBeer( beer_id );

		});

		// console.log( 'vm ', vm )

	}

})();