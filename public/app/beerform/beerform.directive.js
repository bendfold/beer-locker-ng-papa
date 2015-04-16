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
		var submitBtn = el[0].querySelector( '.btn-submit' );
		
		scope.vm.submitAction = attr.submitAction;

		submitBtn.addEventListener('click', function() {
			var localBeer = scope.localBeer;
			for (var key in scope.localBeer) {
				if ( scope.localBeer.hasOwnProperty(key) ) {
					console.log( 'localbeer key' , key  );
					console.log( 'localbeer key' , scope.localBeer[key]  );

					var localKey = key,
						localVal = scope.localBeer[key];
					
					scope.model[localKey] = localVal;

				}
			}
		}, false);
	
	}
}

BeerFormListCtrl.$inject = ['$scope', 'beerCollectionService', 'dataservice'];

function BeerFormListCtrl( $scope, beerCollectionService, dataservice ) {
	var vm = this;
}











