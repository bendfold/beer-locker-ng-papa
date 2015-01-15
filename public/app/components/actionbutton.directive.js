(function(){
	angular
		.module( 'app.beerlist' )
		.directive( 'actionButton', actionButton );

	function actionButton () {
		var directive = {
			restrict: 'A',
			controller: actionButtonCtrl,
			controllerAs : 'vm',
			link: linkFunc
		};
		return directive;
		
		function linkFunc ( scope, el, attr, ctrl ) {
			el.on('click', function( evt ){
				var actionChecklist = [ 'toggleEditPanel', 'deleteBeer', 'putBeer', 'postBeer' ],
					action,
					beer_id;

				// Check to see if the string is in the actionsChecklist
				action = actionChecklist.some( stringIsInChecklist ) ? scope[attr.actionButton] : false;
				// If its not then bail
				if ( !action ) {
					console.error( 'Developer warning - Specified action is not valid' );
					return false;
				}
				// Had to add a check in here as the form is used on both the edit & add view so had to bind it via issolate scope 
				beer_id = scope.beer ? scope.beer._id : scope.model._id;

				// Fire off the appropriate action
				action( [ beer_id, el ] );

				// Helper function to ascertain whether the action is allowed or not. 
				function stringIsInChecklist ( value, index, array ) {
					return value === attr.actionButton;
				}

			});
		}

	};

	function actionButtonCtrl( $scope, $rootScope ){
		$scope.deleteBeer = function ( args ) {
			// Note these args are coming from the linkFunc above
			$rootScope.$broadcast( 'removeBeer', args );
		}
		$scope.toggleEditPanel = function ( args ) {
			console.log('args ', args)
			$rootScope.$broadcast( 'toggleEditPanel', args );
		}
		$scope.putBeer = function ( args ) {
			console.log( 'args ', args );
			$rootScope.$broadcast( 'putBeer', args );
		}
		$scope.postBeer = function ( args ) {
			$rootScope.$broadcast( 'postBeer', args );
		}
	}

})();














