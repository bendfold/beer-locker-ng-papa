(function(){
	'use strict';
	angular
		.module( 'app.beerform' )
		.directive( 'beerForm', beerForm );
	
	function beerForm () {
		var directive = {
			restrict : 'E',
			link: linkFunc,
			controller: 'BeerFormCtrl',
			templateUrl: './app/beerform/beerform.tmpl.html',
		};
		return directive;

		function linkFunc ( scope, el, attr, ctrl ) {
			console.log( 'scope ', scope );
			console.log( 'el ', el );
			console.log( 'attr ', attr );
			console.log( 'ctrl ', ctrl );
		}
	}

})();