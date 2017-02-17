'use strict';

(function(){

class RoboceanaComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('roboceana', {
    templateUrl: 'app/roboceana/roboceana.html',
    controller: RoboceanaComponent,
    controllerAs: 'roboceanaCtrl'
  });

})();
