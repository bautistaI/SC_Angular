'use strict';

angular.module('MyApp.setup', ['ui.router'])
.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('setup', {
			url: '/setup',
			templateUrl: 'partials/setup/setup.html',
			controller: 'SetupCtrl'
		})
		.state('setup.details', {
			url: '/details',
			templateUrl: 'partials/setup/setup.details.html',
			controller: 'DetailsCtrl'
		})
		.state('setup.campaign', {
			url: '/campaign',
			templateUrl: 'partials/setup/setup.campaign.html',
			controller: 'CampaignCtrl'
		})
		.state('setup.urlexternal', {
			url: '/campaign/urlexternal',
			templateUrl: 'partials/setup/setup.urlexternal.html',
			controller: 'UrlCtrl'
		})
		.state('setup.incentive', {
			url: '/incentive',
			templateUrl: 'partials/setup/setup.incentive.html',
			controller: 'SetupCtrl'
		})
		.state('setup.review', {
			url: '/review',
			templateUrl: 'partials/setup/setup.review.html',
			controller: 'SetupCtrl'
		})
}])
.controller('SetupCtrl', ['$scope', '$stateParams', '$location', 
	function($scope, $stateParams, $location){
		
}])
.controller('DetailsCtrl', ['$scope', 
	function($scope){
		
}])
.controller('CampaignCtrl', ['$scope', 
	function($scope){
		
}])

.controller('UrlCtrl', ['$scope', 'ModalService',
	function($scope, ModalService){

		$(function(){
  			$('[data-toggle="tooltip"]').tooltip()
		})

		$scope.miles = [
			{distance: "5 Miles"},
			{distance: "10 Miles"},
			{distance: "20 Miles"}
		];
		// FIXME! switch between kilometers data and miles based on selection
		$scope.kilometer = [
			{distance: "5 Kilometers"},
			{distance: "10 Kilometers"},
			{distance: "20 Kilometers"}
		];


		// ====== Location Add City ===================

		$scope.cities = [];


		$scope.removeCity = function(index){
			$scope.cities.splice(index, 1);
		}


		$scope.addCity = function() {

			var found = $scope.cities.reduce(function(previous, i)
			{
			
			$scope.duplicateCity = false;

			if ($scope.city === i) return true;
			  	return previous;
			}, false);
				if (found){
				$scope.duplicateCity = true;
			}
			else{
				$scope.cities.push($scope.city);
				$scope.city = '';
				$scope.duplicateCity = false;
			}
	    }



	    // ======= Campaign Specific Keywords ==============

	    $scope.keywords = [];

	    $scope.removeKeyword = function(index){
			$scope.keywords.splice(index, 1);
		}

		$scope.addKeyword = function() {

			var found = $scope.keywords.reduce(function(previous, i)
			{
			
			$scope.duplicateKeyword = false;

			if ($scope.keyword === i) return true;
			  	return previous;
			}, false);
				if (found){
				$scope.duplicateKeyword = true;
			}
			else{
				$scope.keywords.push($scope.keyword);
				$scope.keyword = '';
				$scope.duplicateKeyword = false;
			}
	    }


	    // ======= Campaign Restricted Keywords ==============

	    $scope.restrictKeywords = [];

	    $scope.removeRestrictKeyword = function(index){
			$scope.restrictKeywords.splice(index, 1);
		}

		$scope.addRestrictKeyword = function() {

			var found = $scope.restrictKeywords.reduce(function(previous, i)
			{
			
			$scope.duplicateRestrictKeyword = false;

			if ($scope.restricted === i) return true;
			  	return previous;
			}, false);
				if (found){
				$scope.duplicateRestrictKeyword = true;
			}
			else{
				$scope.restrictKeywords.push($scope.restricted);
				$scope.restricted = '';
				$scope.duplicateRestrictKeyword = false;
			}
	    }



}])