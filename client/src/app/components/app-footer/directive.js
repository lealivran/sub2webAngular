( function() {
	'use strict';

	function AppFooterComponent(){
		return{
			restrict: 'EA',
			replace: true,
			templateUrl: './src/app/components/app-footer/template.html',
			scope: {}, // = scope privé
			controllerAs: 'vm', //controller de directive
			bindToController: true,
			controller: function($log) {
				var vm = this;
				$log.debug('Footer loader');
			},
			link: function(scope, elm, attrs){

			}
		};
	}

	angular.module('AppFooterComponent', [])
	.directive('appFooter', AppFooterComponent);
})();