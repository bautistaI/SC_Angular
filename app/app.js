'use strict';

angular.module('MyApp', [
  'MyApp.account',
  'MyApp.tweets',
  'MyApp.setup',
  'MyApp.reports',
  'MyApp.campaign',
  'MyApp.tweetServices',
  'MyApp.currentAccountServices',
  'MyApp.navigationServices',
  'ngAnimate',
  'ui.router',
  'xeditable',
  'google.places',
  'angularModalService'])

// add google maps dependency
// 'google-maps'.ns(),


.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider){
	// $urlRouterProvider.otherwise("/")
    

  $stateProvider
		.state('home', {
      url: '/setup',
      templateUrl: 'partials/setup/setup.html'
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
})
