var app = angular.module('myModule');

app.directive('posts', function() {
  return {
    restrict: 'E',
    template: '<post ng-repeat="post in posts" />',
    replace: true
  }
});
