'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('roboceana', {
        url: '/events/roboceana',
        template: '<roboceana></roboceana>'
      });
  });
