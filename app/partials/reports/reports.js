'use strict';

angular.module('MyApp.reports', [])
.config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state('reports', {
        url: '/reports',
        templateUrl: 'partials/reports/reports.html',
        controller: 'ReportsController'
    })
}])
.controller('ReportsController', ['$scope',
function($scope){

}]);
