(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.moviePlaying', {
        url: '/playing',
        views: {
          '@': {
            template: '<movie-playing></movie-playing>',
          }
        }
      });

  }

  angular.module('movie-playing', ['moviePlayingDirective'])
  .config(config);
})();