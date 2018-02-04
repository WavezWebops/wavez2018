'use strict';

(function(){

class WorkshopComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.index = 1;
    this.workshops = [{
    	'name': 'RoboRevolution',
    	'writeup': "Enough of living outside water. Its time we explore and see what's inside water. Did you find under water vehicle intresting? What if you get a chance to make your own AUV! Presenting ROBOREVOLUTION WORKSHOP AND COMPETITION, first time this event is happening in Wavez which includes both manual robotics as well as automation.",
    	'rules': ["To be announced"],
    	'prize': 'TBA',
    	'contacts': [{
    		'name': 'Deepak Kumar',
    		'mobile': '+91 917 605 0669',
    		'email': 'events@wavez.org'
    	}]
    },
    //   {
    // 	'name': 'Star CCM+',
    // 	'writeup': null,
    // 	'rules': ['Registrations open.', 'Registration fee &#8377;300.'],
    // 	'prize': null,
    // 	'contacts': [{
    // 		'name': 'Tony Anoop',
    // 		'mobile': '+91 979 148 3921',
    // 		'email': 'events@wavez.co.in'
    // 	}]
    // }, {
    // 	'name': 'RoboOceana',
    // 	'writeup': null,
    // 	'rules': ['Emphasis on picking mechanisms.', 'Registrations open.', 'Registration fee &#8377;2000 per team (Kit will be provided).', 'A team can have maximum 5 members.'],
    // 	'prize': null,
    // 	'contacts': [{
    // 		'name': 'Tony Anoop',
    // 		'mobile': '+91 979 148 3921',
    // 		'email': 'events@wavez.co.in'
    // 	}]
    // }
  ];
    this.workshop = {};
  }

  $onInit() {
  	this.workshop = this.workshops[this.$stateParams.id];
  }
}

angular.module('wavez2017App')
  .component('workshop', {
    templateUrl: 'app/workshop/workshop.html',
    controller: WorkshopComponent,
    controllerAs: 'workshopCtrl'
  });

})();
