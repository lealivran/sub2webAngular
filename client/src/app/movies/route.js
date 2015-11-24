 (function() {
 	'use strict';

	/**
	 * @name  config
	 * @description config block
	 */
	 function config($stateProvider) {
	 	$stateProvider
	 	.state('root.moviePopular', {
	 		url: '/movies/',
	 		views: {
	 			'@': {
	 				template: '<movie-popular></movie-popular>',
	 			}
	 		}
	 	})
	 	.state('root.movieDetails',{
	 		url: '/movies/id/:id',
	 		views: {
	 			'@': {
	 				templateUrl: './src/app/movies/moviesDetails.template.html',
	 				controller: function($stateParams, MovieService, $scope){
	 					MovieService.getOneMovie($stateParams.id)
	 					.then(function(data) {
	 						$scope.movie = data;
	 					});
	 				}
	 			}
	 		}
	 	});
}

angular.module('movie-popular', ['moviePopularDirective'])
.config(config);
})();