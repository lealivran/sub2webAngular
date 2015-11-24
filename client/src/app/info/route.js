(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.infoMovie', {
        // url: '/info/:id',
        url: '/info',
        views: {
          '@': {
            template: '<info-movie></info-movie>',
          }
        }
      });
  }

  angular.module('info-movie', ['infoMovieDirective'])
  .config(config);
})();