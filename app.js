var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'view1.html',
      controller: 'mainController'
    })
    .otherwise({
      templateUrl: 'view1.html',
      controller: 'mainController'
  });
});
