'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('awc', {
        url: '/events/awc',
        template: '<awc></awc>'
      });
  });
