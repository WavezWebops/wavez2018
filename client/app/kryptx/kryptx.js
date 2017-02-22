'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kryptx', {
        url: '/events/kryptx',
        template: '<kryptx></kryptx>'
      });
  });
