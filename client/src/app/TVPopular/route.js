(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.TVPopular', {
        url: '/tv',
        views: {
          '@': {
            template: '<tv-popular></tv-popular>',
          }
        }
      });

  }

  angular.module('tv-popular', ['TVPopularDirective'])
  .config(config);
})();