'use strict';

angular.module('MyApp.campaign', [])
.config(['$stateProvider', function($stateProvider){
    $stateProvider
    .state('campaign', {
        url: '/campaign',
        templateUrl: 'partials/campaign/campaign.html',
        controller: 'CampaignController'
    })
}])
.controller('CampaignController', ['$scope',
function($scope){

}]);
