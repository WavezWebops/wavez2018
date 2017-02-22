'use strict';

(function(){

class QuizComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('wavez2017App')
  .component('quiz', {
    templateUrl: 'app/quiz/quiz.html',
    controller: QuizComponent,
    controllerAs: 'quizCtrl'
  });

})();
