'use strict';

(function(){

class KryptxComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('kryptx', {
    templateUrl: 'app/kryptx/kryptx.html',
    controller: KryptxComponent,
    controllerAs: 'kryptxCtrl'
  });

})();
