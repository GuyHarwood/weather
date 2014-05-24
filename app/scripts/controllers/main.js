'use strict';

angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, weatherService) {

    var currentWeather = weatherService.getCurrent();
    $scope.icon = currentWeather.icon;
    $scope.temp = currentWeather.temp;
    $scope.windSpeed = currentWeather.windSpeed;

  });
