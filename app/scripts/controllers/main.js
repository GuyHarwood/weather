'use strict';

angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, weatherService) {

    var currentWeather = weatherService.getCurrent();
    $scope.icon = currentWeather.icon;
    $scope.temp = currentWeather.temp;
    $scope.windSpeed = currentWeather.windSpeed;

  });

// angular.module('weatherApp')
//   .controller('MainCtrl', function ($scope) {
//
//     //var currentWeather = weatherService.getCurrent();
//     $scope.icon = '01d';
//     $scope.temp = '31';
//     $scope.windSpeed = '5';
//
//   });
