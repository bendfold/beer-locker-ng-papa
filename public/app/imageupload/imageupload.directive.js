angular
	.module('app.imageupload')
	.directive('imageUpload', imageUpload);

function imageUpload() {
	var directive = {
		restrict: 'EA',
		templateUrl: './app/imageupload/imageupload.tmpl.html',
		scope: {
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
					
					rawBase64 = result.replace( /^data:image\/(png|jpeg|gif);base64,/ , " ");

					ctrl.postImgToImgur( rawBase64 ).then(function( data ){
						
						var img = new Image();
						img.src = data.data.data.link;

						// Add the image to the page.
						fileDisplayArea.appendChild(img);

					});

				}
				reader.readAsDataURL( file );
			
			}
		
		}
	
	};

}

function imageUploadCtrl ( $scope, beerCollectionService, dataservice ) {
	var vm = this;
	vm.postImgToImgur = dataservice.postImgToImgur;
}
