var app = angular.module('myModule');

app.directive('posts', function() {
  return {
    restrict: 'E',
    template: '<post class="post" ng-repeat="post in posted" />',
    replace: false
  }
});
