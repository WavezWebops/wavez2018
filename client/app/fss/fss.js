'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('fss', {
        url: '/events/fss',
        template: '<fss></fss>'
      });
  });
