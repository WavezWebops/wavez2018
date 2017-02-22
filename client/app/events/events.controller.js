'use strict';

(function(){

class EventsComponent {
  constructor() {
    this.events = [{
    	'name': 'RoboOceana',
    	'state': 'roboceana',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735143/Wavez2017/events/roboceana.png'
    }, {
    	'name': 'R C Boats',
    	'state': 'rcboats',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735141/Wavez2017/events/rcboats.png'
    }, {
    	'name': 'AWC',
    	'state': 'awc',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735143/Wavez2017/events/awc.png'
    }, {
    	'name': 'Treasure Hunt',
    	'state': 'treasure',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735144/Wavez2017/events/treasure.png'
    }, {
    	'name': 'Kryptx',
    	'state': 'kryptx',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735144/Wavez2017/events/kryptx.png'
    }, {
    	'name': 'Free Style Solo',
    	'state': 'fss',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735147/Wavez2017/events/fss.png'
    }, {
    	'name': 'Wavez Quiz',
    	'state': 'quiz',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735141/Wavez2017/events/quiz.png'
    }];
  }
}

angular.module('wavez2017App')
  .component('events', {
    templateUrl: 'app/events/events.html',
    controller: EventsComponent,
    controllerAs: 'eventsCtrl'
  });

})();
