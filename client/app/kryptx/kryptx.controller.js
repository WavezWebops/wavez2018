'use strict';

(function(){

class KryptxComponent {
  constructor(Auth, $http) {
  	this.$http = $http;
  	this.Auth = Auth;
    this.getCurrentUser = Auth.getCurrentUser;
    this.Answer = '';
    this.questions = [{
    	id: 'kryptx1',
    	stmt: '<img src="https://res.cloudinary.com/abinthomasonline/image/upload/v1488491544/Wavez2017/kryptx/1.jpg" width="80%">',
    	answered: false
    }, {
    	id: 'kryptx2',
    	stmt: '<p class="p_content">Which number replaces the question mark?</p><img src="https://res.cloudinary.com/abinthomasonline/image/upload/v1488491545/Wavez2017/kryptx/2.png" width="80%">',
    	answered: false
    }, {
    	id: 'kryptx3',
    	stmt: '<p class="p_content">What is the next letter in this sequence?</p><p class="p_content">J   F   M   A   M   J   ?</p>',
    	answered: false
    }, {
    	id: 'kryptx4',
    	stmt: '<p class="p_content">You are in a “n” storey building. You were given infinite identical balls, when a ball is thrown from particular floor it breaks that is its threshold value. What are the minimum number of throws to obtain the threshold value ?</p>',
    	answered: false
    }, {
    	id: 'kryptx5',
    	stmt: '<img src="https://res.cloudinary.com/abinthomasonline/image/upload/v1488491544/Wavez2017/kryptx/5.jpg" width="80%">',
    	answered: false
    }, {
    	id: 'kryptx6',
    	stmt: '<p class="p_content">Which number replaces the question marks?</p><img src="https://res.cloudinary.com/abinthomasonline/image/upload/v1488491544/Wavez2017/kryptx/6.png" width="80%">',
    	answered: false
    }, {
    	id: 'kryptx7',
    	stmt: '<p class="p_content">Three people are suspected in a murder case of abhilash. Their names are OLIVER, JASON AND ADAM. During the interrogation Jason and adam are seemed to be nervous. However in the last few minutes of his life he was able to make a note. The police found 1 4 9 10 11 numbers on the note. Who is the actual murderer?</p><img src="https://res.cloudinary.com/abinthomasonline/image/upload/v1488491548/Wavez2017/kryptx/7.png" width="80%">',
    	answered: false
    }, {
    	id: 'kryptx8',
    	stmt: '<img src="https://res.cloudinary.com/abinthomasonline/image/upload/v1488491545/Wavez2017/kryptx/8.png" width="80%">',
    	answered: false
    }, {
    	id: 'kryptx9',
    	stmt: '<p class="p_content">You were given a telescope through which you can see the objects in space as far as 100 million light years. Present day you are suddenly mass transported in to space and you are placed at a distance of 70 million light years. What would you see on EARTH with the help of telescope.<br><br>Note: Take that there are no obstacles between you and EARTH.</p>',
    	answered: false
    }, {
    	id: 'kryptx10',
    	stmt: '<img src="https://res.cloudinary.com/abinthomasonline/image/upload/v1488491545/Wavez2017/kryptx/10.png" width="80%">',
    	answered: false
    }, {
    	id: 'kryptx11',
    	stmt: '<p class="p_content">Find the missing number?</p><p class="p_content">0&nbsp;&nbsp;&nbsp;0&nbsp;&nbsp;&nbsp;1&nbsp;&nbsp;&nbsp;2&nbsp;&nbsp;&nbsp;67&nbsp;&nbsp;&nbsp;_&nbsp;&nbsp;&nbsp;27&nbsp;&nbsp;&nbsp;14&nbsp;&nbsp;5</p>',
    	answered: false
    }, {
    	id: 'kryptx12',
    	stmt: '<p class="p_content">Once, in a kingdom a prisoner was proved guilt and he was sentenced to death. The king asked him to give the final statement, in which if he lies his head would be chopped off, if he tells the truth he would be hanged. What would he tell to the king such that he won’t be killed.</p>',
    	answered: false
    }];
  }

  $onInit() {
    this.currentIndex = 0;
    this.rules = true;
  	this.User = this.getCurrentUser();
  	for(var i=0; i<this.User.events.length; ++i) {
  		for(var j=0; j<this.questions.length; ++j) {
  			if(this.User.events[i]==this.questions[j].id) {
  				this.questions[j].answered = true;
  			}
  		}
  	}
  }

  Submit() {
    if(this.Answer != '') {
    	this.$http.post('/api/kryptxs', {
    		id: this.questions[this.currentIndex].id,
    		answer: this.Answer
    	})
      .then(response => {
        this.User.events.push(this.questions[this.currentIndex].id);
        this.questions[this.currentIndex].answered = true;
        this.Answer = '';
      })
      .catch(err => {
        Materialize.toast('Something went wrong!', 2000);
      });
    }
  }
}

angular.module('wavez2017App')
  .component('kryptx', {
    templateUrl: 'app/kryptx/kryptx.html',
    controller: KryptxComponent,
    controllerAs: 'kryptxCtrl'
  });

})();
