(function(){
	angular.module( 'papa.test.main',[] )
	.controller( 'MainCtrl', MainCtrl );

	function MainCtrl( $scope ) {
		$scope.msg = 'Mazza loves a bit of Milka';
	}
	
})();