angular
	.module('app.beerform')
	.directive('beerForm', beerForm);

function beerForm() {
	var directive = {
		restrict: 'EA',
		templateUrl: './app/beerform/beerform.tmpl.html',
		scope: {
			submitAction: '@',
			// This creates a 2 way binding to the parent scope for the model attribute
			model: '='
		},
		link: linkFunc,
		controller: BeerFormListCtrl,
		controllerAs: 'vm'
	};

	return directive;

	function linkFunc(scope, el, attr, ctrl) {
		scope.vm.submitAction = attr.submitAction;
		
// TODO >>>>
		
		

		// scope[attr.fooModel] = angular.copy(scope.barget);
		console.log( 'submit ', el[0].querySelector( '.btn-submit' ) );
		console.log( 'submit ', el );
		var submitBtn = el[0].querySelector( '.btn-submit' );

		submitBtn.addEventListener('click', function() {
			console.log( 'submit was clicked' );
			console.log( 'scope localbeer ', scope.localBeer.name );
			console.log( 'scope model ', scope.model );
			
			scope.model.name = scope.localBeer.name;

		}, false);

		// el.on('click', function() {
		// 	console.log( 'scope localbeer ', scope.localBeer );
		// 	console.log( 'scope localbeer ', scope.model );
		// 	angular.forEach( scope.model, function(value, key) {
		// 		console.log( 'value ', value );
		// 		console.log( 'key ', key );
		// 	});
		// });

		// function changeCheck() {

		// } 

		console.log( 'el ', el );
		console.log( 'attr ', attr );
		console.log( 'attr ', attr.model );
		console.log( 'ctrl ', ctrl );

// TODO >>>>



	
	};
}

BeerFormListCtrl.$inject = ['$scope', 'beerCollectionService', 'dataservice'];

function BeerFormListCtrl( $scope, beerCollectionService, dataservice ) {
	var vm = this;

	console.log( '$scope ', $scope );
};












