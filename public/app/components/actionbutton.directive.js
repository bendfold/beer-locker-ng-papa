(function(){
	angular
		.module( 'app.beerlist' )
		.directive( 'actionButton', actionButton );

	function actionButton () {
		var directive = {
			restrict: 'A',
			controller: actionButtonCtrl,
			link: linkFunc
		};
		return directive;
		
		function linkFunc ( scope, el, attr, ctrl ) {
			el.on('click', function( evt ){
				var actionChecklist = [ 'toggleEditPanel', 'deleteBeer', 'putBeer' ],
					action;

				// Check to see if the string is in the actionsChecklist
				action = actionChecklist.some( stringIsInChecklist ) ? scope[attr.actionButton] : false;
				// If its not then bail
				if ( !action ) {
					console.error( 'Developer warning - Specified action is not valid' );
					return false;
				}
				// Fire off the appropriate action
				action( [scope.beer._id, el] );

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
			$rootScope.$broadcast( 'putBeer', args );
		}
	}

})();













