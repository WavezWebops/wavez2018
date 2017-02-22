'use strict';

class NavbarController {
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
    this.icons = [{
    	'image': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_30/v1487735025/Wavez2017/fb.png',
    	'url': 'https://www.facebook.com/Wavez.iitm'
    }, {
    	'image': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_30/v1487735026/Wavez2017/iitm.png',
    	'url': 'https://www.iitm.ac.in/'
    }, {
    	'image': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_30/v1487735025/Wavez2017/doe.png',
    	'url': 'http://www.doe.iitm.ac.in/'
    }];
    this.events = [{
    	'name': 'RoboOceana',
    	'state': 'roboceana'
    }, {
    	'name': 'R C Boats',
    	'state': 'rcboats'
    }, {
    	'name': 'AWC',
    	'state': 'awc'
    }, {
    	'name': 'Treasure Hunt',
    	'state': 'treasure'
    }, {
    	'name': 'Kryptx',
    	'state': 'kryptx'
    }, {
    	'name': 'Free Style Solo',
    	'state': 'fss'
    }, {
    	'name': 'Wavez Quiz',
    	'state': 'quiz'
    }];
  }

}

angular.module('wavez2017App')
  .controller('NavbarController', NavbarController);
