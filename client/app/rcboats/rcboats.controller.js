'use strict';

(function(){

class RcboatsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('rcboats', {
    templateUrl: 'app/rcboats/rcboats.html',
    controller: RcboatsComponent,
    controllerAs: 'rcboatsCtrl'
  });

})();
