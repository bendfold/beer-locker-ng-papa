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

// TODO - test image uploader

// 			var fileinput = document.getElementById( 'fileInput' );
// 			var fileDisplayArea = document.getElementById( 'fileDisplayArea' );
			
// 			console.log('fileinput ', fileinput);
// 			console.log('fileDisplayArea ', fileDisplayArea);

// 			fileInput.addEventListener( 'change', function ( e ) {
				
// 				console.log( 'fileInput in change ---- ', fileInput.files );

// 				var file = fileInput.files[0];
// 				var imageType = /image.*/;

// 				if ( file.type.match( imageType ) ) {
					
// 					var reader01 = new FileReader();
// 					var reader02 = new FileReader();

// 					reader01.onload = function ( e ) {
// 						// console.log( 'reader e ', e );
// 						fileDisplayArea.innerHtml = "";
// 						var img = new Image();
// 						// console.log( 'reader ', reader );
// 						img.src = reader01.result;
// 						fileDisplayArea.appendChild( img );
// 					}

					

// 					// console.log( 'file ', file );
// 					reader01.readAsDataURL( file );
// 					// var x = reader01.readAsDataURL( file );
// 					// var y = reader01.readAsBinaryString( file );

// 					// console.log( 'x ', x);
// 					// console.log('y', y );

// 					reader02.onloadend = function ( e ) {
						
// 						// console.log( 'reader02.result ', reader02.result );
// 						scope.model.imgData = reader02.result;

// 						console.log( 'scope.model --------- ', scope.model );
// 					}

// 					reader02.readAsBinaryString( file );

// console.log( 'scope ', scope );
// console.log( 'scope ', scope.model );

// // console.log( 'el ', el );
// // console.log( 'attr ', attr );
// // console.log( 'ctrl ', ctrl );

// 					// reader.readAsDataURL( file );
// 					// reader.readAsArrayBuffer( file );

// 					// console.log( 'FileReader.readAsText ', reader.readAsText( file ) );

				
// 				} else {
// 					fileDisplayArea.innerHtml = 'File not supported!';
// 				}


// 			});
// TODO - test image uploader


	}
}

BeerFormListCtrl.$inject = ['$scope', 'beerCollectionService', 'dataservice'];

function BeerFormListCtrl( $scope, beerCollectionService, dataservice ) {
	var vm = this,
		image = 'http://img-cache.cdn.gaiaonline.com/4c212d3c2325360f1b6d30cfc89edddf/http://i160.photobucket.com/albums/t184/cuttie_clem/octopus.gif';
	
	console.log( 'BeerFormListCtrl dataservice ', dataservice );

	dataservice.postImgToImgur( image );

};












