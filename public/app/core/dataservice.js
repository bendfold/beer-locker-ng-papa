(function(){
	'use strict';

	angular
		.module( 'app.core' )
		.factory( 'dataservice', dataservice );

	function dataservice( $http, $q, DB_URL ) {

		var service = {
			getBeers : getBeers,
			postBeer : postBeer,
			putBeer : putBeer,
			deleteBeer : deleteBeer,
			postImgToImgur : postImgToImgur
		};
		
		return service;

		function getBeers () {
			return $http.get( DB_URL )
				.then( getBeersCompleted )
				.catch(function( message ){
					console.log( 'XHR Failed for getBeers ', message );
				});
			function getBeersCompleted ( data, status, headers, config ) {
				return data.data;
			}
		}

		function postBeer ( data ) {
			console.log('postBeer in dataservice fired ', data );
			return $http.post( DB_URL, data )
				.then( postBeerCompleted )
				.catch(function( message ){
					console.log( 'XHR Failed for postBeerCompleted ', message );
				});
			function postBeerCompleted () {
				console.log('postBeer data ', data );
				return data;
			}
		}

		function putBeer ( beerId, data ) {
			return $http.put( DB_URL + "/" + beerId, data )
				.then( putBeerCompleted )
				.catch(function( message ){
					console.log( 'XHR Failed for readBeers ', message );
				});
			function putBeerCompleted ( data ) {
				console.log('putBeerCompleted data ', data );
				return data;
			}
		}

		function deleteBeer ( beerId ) {
			return $http.delete( DB_URL + "/" + beerId )
				.then( deleteBeerCompleted )
				.catch(function( message ){
					console.log( 'XHR Failed for readBeers ', message );
				});
			function deleteBeerCompleted ( data ) {
				// console.log('deleteBeerCompleted data ', data );
				return data;
			}
		}

		function postImgToImgur ( image ) {

			var req = {
				method: 'POST',
				url: 'https://api.imgur.com/3/image',
				headers : {
					Authorization : 'Client-ID 283e5d32df32535',
					Accept: 'application/json'
				},
				data : {
					image : image,
					type: 'base64'
				}
			};

			return $http( req )
			.then( imagePosted )
			.catch(function( message ){
				console.log( 'XHR Failed for postImgToImgur ', message );
			});

			function imagePosted ( data ) {
				return data;
			}

		}

	}

})();







