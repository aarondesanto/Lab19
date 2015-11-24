var app = angular.module('myModule');

app.directive('logo', function() {
  return {
    restrict: 'E',
    template: '<img class="head-img" src="http://placehold.it/150x150" />',
    replace: true
  }
});
