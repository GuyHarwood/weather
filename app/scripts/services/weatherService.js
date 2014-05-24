'use strict';

angular.module('weatherApp')
  .factory('weatherService', function () {

    return {
      getCurrent : function(){

          return {
            icon : '01d',
            temp : '31',
            windSpeed : '5'
          };
        }
    };


  });
