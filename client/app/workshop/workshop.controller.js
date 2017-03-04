'use strict';

(function(){

class WorkshopComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.index = 1;
    this.workshops = [{
    	'name': 'Star CCM+',
    	'writeup': null,
    	'rules': ['Registrations open.', 'Registration fee &#8377;300.'],
    	'prize': null,
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'RoboOceana',
    	'writeup': null,
    	'rules': ['Emphasis on picking and shooting mechanisms.', 'Registrations open.', 'Registration fee &#8377;2000.'],
    	'prize': null,
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }];
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
