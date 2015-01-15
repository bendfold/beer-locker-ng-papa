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
		controller: ExampleController,
		controllerAs: 'vm'
	};

	return directive;

	function linkFunc(scope, el, attr, ctrl) {
		// console.log('linkFunc ------------------');
		// console.log('scope ', scope );
		// console.log('el ', el );
		// console.log('attr ', attr );
		// console.log('ctrl ', ctrl);

		scope.vm.submitAction = attr.submitAction;

	}
}

ExampleController.$inject = ['$scope', 'beerCollectionService'];

function ExampleController( $scope, beerCollectionService ) {
	console.log('ExampleController ------------------');
	// // Injecting $scope just for comparison
	var vm = this;
	vm.submitAction = '';

	// console.log('vm ', vm );
	// console.log('$scope ', $scope );
	
	$scope.$on( 'postBeer', function ( evt, args ) {
		console.log( 'evt ', evt );
		console.log( 'args ', args );
		beerCollectionService.postBeer( args );
	});

	// vm.min = 3; 
	// vm.max = $scope.max; 
	// console.log('CTRL: $scope.max = %i', $scope.max);
	// console.log('CTRL: vm.min = %i', vm.min);
	// console.log('CTRL: vm.max = %i', vm.max);
}