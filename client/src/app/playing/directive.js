( function() {
	'use strict';

	function MoviePlaying(MoviePlayingService){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/playing/playing.template.html',
			scope: {}, // = scope privé
			controllerAs: 'vm', //controller de directive
			bindToController: true,
			controller: function($log) {
				var vm = this;
				MoviePlayingService.getMovie().then(function(data) {
					console.log(data.data.results);
					vm.movies = data.data.results;
				});
			},
			link: function(scope, elm, attrs){
			}
		};
	}

	angular.module('moviePlayingDirective', ['service.moviePlaying'])
	.directive('moviePlaying', MoviePlaying);
})();