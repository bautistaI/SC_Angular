'use strict';

angular.module('MyApp', ['ngRoute', 'ngAnimate'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'views/tweets/tweet-stream.html'
		})
		.when('/campaign', {
			templateUrl: 'views/campaign/campaign.html'
		})
		.when('/reporting', {
			templateUrl: 'views/reporting/reporting.html'
		})
		.when('/contact', {
			templateUrl: 'views/contact/contact.html'
		})
		.when('/help', {
			templateUrl: 'views/help/help.html'
		})
		.when('/account', {
			templateUrl: 'views/account/account.html'
		})
		.when('/logout', {
			templateUrl: 'views/logout/logout.html'
		})
		.otherwise({
			redirectTo: '/'
		});
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
