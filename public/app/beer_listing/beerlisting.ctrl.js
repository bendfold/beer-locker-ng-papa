(function(){
	'use strict';
	angular
		.module( 'app.beerlisting')
		.controller( 'BeerlistingCtrl', BeerlistingCtrl );

	/* @ngInject */
	function BeerlistingCtrl ( dataservice ) {
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
				console.log( 'vm.beers ', vm.beers );
				return vm.beers;
			});
		}

	}

})();