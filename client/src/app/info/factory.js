( function() {
	'use strict';

	function InfoService($http, $log){

		var service = {};

		service.movieInfo = [];

		service.getInfo = function () {
		//service.getInfo = function (id) {

			var key = '894265c196e11346d6dcb219e2e9d884';

			return $http.get('https://api.themoviedb.org/3/movie/', {
			//return $http.get('https://api.themoviedb.org/3/movie/'+id, {
				params:{
					api_key: key
				}
			})
			.success(function (data) {
				service.movieInfo = data;
			})
			.error(function () {
				console.log('error');
			});
		};

		return service;

	}

	angular.module('service.movieInfo', [])
		.factory('InfoService', MovieService);

})();