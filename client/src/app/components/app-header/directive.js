( function() {
	'use strict';

	function AppHeaderComponent(){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/components/app-header/template.html',
			scope: {}, // = scope privé
			controllerAs: 'vm', //controller de directive
			bindToController: true,
			controller: function($log) {
				var vm = this;
				$log.debug('Header loader');
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('AppHeaderComponent', [])
	.directive('appHeader', AppHeaderComponent);
})();