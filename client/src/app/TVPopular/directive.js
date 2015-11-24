( function() {
	'use strict';

	function TVPopular(TVPopularService){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/TVPopular/tvpopular.template.html',
			scope: {}, // = scope privé
			controllerAs: 'vm', //controller de directive
			bindToController: true,
			controller: function($log) {
				var vm = this;
				TVPopularService.getMovie().then(function(data) {
					console.log(data.data.results);
					vm.movies = data.data.results;
				});
			},
			link: function(scope, elm, attrs){
			}
		};
	}

	angular.module('TVPopularDirective', ['service.TVPopular'])
	.directive('TVPopular', TVPopular);
})();