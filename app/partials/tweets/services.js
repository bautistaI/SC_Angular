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

// FIXME! This directive doesn't quite work. I can see the confirm message but it deletes the keyword instantly
.directive('ngConfirmClick', [
    function(){
        return{
            priority: -1,
            restrict: 'A',
            link: function($scope, $el, $attrs){
                $el.bind('click', function(e){
                    var isConfirm = sweetAlert({
                        title: "Are you sure?",
                        text: "Tweets associated with this keyword would be deleted from your Tweet Stream!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Yes, delete it!",
                        cancelButtonText: "No, cancel plx!",
                        closeOnConfirm: false,
                        closeOnCancel: true
                    },
                    function(){
                        swal("Deleted", "Your keyword has been deleted", "success");
                        e.stopImmediatePropagation();
                        e.preventDefault();
                    });
                });
            }
        }
    }
])
