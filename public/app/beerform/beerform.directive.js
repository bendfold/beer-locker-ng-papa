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

		fileInput.addEventListener( 'change', function ( e ) {

			var file = fileInput.files[0],
				imageType = /image.*/;

			if ( file.type.match( imageType ) ) {
				var reader = new FileReader();
				reader.onloadend = function ( e ) {

					var result = reader.result,
						rawBase64;
					
					rawBase64 = result.replace( /^data:image\/(png|jpeg|gif);base64,/ , " ");

					ctrl.postImgToImgur( rawBase64 ).then(function( data ){
						
						// TODO - Sort all this out
					
						console.log( 'Returned ++++++ ', data.data.data.link );

						var img = new Image();
						img.src = data.data.data.link;

						// Add the image to the page.
						fileDisplayArea.appendChild(img);
					
						// TODO - Sort all this out
					
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
};












