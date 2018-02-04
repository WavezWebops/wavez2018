'use strict';

(function(){

class WorkshopsComponent {
  constructor() {
    this.workshops = [{
    	'name': 'RoboRevolution',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488603401/Wavez2017/workshops/starccm.png'
    },
    // {
    // 	'name': 'Star CCM+',
    // 	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488603401/Wavez2017/workshops/starccm.png'
    // }, {
    // 	'name': 'RoboOceana',
    // 	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488603401/Wavez2017/workshops/roboceana.png'
    // }
  ];
  }
}

angular.module('wavez2017App')
  .component('workshops', {
    templateUrl: 'app/workshops/workshops.html',
    controller: WorkshopsComponent,
    controllerAs: 'workshopsCtrl'
  });

})();
