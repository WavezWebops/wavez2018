'use strict';

(function(){

class EventsComponent {
  constructor() {
    this.events = [{
    	'name': 'RoboOceana',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735143/Wavez2017/events/roboceana.png'
    }, {
    	'name': 'R C Boats',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735141/Wavez2017/events/rcboats.png'
    }, {
    	'name': 'AWC',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735143/Wavez2017/events/awc.png'
    }, {
    	'name': 'Treasure Hunt',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735144/Wavez2017/events/treasure.png'
    }, {
    	'name': 'Kryptx',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735144/Wavez2017/events/kryptx.png'
    }, {
    	'name': 'Free Style Solo',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735147/Wavez2017/events/fss.png'
    }, {
    	'name': 'Wavez Quiz',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1487735141/Wavez2017/events/quiz.png'
    }, {
        'name': 'IDP',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488220720/Wavez2017/events/idp.png'
    }, {
        'name': 'Splash',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488220721/Wavez2017/events/splash.png'
    }, {
        'name': 'Daily Events',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488287164/Wavez2017/events/dailyevents.png'
    }, {
        'name': 'Game Drome',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488287166/Wavez2017/events/gamedrome.png'
    }, {
        'name': 'Open House',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488287165/Wavez2017/events/openhouse.png'
    }, {
        'name': 'ProjectX',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488287166/Wavez2017/events/projectx.png'
    }, {
        'name': 'OTD',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_230/v1488342663/Wavez2017/events/otd.png'
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
