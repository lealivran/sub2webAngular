( function() {
	'use strict';

	function MoviePopular(MovieService){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/movies/movies.template.html',
			scope: {}, // = scope privé
			controllerAs: 'vm', //controller de directive
			bindToController: true,
			controller: function($log) {
				var vm = this;
				MovieService.getMovie().then(function(data) {
					console.log(data.data.results);
					vm.movies = data.data.results;
				});
			},
			link: function(scope, elm, attrs){
			}
		};
	}

	angular.module('moviePopularDirective', ['service.movie'])
	.directive('moviePopular', MoviePopular);



})();