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

		var fileinput = document.getElementById( 'fileInput' );
		var fileDisplayArea = document.getElementById( 'fileDisplayArea' );

		console.log( scope, el, attr, ctrl );

		fileInput.addEventListener( 'change', function ( e ) {
		
			console.log( 'fileInput in change ---- ', fileInput.files[0] );

			var file = fileInput.files[0],
				imageType = /image.*/;


			if ( file.type.match( imageType ) ) {
				var reader = new FileReader();
				reader.onloadend = function ( e ) {

					var result = reader.result,
						rawBase64;
					
					rawBase64 = result.replace( /^data:image\/(png|jpeg|gif);base64,/ , " ");

					ctrl.postImgToImgur( rawBase64 ).then(function( data ){
						console.log( 'Returned ++++++ ', data.data.data.link );
					});

				}

				reader.readAsDataURL( file );
			
			}
			
		});

	}
}

BeerFormListCtrl.$inject = ['$scope', 'beerCollectionService', 'dataservice'];

function BeerFormListCtrl( $scope, beerCollectionService, dataservice ) {
	var vm = this;

	vm.postImgToImgur = dataservice.postImgToImgur;

	// var vm = this,
	// 	image = 'http://img-cache.cdn.gaiaonline.com/4c212d3c2325360f1b6d30cfc89edddf/http://i160.photobucket.com/albums/t184/cuttie_clem/octopus.gif';
	
	// console.log( 'BeerFormListCtrl dataservice ', dataservice );

	// // dataservice.postImgToImgur( image );
	// dataservice.postImgToImgur( image ).then(function( data ){
	// 	console.log( 'data +++++++++ ', data );
	// });

	// console.log(  'dataservice.postImgToImgur( image ) ', dataservice.postImgToImgur( image ) );

};












