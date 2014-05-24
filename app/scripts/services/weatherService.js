'use strict';

angular.module('weatherApp')
  .factory('weatherService', function ($resource) {

    return {
      getCurrent : function(){

          $resource('http://api.openweathermap.org/data/2.5/weather?q=London,uk', {}, {
            query: {
              method:'GET'
            }
          });

          console.log($resource);

          return {
            icon : '01d',
            temp : '31',
            windSpeed : '5'
          };
        }
    };


  });
