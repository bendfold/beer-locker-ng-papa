(function(){
	'use strict';
	angular
		.module( 'app.beerlist')
		.controller( 'BeerlistCtrl', BeerlistCtrl );

	/* @ngInject */
	function BeerlistCtrl ( dataservice, $scope ) {
		var vm = this;
		vm.beers = [];

		activate();

		function activate () {
			// Using a resolver on all routes or dataservice.ready in every controller
			// var promises = [getAvengers()];
			// return dataservice.ready(promises).then(function(){
			return getBeers().then(function() {
				// logger.info('Activated Beer Listing View');
				console.log( 'Get beers actived' );
			});
		}

		function getBeers () {
			console.log("get beer fired");
			return dataservice.getBeers().then(function( data ){
				vm.beers = data;
				return vm.beers;
			});
		}

		// vm.deleteBeer = function ( beerId ) {
		// 	console.log( 'beerId ', beerId );
		// 	// return dataservice.deleteBeer( beerId ).then(function( data ){

		// 	// });
		// }

		$scope.$on( 'removeBeer', function ( evt, args ) {
			console.log( 'evt ', evt );
			console.log( 'args ', args );
		});

		console.log( 'vm ', vm )

	}

})();