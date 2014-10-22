'use strict';

angular.module('MyApp.account', ['ngRoute', 'ngAnimate'])
.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/account-settings', {
			templateUrl: 'views/account/account-settings.html',
			resolve: {
	      delay: function($q, $timeout) {
	        var delay = $q.defer();
	        $timeout(delay.resolve, 1000);
	        return delay.promise;
	      }
	    }
		})
		.when('/billing-information', {
			templateUrl: 'views/account/billing-information.html'
		})
		.when('/email-settings', {
			templateUrl: 'views/account/email-settings.html'
		})
		.when('/error', {
			templateUrl: '<p>Error page not found</p>'
		});
}])
.controller('AccountCtrl', ['$scope', 
	function($scope){
		
}]);