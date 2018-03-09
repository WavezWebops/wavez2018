'use strict';

(function(){

class EventComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.index = 0;
    this.events = [{
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
    // {
    // 	'name': 'RoboOceana',
    // 	'writeup': 'Roboceana is the flagship event of Wavez. The proficiency in handling circuits, motors and manoeuvring is anticipated out of the contestants. The participants’ bots are expected to resist the oncoming waves and stay afloat all through the event. The problem statement would be attention-grabbing with innovative and tough problems. The exciting face-off in a vast pool makes Roboceana, stands as a special attraction.',
    // 	'rules': ['A team of size 4-5 members can participate.', 'The team members can be from different colleges.', 'Registrations open.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1488334394/Wavez2017/pdf/roboceanaf.pdf" target="_blank">Click Here</a>).'],
    // 	'prize': 'Prize pool 15k',
    // 	'contacts': [{
    // 		'name': 'Tony Anoop',
    // 		'mobile': '+91 979 148 3921',
    // 		'email': 'events@wavez.org'
    // 	}, {
    //         'name': 'Bhuvan',
    //         'mobile': '+91 994 049 9788',
    //         'email': 'events@wavez.org'
    //     }]
    // },
    {
    	'name': 'R C Boats',
    	'writeup': '"Work like a captain, Play like a pirate." Are u a person who thrives on the thrill that only speed and passion provides? Are you skilled enough to do built your race boat? This year WAVES 2K18 brings you a chance to satisfy your speed thirst and to feel the experience, thrill, desire and passion towards RC Boat Racing. All you need to do is just gear up with your wireless remote controlled boats and compete against the best racers. Stay afloat, stay fast and stand above all as you maneuver your RC Boat through the challenging arena. Come participate and quench your thirst for victory with the Crown of WAVES 2K18. We await for your arrival.',
    	//'rules': ['Registrations open.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1487821515/Wavez2017/pdf/rcboats.pdf" target="_blank">Click Here</a>).'],
      'rules':['TBA'],
      'prize': 'TBA',
      'contacts': [{
    		'name': 'Deepak Kumar',
    		'mobile': '+91 917 605 0669',
    		'email': 'events@wavez.org'
    	}]
    },
    //{
    // 	'name': 'Autonomous Water Craft',
    // 	'writeup': 'Back again with one of the best opportunity to show your technical and controlling skills and dive into the micro controlling world. Continuing on the culture of wavez,this year again AWC(semi autonomous)event is going to be organised with greater enthusiasm and level of knowledge of Micro controller. As previous year LDR sensor was introduced, this year we are going to make you familiar with two new sensors i.e. sound and ping sensor and motor driver.',
    // 	'rules': ['Participants have to participate as a couple.', 'They will have to control from either side of bot by whistling at appropriate time and make the balloon burst most as possible in that fixed interval of time.', 'Winner will be decided on the basis of the count of burst balloons', 'Registrations open.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1487821509/Wavez2017/pdf/awc.pdf" target="_blank">Click Here</a>).'],
    // 	'prize': 'Prize pool 12k',
    // 	'contacts': [{
    // 		'name': 'Tony Anoop',
    // 		'mobile': '+91 979 148 3921',
    // 		'email': 'events@wavez.org'
    // 	}]
    // },
    {
    	'name': 'Investigation Case',
    	'writeup': 'Have u ever imagine yourselves in the boots of sherlock holmes? How better are you in solving crime mysteries? Does the spy stories and thrilling tv serials mesmerize you? Then what are you waiting for wear a detective hat and come join us. Solve the INVESTIGATION CASE at WAVEZ. We are looking for a detective like you and only you.',
    	//'rules': ['A team of size 3-6 members can participate.', 'On-Spot Registration.'],
      'rules': ['TBA'],
      'prize': 'TBA',
      'contacts': [{
    		'name': 'Deepak Kumar',
    		'mobile': '+91 917 605 0669',
    		'email': 'events@wavez.org'
    	}]
    },
    {
    	'name': 'Kryptx',
    	'writeup': 'Kryptx is an online event held before the Wavez fest. Try to open your mind with this event. It is a combination of concealed clues, perplexing puzzles and mind boggling mathematics. There are confusing questions and puzzles. You have to answer the question one by one.',
    	'rules': ['Online Event.'],
    	'prize': 'TBA',
      'contacts': [{
    		'name': 'Deepak Kumar',
    		'mobile': '+91 917 605 0669',
    		'email': 'events@wavez.org'
    	}]
    },
    // {
    // 	'name': 'Free Style Solo',
    // 	'writeup': 'Everyone love dancing...... And we the WAVEZ team presents before you a wonderfull event in which you can showcase your talent of dancing..... Guys this is an event in which u can showcase your talent and passion for dance ...So guys come up with your style of dancing..... enjoy while dancing and win the price money !!!!',
    // 	'rules': ['In the first round every participant will have to perform a prepared routine of maximum 3 minutes. This is an elimination round.', 'Only some participants will proceed to the second round, which is an extempore round. The participant will have to perform for 2 minutes on whatever song the DJ plays, Hip-hop, Bollywood, dubstep or maybe even Tamil mass songs.', 'Registrations open.'],
    // 	'prize': 'Prize pool 6k',
    // 	'contacts': [{
    // 		'name': 'Tony Anoop',
    // 		'mobile': '+91 979 148 3921',
    // 		'email': 'events@wavez.org'
    // 	}]
    // },
    {
    	'name': 'Quizathon',
    	'writeup': "Do you have what it takes to be a greatest quiz competent ever was and ever will be? Because, we're looking for enthusiastic young individuals to compete in a marathon of quizzes at QUIZATHON at WAVEZ. And the greatest question everyone stumbling upon is 'Who's got the best' and we believe that you're the UNBEATABLE!!",
    	'rules': ['Registrations open.'],
    	'prize': 'TBA',
      'contacts': [{
    		'name': 'Deepak Kumar',
    		'mobile': '+91 917 605 0669',
    		'email': 'events@wavez.org'
    	}]
    },
    //{
    //     'name': 'Industry Defined Problem',
    //     'writeup': 'It is based on solving a problem related to ocean engineering and naval architecture.it has a great platform to show your uniqueness in solving and presenting.it helps you out in understanding in many tings',
    //     'rules': ['Registrations open.'],
    //     'prize': 'Prize pool 2.5k',
    //     'contacts': [{
    //         'name': 'Tony Anoop',
    //         'mobile': '+91 979 148 3921',
    //         'email': 'events@wavez.org'
    //     }]
    // },
    {
        'name': 'Splash',
        'writeup': 'Just SPLASH the colours onto paper, let creativity curls the brush not to trash think instantly out of the box,with out any loss transfer your thoughts through your hearts glorify given theme with your team so, this is where you can intensify your day dream colours,WAVEZ 2018 OPEN YOUR IDEAS,HIDE THE MEDIAS!',
        'rules': ['Team must have at least 2 members', 'Time limit 2 hrs', 'No reference is allowed', 'Strict adherence to theme', 'No extra time', 'Materials will be provided and no outside material is allowed ', 'judgement will be decided by CORES', 'Theme will be announced on the day of this event.', 'Registrations open.'],
        'prize': 'Prize pool 2.5k',
        'contacts': [{
      		'name': 'Deepak Kumar',
      		'mobile': '+91 917 605 0669',
      		'email': 'events@wavez.org'
      	}]
    }, {
        'name': 'Daily Events',
        'writeup': 'Is all work and no play making your life dull? For those who are exhausted by the intense workshops and competitions WAVAZ gives you an opportunity to take a chillpill and get transported to your childhood. Join us and enjoy to your hearts content with a variety of games designed for you.',
        'rules': ['On-Spot Registration.'],
        'prize': 'Wavez goodies',
        'contacts': [{
      		'name': 'Deepak Kumar',
      		'mobile': '+91 917 605 0669',
      		'email': 'events@wavez.org'
      	}]
    }, {
        'name': 'Game Drome',
        'writeup': 'To all the game swag putters, its your chance to putdown the opponent and announce your presence. Come join us as we give you the thrill to battle with other like minded people for the PRIDE of gamers. Get ready to clash with the titans as WAVEZ  brings to you the one and only  GAMEDROME.',
        'rules': ['This will be a knockout tournament and there will be time slots for each match.', 'Each match will be played between 2 teams having 5 members each side.', 'Contestants will have the choice to form their own teams. Those who cannot manage to find a team will be allotted a team.', 'Each game will have 15 rounds with a maximum time limit of 20 minute per game.', 'If the game isn’t finished within 20 minutes then whoever wins the majority rounds within 20 minutes wins the game.', 'If any team fails to come within 5 minutes of their given time slot then they will be disqualified and the other team will automatically progress to the next round.', 'If any team member fails to come within 5 minutes of his team’s given time slot then the team will have to play without him.', 'Registrations open.'],
        'prize': 'Prize pool 3.5k',
        'contacts': [{
      		'name': 'Deepak Kumar',
      		'mobile': '+91 917 605 0669',
      		'email': 'events@wavez.org'
      	}]
    },
    //{
    //     'name': 'Open House',
    //     'writeup': 'Open House provides invaluable exposure to school students about our field and the on going research in the field of naval architecture.',
    //     'rules': null,
    //     'prize': null,
    //     'contacts': [{
    //         'name': 'Tony Anoop',
    //         'mobile': '+91 979 148 3921',
    //         'email': 'events@wavez.org'
    //     }]
    // }, {
    //     'name': 'ProjectX',
    //     'writeup': '\'You cannot discover new oceans if you dont have the courage to lose sight of the shore.\'Yes, we are back with projectx-Wavez 2k18. A new problem statement which is goin to tackle your innovative and creative side. Unleash yourself and be there to experience the fun. Only prerequisite required is \'ENTHU\'. The prize is indeed worth putting a fight for. Don\'t miss out on this one.',
    //     'rules': ['Registrations open.'],
    //     'prize': 'Prize pool 2.5k',
    //     'contacts': [{
    //         'name': 'Tony Anoop',
    //         'mobile': '+91 979 148 3921',
    //         'email': 'events@wavez.org'
    //     }]
    // },
    {
        'name': 'Online T-shirt Design',
        'writeup': 'Online T-shirt Design is a publicity event where the participants are given the task of designing the shirts for Wavez. The creativity of the participants is put to test and the best design is selected to represent Wavez.',
        'rules': ['Sent your design to events@wavez.org'],
        'prize': 'TBA',
        'contacts': [{
      		'name': 'Deepak Kumar',
      		'mobile': '+91 917 605 0669',
      		'email': 'events@wavez.org'
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
