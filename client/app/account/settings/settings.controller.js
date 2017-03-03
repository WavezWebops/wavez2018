'use strict';

class SettingsController {
  constructor(Auth, $http, $state) {
    this.$state = $state;
    this.$http = $http;
    this.Auth = Auth;
    this.getCurrentUser = Auth.getCurrentUser;
    this.events = [{
      id: 'roboceana',
      name: 'Roboceana',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735143/Wavez2017/events/roboceana.png',
      instructions: ['Go through the rules carefully.', '<strong>Only Team leader have to register.</strong>', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'rcboats',
      name: 'R C Boats',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735141/Wavez2017/events/rcboats.png',
      instructions: ['Go through the rules carefully.', '<strong>Only Team leader have to register.</strong>', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'awc',
      name: 'AWC',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735143/Wavez2017/events/awc.png',
      instructions: ['Go through the rules carefully.', '<strong>Only Team leader have to register.</strong>', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'fss',
      name: 'Free Style',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735147/Wavez2017/events/fss.png',
      instructions: ['Go through the rules carefully.', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'quiz',
      name: 'Wavez Quiz',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1487735141/Wavez2017/events/quiz.png',
      instructions: ['Go through the rules carefully.', '<strong>Only Team leader have to register.</strong>', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'idp',
      name: 'IDP',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488220720/Wavez2017/events/idp.png',
      instructions: ['Go through the rules carefully.', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'splash',
      name: 'Splash',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488220721/Wavez2017/events/splash.png',
      instructions: ['Go through the rules carefully.', '<strong>Only Team leader have to register.</strong>', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'gamedrome',
      name: 'Game Drome',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488287166/Wavez2017/events/gamedrome.png',
      instructions: ['Go through the rules carefully.', 'Our team will contact you upon confirmation.'],
      active: false
    }, {
      id: 'projectx',
      name: 'ProjectX',
      url: 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_40/v1488287166/Wavez2017/events/projectx.png',
      instructions: ['Go through the rules carefully.', 'Our team will contact you upon confirmation.'],
      active: false
    }];
    this.User = this.getCurrentUser();
    this.Init();
    
  }

  Eregister(event) {
    this.$http.post('/api/registrations', {
      event: event.id
    })
    .then(response => {
      this.User.events.push(event.id);
      Materialize.toast('Registration Successful!', 2000);
      this.Init();
    })
    .catch(err => {
      Materialize.toast('Something went wrong!', 2000);
    });
  }

  Init() {
    this.User = this.getCurrentUser();
    for(var i=0; i<this.User.events.length; ++i) {
      for(var j=0; j<this.events.length; ++j) {
        if(this.User.events[i]==this.events[j].id) 
          this.events[j].active = true;
      }
    }
  }
}

angular.module('wavez2017App')
  .controller('SettingsController', SettingsController);
