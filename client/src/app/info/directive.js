( function() {
	'use strict';

	function MovieInfo(InfoService){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/movies/info.template.html',
			scope: {}, // = scope privé
			controllerAs: 'vm', //controller de directive
			bindToController: true,
			controller: function($log) {
				var vm = this;
				//var id = $stateProvider.id;
				//var id = 135397;
				InfoService.getInfo().then(function(data) {
				// InfoService.getInfo(id).then(function(data) {
					console.log(data.data.results);
					vm.movies = data.data.results;
				});
			},
			link: function(scope, elm, attrs){
			}
		};
	}

	angular.module('infoMovieDirective', ['service.movieInfo'])
	.directive('movieInfo', MovieInfo);



})();