'use strict';

angular.module('weatherApp')
  .factory('weatherService', function ($resource) {

    return $resource('http://api.openweathermap.org/data/2.5/weather?q=London,uk', {});

  });
