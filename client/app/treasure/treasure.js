'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('treasure', {
        url: '/events/treasure',
        template: '<treasure></treasure>'
      });
  });
