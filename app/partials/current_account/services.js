'use strict';

angular.module('MyApp.currentAccountServices', [])
.directive('currentAccount', function(){
    return{
        restrict: 'E',
        templateUrl: 'partials/current_account/current-account.html'
    };
})
