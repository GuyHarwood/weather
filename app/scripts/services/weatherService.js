'use strict';

angular.module('weatherApp')
  .factory('weatherService', function () {

    return {
      getCurrent : function(){
          //var res = $resource('http://api.openweathermap.org/data/2.5/weather?q=London,uk');
          //console.log(res);
          return {
            icon : '01d',
            temp : '31',
            windSpeed : '5'
          };
        }
    };


  });
