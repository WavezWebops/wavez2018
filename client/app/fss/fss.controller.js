'use strict';

(function(){

class FssComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('fss', {
    templateUrl: 'app/fss/fss.html',
    controller: FssComponent,
    controllerAs: 'fssCtrl'
  });

})();
