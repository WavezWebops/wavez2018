'use strict';

(function(){

class AwcComponent {
  constructor() {
  }
}

angular.module('wavez2017App')
  .component('awc', {
    templateUrl: 'app/awc/awc.html',
    controller: AwcComponent,
    controllerAs: 'awcCtrl'
  });

})();
