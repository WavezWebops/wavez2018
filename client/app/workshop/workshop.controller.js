'use strict';

(function(){

class WorkshopComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.index = 1;
    this.workshops = [{
    	'name': 'RoboRevolution',
      'writeup': 'Does the "water surface" bore you? Do you have the guts and enthu to discover the deep underwaters? Wavez presents to you an opportunity to witness the future of exploration. Get ready for the ROBO REVOLUTION workshop and competition a chance to make your very own ROV\'s And AUV\'s. So get ready to dive in!!',
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
