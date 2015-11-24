var app = angular.module('myModule');

app.directive('sidebar', function() {
  return {
    restrict: 'E',
    templateUrl: 'sidebar.html',
    replace: true
  }
});
