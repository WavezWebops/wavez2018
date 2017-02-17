'use strict';

class NavbarController {
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  }

}

angular.module('wavez2017App')
  .controller('NavbarController', NavbarController);
