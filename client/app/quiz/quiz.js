'use strict';

angular.module('wavez2017App')
  .config(function ($stateProvider) {
    $stateProvider
      .state('quiz', {
        url: '/events/quiz',
        template: '<quiz></quiz>'
      });
  });
