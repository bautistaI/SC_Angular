'use strict';

angular.module('MyApp.account', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
	$stateProvider
  	.state('account', {
      url: '/account',
      templateUrl: 'partials/account/account.html',
      controller: 'AccountController'
    })
    .state('account.settings', {
    	url: '/settings',
    	templateUrl: 'partials/account/account.settings.html',
    	controller: 'SettingsController'
    })
    .state('account.billing', {
      url: '/billing',
      templateUrl: 'partials/account/account.billing.html',
      controller: 'BillingController'
    })
    .state('account.email', {
      url: '/email',
      templateUrl: 'partials/account/account.email.html',
      controller: 'EmailController'
    })
}])
.controller('AccountController', ['$scope', '$stateParams',
	function($scope, $stateParams, $locale){
    $scope.account = {
      phone: "111-111-1111",
      address: "111 North Pole, Al 76065",
      email: "johnDoe@yahoo.com",
      password: "*********"
    }
}])
.controller('SettingsController', ['$scope', '$stateParams',
  function($scope, $stateParams){
    $scope.cancel = function(){
      $scope.signUp = true;
      $scope.paymentCreditCard = false;
    }
    $scope.signUp = function(){
      $scope.signUp = false;
      $scope.paymentCreditCard = true;
    }

    $scope.submit = function(){


      // $scope.paymentForm = false;
      // $scope.paymentCreditCard = false;
      // $scope.paymentReceived = true;
      // Messenger.options = {
      //   extraClasses: 'messenger-fixed messenger-on-bottom messenger-on-right'
      // }
      // Messenger().post({
      //   message: 'Your payment was successfully processed',
      //   type: 'success'
      // });
    }
  }
])
.controller('BillingController', ['$scope', '$stateParams',
  function($scope, $stateParams){

  }
])
.controller('EmailController', ['$scope', '$stateParams',
  function($scope, $stateParams){

  }
])
.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});
