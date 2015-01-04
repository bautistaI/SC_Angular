'use strict';

angular.module('MyApp.navigationServices', [])
.directive('globalNavigation', function(){
    return{
        restrict: 'E',
        templateUrl: 'partials/navigation/nav.html'
    };
})
