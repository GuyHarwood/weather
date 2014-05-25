'use strict';

angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, weatherService) {

    $scope.weather = {};

    weatherService.get(function(data) {

      $scope.weather.icon = data.weather[0].icon;
      $scope.weather.temp = (data.main.temp - 273.15).toFixed(2);
      $scope.weather.windSpeed = data.wind.speed;

    });
  });
