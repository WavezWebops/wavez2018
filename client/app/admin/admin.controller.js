'use strict';

(function() {

  class AdminController {
    constructor(User, Auth, $http, $state, $scope) {
      this.users=[];
      console.log($http.get('/api/users/admin'));
      var promise = $http.get('/api/users/admin');
      promise.then(
        function(payload) {
        // this.users = payload.$state;
        // var a = payload;
        var b = payload.data;
        $scope.users = b;
        console.log($scope.users);
      });

      // console.log(this.users);

    }


  }

  angular.module('wavez2017App.admin')
    .controller('AdminController', AdminController);
})();
