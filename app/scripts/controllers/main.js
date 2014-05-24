'use strict';

angular.module('weatherApp')
  .controller('MainCtrl', function ($scope, $weatherService) {

    var currentWeather = $weatherService.getCurrent();
    $scope.icon = currentWeather.icon;
    $scope.title = currentWeather.title;
    $scope.description = currentWeather.description;

  });
