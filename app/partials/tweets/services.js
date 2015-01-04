'use strict';

angular.module('MyApp.tweetServices', [])
.directive('campaignKeywords', function(){
    return{
        restrict: 'E',
        templateUrl: 'partials/tweets/campaign-keywords.html'
    };
})
.directive('tweetStream', function(){
    return{
        restrict: 'E',
        templateUrl: 'partials/tweets/tweets.html'
    };
})
.directive('tweetTips', function(){
    return{
        restrict: 'E',
        templateUrl: 'partials/tweets/tweet-tips.html',
        link: function($scope, $el, $attrs){
            $('.carousel').carousel({ interval: 5000 });
        }
    }
})
