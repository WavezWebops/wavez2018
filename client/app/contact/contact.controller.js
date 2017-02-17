'use strict';

(function(){

class ContactComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'contactCtrl'
  });

})();
