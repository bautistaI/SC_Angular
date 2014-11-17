'use strict';

angular.module('MyApp.tweets', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state('tweets', {
    url: '/tweets',
    templateUrl: 'partials/tweets/tweet-stream.html',
    controller: 'TweetsCtrl'
  });
}])
.controller('TweetsCtrl', ['$scope',
  function($scope){
    $scope.keywords = [
      {
        text: 'coffee'
      },
      {
        text: 'latte'
      }
    ];

    $scope.getRandom = function(){
      return Math.floor(Math.random() * (1000 - 1)) + 10;
    };

    $scope.addKeyword = function () {
      $scope.keywords.push({text:$scope.formKeywordText});
      $scope.formKeywordText = '';
    };
}]);
