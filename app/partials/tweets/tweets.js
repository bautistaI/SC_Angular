'use strict';

angular.module('MyApp.tweets', ['ui.router'])
.config(['$stateProvider', function($stateProvider){
  $stateProvider
  .state('tweets', {
    url: '/tweets',
    templateUrl: 'partials/tweets/stream.html',
    controller: 'TweetsCtrl'
  })
}])
.controller('TweetsCtrl', ['$scope', 'ModalService',
  function($scope, ModalService){
    // FIXME! for some reason when I use ng-include the tooltips won't work. I have to bring the code inside the stream.html for the controller to kick in :(
    $(function(){
        $('[data-toggle="tooltip"]').tooltip()
    })

// ========= SWEET TOOTH KEYWORD INTERACTION ===============

    // Deletes the keyword sweet tooth and the Tweet
    $scope.delSweet = function(){
      if($scope.Sweet === true){
        $scope.Sweet = false;
        $scope.isSweetActive = false;
      }else{
        $scope.Sweet = true;
        $scope.isSweetActive = true;
        $scope.deleteSweetTooth = true;
      }
    };
    // Toggles visibility of keyword sweet tooth
    $scope.hideSweet = function(){
      if($scope.Sweet === true){
        $scope.Sweet = false;
        $scope.isSweetActive = false;
      }else{
        $scope.Sweet = true;
        $scope.isSweetActive = true;
      }
    };

// ========= CUPCAKE KEYWORD INTERACTION ===============
    
    // Deletes the keyword cupcake and the Tweet
    $scope.delCupcake = function(){
      if($scope.Cupcake === true){
        $scope.Cupcake = false;
        $scope.isCupcake = false;
      }else{
        $scope.Cupcake = true;
        $scope.isCupcake = true;
        $scope.deleteCupcake = true;
      }
    };

    // Toggles visibility of keyword cupcake
    $scope.hideCupcake = function(){
      if($scope.Cupcake === true){
        $scope.Cupcake = false;
        $scope.isCupcake = false;
      }else{
        $scope.Cupcake = true;
        $scope.isCupcake = true;
      }
    };

// ========= CAKE KEYWORD INTERACTION ==================
  
    // Deletes the keyword cake and the Tweet
     $scope.delCake = function(){
      if($scope.Cake === true){
        $scope.Cake = false;
        $scope.isCake = false;
      }else{
        $scope.Cake = true;
        $scope.isCake = true;
        $scope.deleteCake = true;
      }
    };

    // Toggles visibility of keyword cake
    $scope.hideCake = function(){
      if($scope.Cake === true){
        $scope.Cake = false;
        $scope.isCake = false;
      }else{
        $scope.Cake = true;
        $scope.isCake = true;
      }
    };

// ========= COOKIE KEYWORD INTERACTION ==================
    
    // Deletes the keyword cookie and the Tweet
    $scope.delCookie = function(){
      if($scope.Cookie === true){
        $scope.Cookie = false;
        $scope.isCookie = false;
      }else{
        $scope.Cookie = true;
        $scope.isCookie = true;
        $scope.deleteCookie = true;
      }
    };

    // Toggles visibility of keyword cookie
    $scope.hideCookie = function(){
      if($scope.Cookie === true){
        $scope.Cookie = false;
        $scope.isCookie = false;
      }else{
        $scope.Cookie = true;
        $scope.isCookie = true;
      }
    };



}]);
