( function() {
	'use strict';

	function MovieService($http, $log){
		var service = {};
		service.movie = [];
		var key = '894265c196e11346d6dcb219e2e9d884';


		service.getMovie = function () {

			return $http.get('https://api.themoviedb.org/3/movie/popular', {
				params:{
					api_key: key
				}
			})
			.success(function (data) {
				service.movie = data;
			})
			.error(function () {
				console.log('error');
			});
		};


		// GET ONE MOVIE WITH ID
		service.getOneMovie = function(movieID) {
			
			return $http.get('https://api.themoviedb.org/3/movie/' + movieID,{
				params:{
					api_key: key
				}
			})
			.then(function(movieData) {
				return movieData.data;
			});
		};
		
		return service;
	}

	angular.module('service.movie', [])
	.factory('MovieService', MovieService);

})();