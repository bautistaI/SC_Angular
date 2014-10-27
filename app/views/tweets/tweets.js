'use strict';

angular.module('MyApp.tweets', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
	$stateProvider
	.state('tweets', {
      url: '/tweets',
      templateUrl: 'views/tweets/tweet-stream.html',
      controller: 'TweetsCtrl'
    })
}])
.controller('TweetsCtrl', ['$scope', 
	function($scope){
		
}]);