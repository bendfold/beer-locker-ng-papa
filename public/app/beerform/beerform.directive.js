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
		
		console.log( 'scope, el, attr, ctrl ', scope, el, attr, ctrl );
	
	};
}

BeerFormListCtrl.$inject = ['$scope', 'beerCollectionService', 'dataservice'];

function BeerFormListCtrl( $scope, beerCollectionService, dataservice ) {
	var vm = this;
};












