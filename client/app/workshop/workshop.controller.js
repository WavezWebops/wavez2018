'use strict';

(function(){

class WorkshopComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.index = 1;
    this.workshops = [{
    	'name': 'RoboRevolution',
      'writeup': ['Does the "water surface" bore you? Do you have the guts and enthu to discover the deep underwaters? Wavez presents to you an opportunity to witness the future of exploration. Get ready for the ROBO REVOLUTION workshop and competition a chance to make your very own ROV\'s And AUV\'s. So get ready to dive in!!'],
    	// 'rules': ["To be announced"],
    	// 'prize': 'TBA',
    	'contacts': [{
    		'name': 'Deepak Kumar',
    		'mobile': '+91 917 605 0669',
    		'email': 'events@wavez.org'
    	}]
    },
    {
    	'name': 'Web Development Workshop',
      'writeup': ['This workshop on Web Development — will cover HTML, CSS, JavaScript. Learn web designing from basic HTML to advance HTML and add functionality to websites using MongoDB, Express.js, AngularJs and Node.js (MEAN STACK).'],
    	// 'rules': ["To be announced"],
    	// 'prize': 'TBA',
    	'contacts': [{
    		'name': 'Deepak Kumar',
    		'mobile': '+91 917 605 0669',
    		'email': 'events@wavez.org'
    	}]
    },
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
