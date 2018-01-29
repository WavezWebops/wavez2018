'use strict';

(function(){

class EventComponent {
  constructor($stateParams) {
    this.$stateParams = $stateParams;
    this.index = 0;
    this.events = [{
    	'name': 'RoboOceana',
    	'writeup': 'Roboceana is the flagship event of Wavez. The proficiency in handling circuits, motors and manoeuvring is anticipated out of the contestants. The participants’ bots are expected to resist the oncoming waves and stay afloat all through the event. The problem statement would be attention-grabbing with innovative and tough problems. The exciting face-off in a vast pool makes Roboceana, stands as a special attraction.',
    	'rules': ['A team of size 4-5 members can participate.', 'The team members can be from different colleges.', 'Registrations open.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1488334394/Wavez2017/pdf/roboceanaf.pdf" target="_blank">Click Here</a>).'],
    	'prize': 'Prize pool 15k',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}, {
            'name': 'Bhuvan',
            'mobile': '+91 994 049 9788',
            'email': 'events@wavez.co.in'
        }]
    }, {
    	'name': 'R C Boats',
    	'writeup': 'Are you fond of speed? Do you like boats? If your answer is Yes then wait no more. We present to you \'RC Boats\'. RC Boats is one of the flagship events of Wavez in which teams race with each other using Remote Controlled Boats in special arenas. Remote controlled boats offer an adrenaline rush like nothing else. So grab you remotes, gear up an Get Ready to RACE.',
    	'rules': ['Registrations open.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1487821515/Wavez2017/pdf/rcboats.pdf" target="_blank">Click Here</a>).'],
    	'prize': 'Prize pool 12k',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Autonomous Water Craft',
    	'writeup': 'Back again with one of the best opportunity to show your technical and controlling skills and dive into the micro controlling world. Continuing on the culture of wavez,this year again AWC(semi autonomous)event is going to be organised with greater enthusiasm and level of knowledge of Micro controller. As previous year LDR sensor was introduced, this year we are going to make you familiar with two new sensors i.e. sound and ping sensor and motor driver.',
    	'rules': ['Participants have to participate as a couple.', 'They will have to control from either side of bot by whistling at appropriate time and make the balloon burst most as possible in that fixed interval of time.', 'Winner will be decided on the basis of the count of burst balloons', 'Registrations open.', 'Problem Statement Released (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1487821509/Wavez2017/pdf/awc.pdf" target="_blank">Click Here</a>).'],
    	'prize': 'Prize pool 12k',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Treasure Hunt',
    	'writeup': 'This  treasure-hunt set-up is a challenging event with lots of fun and entertainment .You will be given clues from which you find hiding places, and how quick you think your team members will be at catching on.And price money will be awarded for those who won the first, second, third places. Its about a hour play with 10 clues to crack. You are guaranteed to move (a lot), and giggle (a lot!), on a search for clues in a treasure hunt game. Come have fun and enjoy the events.',
    	'rules': ['A team of size 3-6 members can participate.', 'On-Spot Registration.'],
    	'prize': 'Prize pool 4k',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Kryptx',
    	'writeup': 'Kryptx is an online event held before the Wavez fest. Try to open your mind with this event. It is a combination of concealed clues, perplexing puzzles and mind boggling mathematics. There are confusing questions and puzzles. You have to answer the question one by one.',
    	'rules': ['Online Event.', 'Event Completed', 'Solutions (<a href="https://res.cloudinary.com/abinthomasonline/image/upload/v1489290103/Wavez2017/pdf/kryptx.pdf" target="_blank">Click Here</a>).'],
    	'prize': 'Prize pool 3.5k',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Free Style Solo',
    	'writeup': 'Everyone love dancing...... And we the WAVEZ team presents before you a wonderfull event in which you can showcase your talent of dancing..... Guys this is an event in which u can showcase your talent and passion for dance ...So guys come up with your style of dancing..... enjoy while dancing and win the price money !!!!',
    	'rules': ['In the first round every participant will have to perform a prepared routine of maximum 3 minutes. This is an elimination round.', 'Only some participants will proceed to the second round, which is an extempore round. The participant will have to perform for 2 minutes on whatever song the DJ plays, Hip-hop, Bollywood, dubstep or maybe even Tamil mass songs.', 'Registrations open.'],
    	'prize': 'Prize pool 6k',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
    	'name': 'Wavez Quiz',
    	'writeup': 'Wavez quiz is back with a bang. Topics ranging from current affairs,cinema,sports,etc have been covered. So come along with your friends in groups of 3 to share and gain knowledge. Fun guaranteed. Enthu is the only required condition.Do join us. We\'ll make sure you have a good time.',
    	'rules': ['Registrations open.'],
    	'prize': 'Prize pool 3k',
    	'contacts': [{
    		'name': 'Tony Anoop',
    		'mobile': '+91 979 148 3921',
    		'email': 'events@wavez.co.in'
    	}]
    }, {
        'name': 'Industry Defined Problem',
        'writeup': 'It is based on solving a problem related to ocean engineering and naval architecture.it has a great platform to show your uniqueness in solving and presenting.it helps you out in understanding in many tings',
        'rules': ['Registrations open.'],
        'prize': 'Prize pool 2.5k',
        'contacts': [{
            'name': 'Tony Anoop',
            'mobile': '+91 979 148 3921',
            'email': 'events@wavez.co.in'
        }]
    }, {
        'name': 'Splash',
        'writeup': 'Just SPLASH the colours onto paper, let creativity curls the brush not to trash think instantly out of the box,with out any loss transfer your thoughts through your hearts glorify given theme with your team so, this is where you can intensify your day dream colours,WAVEZ 2018 OPEN YOUR IDEAS,HIDE THE MEDIAS!',
        'rules': ['Team must have at least 2 members', 'Time limit 2 hrs', 'No reference is allowed', 'Strict adherence to theme', 'No extra time', 'Materials will be provided and no outside material is allowed ', 'judgement will be decided by CORES', 'Theme will be announced on the day of this event.', 'Registrations open.'],
        'prize': 'Prize pool 2.5k',
        'contacts': [{
            'name': 'Tony Anoop',
            'mobile': '+91 979 148 3921',
            'email': 'events@wavez.co.in'
        }]
    }, {
        'name': 'Daily Events',
        'writeup': '"The ocean is everything i want to be, beautiful, mysterious and wild". Wanna take a break from the wavez??? Come with endless energy as of tides to  our gaming zone awaiting you with games,  fun and other exciting events. So niggas set yourself on fire and put your best to  grab amazing gifts and cash prizes!!!',
        'rules': ['On-Spot Registration.'],
        'prize': 'Wavez goodies',
        'contacts': [{
            'name': 'Tony Anoop',
            'mobile': '+91 979 148 3921',
            'email': 'events@wavez.co.in'
        }]
    }, {
        'name': 'Game Drome',
        'writeup': 'We play video games from our childhood, We from iit madras from department of naval architecture and ocean engineering is going to test your gaming skills through conducting a pc game competition to you on our depart fest on 10 to 12 of this march .not only just a competition it is an challenging event with lots of fun and entertainment.   So, dont miss this opportunity, come and participate and win your price money.',
        'rules': ['This will be a knockout tournament and there will be time slots for each match.', 'Each match will be played between 2 teams having 5 members each side.', 'Contestants will have the choice to form their own teams. Those who cannot manage to find a team will be allotted a team.', 'Each game will have 15 rounds with a maximum time limit of 20 minute per game.', 'If the game isn’t finished within 20 minutes then whoever wins the majority rounds within 20 minutes wins the game.', 'If any team fails to come within 5 minutes of their given time slot then they will be disqualified and the other team will automatically progress to the next round.', 'If any team member fails to come within 5 minutes of his team’s given time slot then the team will have to play without him.', 'Registrations open.'],
        'prize': 'Prize pool 3.5k',
        'contacts': [{
            'name': 'Tony Anoop',
            'mobile': '+91 979 148 3921',
            'email': 'events@wavez.co.in'
        }]
    }, {
        'name': 'Open House',
        'writeup': 'Open House provides invaluable exposure to school students about our field and the on going research in the field of naval architecture.',
        'rules': null,
        'prize': null,
        'contacts': [{
            'name': 'Tony Anoop',
            'mobile': '+91 979 148 3921',
            'email': 'events@wavez.co.in'
        }]
    }, {
        'name': 'ProjectX',
        'writeup': '\'You cannot discover new oceans if you dont have the courage to lose sight of the shore.\'Yes, we are back with projectx-Wavez 2k18. A new problem statement which is goin to tackle your innovative and creative side. Unleash yourself and be there to experience the fun. Only prerequisite required is \'ENTHU\'. The prize is indeed worth putting a fight for. Don\'t miss out on this one.',
        'rules': ['Registrations open.'],
        'prize': 'Prize pool 2.5k',
        'contacts': [{
            'name': 'Tony Anoop',
            'mobile': '+91 979 148 3921',
            'email': 'events@wavez.co.in'
        }]
    }, {
        'name': 'Online T-shirt Design',
        'writeup': 'Online T-shirt Design is a publicity event where the participants are given the task of designing the shirts for Wavez. The creativity of the participants is put to test and the best design is selected to represent Wavez.',
        'rules': ['Sent your design to events@wavez.co.in'],
        'prize': 'Prize pool 2k',
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
