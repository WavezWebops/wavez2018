'use strict';

(function(){

class TreasureComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('treasure', {
    templateUrl: 'app/treasure/treasure.html',
    controller: TreasureComponent,
    controllerAs: 'treasureCtrl'
  });

})();
