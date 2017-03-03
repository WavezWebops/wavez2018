'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('kryptx', {
        url: '/kryptx',
        template: '<kryptx></kryptx>',
    	authenticate: true
      });
  });
