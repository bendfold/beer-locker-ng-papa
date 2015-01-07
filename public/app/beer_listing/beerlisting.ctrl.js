(function(){
	'use strict';
	angular
		.module( 'app.beerlisting')
		.controller( 'BeerlistingCtrl', BeerlistingCtrl );

	function BeerlistingCtrl ( dataservice, logger ) {
		var vm = this;
		vm.beers = [];

		activate();

		function active () {
			// Using a resolver on all routes or dataservice.ready in every controller
			// var promises = [getAvengers()];
			// return dataservice.ready(promises).then(function(){
			return getBeers().then(function() {
				// logger.info('Activated Beer Listing View');
			});
		}

		function getBeers () {
			return dataservice.readBeers().then(function( data ){
				vm.beers = data;
				console.log( 'vm.beers ', vm.beers );
				return vm.beers;
			});
		}

	}

})();