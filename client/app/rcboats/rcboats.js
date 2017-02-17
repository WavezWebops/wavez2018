'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('rcboats', {
        url: '/events/rcboats',
        template: '<rcboats></rcboats>'
      });
  });
