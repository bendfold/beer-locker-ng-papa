
// (function(){
// 	angular
// 		.module( 'app.beerlist' )
// 		.directive( 'removeBeerButton', RemoveBeerButton );

// 	function RemoveBeerButton () {
// 		var directive = {
// 			restrict: 'E',
// 			replace: true,
// 			templateUrl: './app/components/removebeerbutton.tmpl.html',
// 			controller: RemoveBeerCtrl
// 			// link: linkFunc
// 		};
// 		return directive;
		
// 	// 	function linkFunc ( scope, el, attr, ctrl ) {
// 	// 		console.log( 'linkFunc ',  scope.beer._id , el, attr, ctrl );
	
// 	// console.log( 'linkFunc scope ',  scope );

// 	// 	}

// 	};
// 	function RemoveBeerCtrl( $scope, $rootScope, dataservice ){
// 		$scope.deleteBeer = function ( beer_id ) {
			
// 			console.log(dataservice);

// 			$rootScope.$broadcast( 'removeBeer', beer_id );
// 		}
// 	}

// })();

(function(){
	angular
		.module( 'app.beerlist' )
		.directive( 'removeBeerButton', RemoveBeerButton );

	function RemoveBeerButton () {
		var directive = {
			restrict: 'A',
			// replace: true,
			controller: RemoveBeerCtrl,
			// templateUrl: './app/components/removebeerbutton.tmpl.html',
			link: linkFunc
		};
		return directive;
		
		function linkFunc ( scope, el, attr, ctrl ) {
			el.on('click', function( evt ){
				// console.log( 'linkFunc scope.beer._id  ',  scope.beer._id );
				// console.log( 'linkFunc scope  ',  scope);
				console.log( 'linkFunc el ',  el );
				console.log( 'linkFunc attr ',  attr );
				// console.log( 'linkFunc ctrl ',  ctrl );
				// console.log( 'beer_id ',  evt );
				// console.log( '$rootScope ', $rootScope );
				console.log( 'linkFunc scope ',  scope );
				// scope.attr.removeBeerButton
				// 
				
				
			});
			

		}

	};

	function RemoveBeerCtrl( $scope, $rootScope ){


		$scope.deleteBeer = function ( boom ) {
			console.log('$scope', $scope);
			console.log('$rootScope', $rootScope);

			// $rootScope.$broadcast( 'removeBeer', beer_id );
		}
	}

})();