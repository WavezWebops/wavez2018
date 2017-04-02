'use strict';

(function(){

class ScheduleComponent {
  constructor() {
    this.day1 = [{
    	title: 'Open House',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488287165/Wavez2017/events/openhouse.png',
    	time: '09:00 AM to 10:00 AM',
    	url: '/events/11'
    }, {
    	title: 'Splash',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488220721/Wavez2017/events/splash.png',
    	time: '10:00 AM to 11:00 AM',
    	url: '/events/8'
    }, {
    	title: 'Star CCM+ Workshop',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488603401/Wavez2017/workshops/starccm.png',
    	time: '10:00 AM to 12:30 PM',
    	url: '/workshop/0'
    }, {
    	title: 'R C Boats',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735141/Wavez2017/events/rcboats.png',
    	time: '10:00 AM to 01:00 PM',
    	url: '/events/1'
    }, {
    	title: 'RoboOceana Workshop',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488603401/Wavez2017/workshops/roboceana.png',
    	time: '01:30 PM to 04:30 PM',
    	url: '/workshop/1'
    }, {
    	title: 'Wavez Quiz - Round 1',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735141/Wavez2017/events/quiz.png',
    	time: '02:00 PM to 03:00 PM',
    	url: '/events/6'
    }, {
    	title: 'Game Drome - Day 1',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488287166/Wavez2017/events/gamedrome.png',
    	time: '02:00 PM to 05:00 PM',
    	url: '/events/10'
    }, {
    	title: 'Star CCM+ Workshop',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488603401/Wavez2017/workshops/starccm.png',
    	time: '02:00 PM to 04:00 PM',
    	url: '/workshop/0'
    }, {
    	title: 'Free Style Solo',
    	img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735147/Wavez2017/events/fss.png',
    	time: '03:30 PM to 07:00 PM',
    	url: '/events/5'
    }];

    this.day2 = [{
        title: 'Autonomous Water Craft',
        img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735143/Wavez2017/events/awc.png',
        time: '09:00 AM to 12:00 NOON',
        url: '/events/2'
    }, {
        title: 'Wavez Quiz - Finals',
        img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735141/Wavez2017/events/quiz.png',
        time: '10:00 AM to 11:00 AM',
        url: '/events/6'
    }, {
        title: 'Lecture',
        img: null,
        time: '11:00 AM to 12:00 NOON',
        url: null
    }, {
        title: 'Game Drome - Day 2',
        img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1488287166/Wavez2017/events/gamedrome.png',
        time: '02:30 PM to 05:30 PM',
        url: '/events/10'
    }, {
        title: 'Treasure Hunt',
        img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735144/Wavez2017/events/treasure.png',
        time: '04:00 PM to 06:00 PM',
        url: '/events/3'
    }, {
        title: 'RoboOceana',
        img: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_42/v1487735143/Wavez2017/events/roboceana.png',
        time: '03:00 PM to 06:00 PM',
        url: '/events/0'
    }];
  }
}

angular.module('wavez2017App')
  .component('schedule', {
    templateUrl: 'app/schedule/schedule.html',
    controller: ScheduleComponent,
    controllerAs: 'scheduleCtrl'
  });

})();
