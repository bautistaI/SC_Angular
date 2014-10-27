'use strict';

angular.module('MyApp', [
  'MyApp.account',
  'MyApp.tweets',  
  'ngAnimate', 
  'ui.router',
  'xeditable'])

.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider){
	// $urlRouterProvider.otherwise("/")

  $stateProvider
		.state('home', {
      url: '/tweets',
      templateUrl: 'views/tweets/tweet-stream.html'
    })
}])

.run(function($rootScope, $location, $timeout) {
  $rootScope.$on('$routeChangeError', function() {
    $location.path("/error");
  });
  $rootScope.$on('$routeChangeStart', function() {
    $rootScope.isLoading = true;
  });
  $rootScope.$on('$routeChangeSuccess', function() {
    $timeout(function() {
      $rootScope.isLoading = false;
    }, 1000);
  });
});
