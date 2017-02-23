'use strict';

(function(){

class EventComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.events = [{
    	'name': 'RoboOceana',
    	'writeup': 'Roboceana is the flagship event of Wavez. The proficiency in handling circuits, motors and manoeuvring is anticipated out of the contestants. The participants’ bots are expected to resist the oncoming waves and stay afloat all through the event. The problem statement would be attention-grabbing with innovative and tough problems. The exciting face-off in a vast pool makes Roboceana, stands as a special attraction.',
    	'rules': ['A team of maximum 6 members can participate.', 'The team members can be from different colleges.', 'Registrations will start soon.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1487821509/Wavez2017/pdf/roboceana.pdf" target="_blank">Click Here</a>).'],
    	'prize': 'Coming Soon.',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'R C Boats',
    	'writeup': 'Are you fond of speed? Do you like boats? If your answer is Yes then wait no more. We present to you \'RC Boats\'. RC Boats is one of the flagship events of Wavez in which teams race with each other using Remote Controlled Boats in special arenas. Remote controlled boats offer an adrenaline rush like nothing else. So grab you remotes, gear up an Get Ready to RACE.',
    	'rules': ['Registrations will start soon.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1487821515/Wavez2017/pdf/rcboats.pdf" target="_blank">Click Here</a>).'],
    	'prize': 'Coming Soon.',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Autonomous Water Craft',
    	'writeup': 'One of the best oppurtunity to look inside the present semi autonomus world consisting of sensors in and as fishingbot theworkshop will  be there giving opprtunity to work on aurdino,sound sensor and many more stuff.a fishing compititon will be there checkingcontrol apptitude having wining prize. be there to show what technical andd controlling skill you have got.',
    	'rules': ['A team of size 2-6 members can participate.', 'Team members can be from different colleges.', 'Registrations will start soon.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1487821509/Wavez2017/pdf/awc.pdf" target="_blank">Click Here</a>).'],
    	'prize': 'Coming Soon.',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Treasure Hunt',
    	'writeup': 'This  treasure-hunt set-up is a challenging event with lots of fun and entertainment .You will be given clues from which you find hiding places, and how quick you think your team members will be at catching on.And price money will be awarded for those who won the first, second, third places. Its about a hour play with 10 clues to crack. You are guaranteed to move (a lot), and giggle (a lot!), on a search for clues in a treasure hunt game. Come have fun and enjoy the events.',
    	'rules': ['A team of size 3-6 members can participate.', 'On-Spot Registration.'],
    	'prize': 'Coming Soon.',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Kryptx',
    	'writeup': 'Kryptx is an online event held before the Wavez fest. Try to open your mind with this event. It is a combination of concealed clues, perplexing puzzles and mind boggling mathematics. There are confusing questions and puzzles. You have to answer the question one by one.',
    	'rules': ['Online Event.', 'Starting soon.'],
    	'prize': 'Coming Soon.',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Free Style Solo',
    	'writeup': 'Everyone love dancing...... And we the WAVEZ team presents before you a wonderfull event in which you can showcase your talent of dancing..... Guys this is an event in which u can showcase your talent and passion for dance ...So guys come up with your style of dancing..... enjoy while dancing and win the price money !!!!',
    	'rules': ['Solo Event.', 'Registrations will start soon.'],
    	'prize': 'Coming Soon.',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Wavez Quiz',
    	'writeup': 'Wavez Quiz is one of the event in WAVEZ fest which is organised by department of ocean engineering, IIT Madras. This year Wavez quiz is coming with most interesting questions from different aspects like sports, movies, politics, general knowledge, science and technology etc. Through this event you can know new things that happened around you in this world. So, let us know how much do you know in this world by answering our questions..',
    	'rules': ['Registrations will start soon.'],
    	'prize': 'Coming Soon.',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }];
    this.event = {};
  }
  $onInit() {
  	this.event = this.events[this.$stateParams.id];
  }
}

angular.module('wavez2017App')
  .component('event', {
    templateUrl: 'app/event/event.html',
    controller: EventComponent,
    controllerAs: 'eventCtrl'
  });

})();
