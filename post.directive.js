var app = angular.module('myModule');

app.directive('post', function() {
  return {
    restrict: 'E',
    templateUrl: 'post.html',
    replace: true
  }
});
