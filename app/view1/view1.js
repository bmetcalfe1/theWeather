'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [function($http, $scope) {
  $scope.weather = {};

  $http({
    method: 'JSONP',
    url: 'api.openweathermap.org/data/2.5/forecast?q={Montreal},{CA}'
  })
  .then(function successCallback(response) {
    console.log(response);
    $scope.weather = response;
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      return response;
  });
}]);
