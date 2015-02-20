angular
	.module('app.imageupload')
	.directive('imageUpload', imageUpload);

function imageUpload() {
	var directive = {
		restrict: 'EA',
		templateUrl: './app/imageupload/imageupload.tmpl.html',
		scope: {
			model: '='
		},
		link: linkFunc,
		controller: imageUploadCtrl,
		controllerAs: 'vm'
	};

	return directive;

	function linkFunc(scope, element, attr, ctrl) {
		var el = element[0],
			fileInput = el.querySelector('.file-input'),
			fileDisplayArea = el.querySelector('.file-display-area');

		fileInput.addEventListener( 'change', onInputChange );

		function onInputChange ( e ) { 
			var file = fileInput.files[0],
				imageType = /image.*/;

			if ( file.type.match( imageType ) ) {
				var reader = new FileReader();
				
				reader.onloadend = function ( e ) {
					var result = reader.result,
						rawBase64;
					// Whip out the stuff imgur don't like
					rawBase64 = result.replace( /^data:image\/(png|jpeg|gif);base64,/ , " ");
					// Push the raw base 64 goodness up to imgur
					ctrl.postImgToImgur( rawBase64 ).then(function( data ){
						// Update preview image
						// var previewImg = fileDisplayArea.querySelector( '.image-preview' );
						// previewImg.src = data.data.data.link;
						// Update imgUrl on the beer model
						scope.model.imgUrl = data.data.data.link;
					});
				}
				
				// Parse the file blob as 64 bit encoded data
				reader.readAsDataURL( file );
			
			}
		
		}
	
	};

}

function imageUploadCtrl ( $scope, beerCollectionService, dataservice ) {
	var vm = this;
	vm.postImgToImgur = dataservice.postImgToImgur;
}
