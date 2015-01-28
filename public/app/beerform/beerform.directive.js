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

// TODO - test image uploader

			var fileinput = document.getElementById( 'fileInput' );
			var fileDisplayArea = document.getElementById( 'fileDisplayArea' );
			
			console.log('fileinput ', fileinput);
			console.log('fileDisplayArea ', fileDisplayArea);

			fileInput.addEventListener( 'change', function ( e ) {
				
				console.log( 'fileInput in change ---- ', fileInput.files );

				var file = fileInput.files[0];
				var imageType = /image.*/;

				if ( file.type.match( imageType ) ) {
					
					var reader = new FileReader();

					reader.onload = function ( e ) {
						console.log( 'reader e ', e );
					
						fileDisplayArea.innerHtml = "";
						
						var img = new Image();
						
						console.log( 'reader ', reader );
						console.log( 'reader.result ', reader.result );

						img.src = reader.result;

						fileDisplayArea.appendChild( img );
					
					}
					console.log( 'file ', file );
					
					var binStr = reader.readAsBinaryString( file );

					// reader.readAsDataURL( file );
					// reader.readAsArrayBuffer( file );

					// console.log( 'FileReader.readAsText ', reader.readAsText( file ) );

				
				} else {
					fileDisplayArea.innerHtml = 'File not supported!';
				}


			});
// TODO - test image uploader


	}
}

BeerFormListCtrl.$inject = ['$scope', 'beerCollectionService'];

function BeerFormListCtrl( $scope, beerCollectionService ) {
	var vm = this;
}