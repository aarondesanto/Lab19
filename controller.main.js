var app = angular.module('myModule');

app.controller('mainController', function($scope, mainSrv) {

  $scope.posts = mainSrv.getPosts();

});
