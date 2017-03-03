'use strict';

(function(){

class ContactComponent {
  constructor() {
    this.cores = [{
    	'name': 'Akhil',
    	'department': 'Finance',
    	'mobile': '+91 994 012 3592',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_250/v1487735099/Wavez2017/core/fin.jpg',
    	'mail': 'finance@wavez.co.in'
    }, {
    	'name': 'Shanthi',
    	'department': 'QMS',
    	'mobile': '+91 956 624 2429',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_250/v1487735100/Wavez2017/core/qms.jpg',
    	'mail': 'contact@wavez.co.in'
    }, {
    	'name': 'Tomin',
    	'department': 'Publicity',
    	'mobile': '+91 949 658 8158',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_250/v1487735099/Wavez2017/core/pub.jpg',
    	'mail': 'contact@wavez.co.in'
    }, {
    	'name': 'Anand',
    	'department': 'Sports & Security',
    	'mobile': '+91 897 817 8382',
    	'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_250/v1487735100/Wavez2017/core/sports.jpg',
    	'mail': 'contact@wavez.co.in'
    }, {
        'name': 'Karthik',
        'department': 'FR',
        'mobile': '+91 978 908 8338',
        'url': 'https://res.cloudinary.com/abinthomasonline/image/upload/c_scale,f_auto,q_auto:eco,w_250/v1488531573/Wavez2017/core/fr.jpg',
        'mail': 'contact@wavez.co.in'
    }];
  }
}

angular.module('wavez2017App')
  .component('contact', {
    templateUrl: 'app/contact/contact.html',
    controller: ContactComponent,
    controllerAs: 'contactCtrl'
  });

})();
