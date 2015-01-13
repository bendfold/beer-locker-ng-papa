(function(){
	'use strict';
	angular
		.module( 'app.beerform' )
		.directive( 'beerForm', 'beerForm' );
	
	function beerForm () {
		var directive = {
			restrict : 'E',
			link: linkFunc,
			controller: BeerFormCtrl,
			controllerAs: 'vm',
			templateUrl: './app/beerform/beerform.tmpl.html',
		};
		return directive;

		function linkFunc ( scope, el, attr, ctrl ) {

		}
	}

})();