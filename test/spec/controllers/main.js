'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherApp'));

  var MainCtrl, scope;

  var icon = 'icon';
  var temp = 350;
  var windSpeed = 'windSpeed';

  var weatherService = {
      get : function(callback){
          callback({
              weather : [{
                icon : icon
              }],
              main : {
                temp : temp
              },
              wind : {
                speed : windSpeed
              }
            });
        }
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      weatherService: weatherService
    });
  }));

  it('should return a weather object on the scope', function(){
    expect(scope.weather).toBeDefined();
  });

  it('should return icon from weather service', function () {
    expect(scope.weather.icon).toBe(icon);
  });

  it('should return temperature from weather service', function (){
    expect(scope.weather.temp).toBe(temp);
  });

  it('should return wind speed from weather service', function (){
    expect(scope.weather.windSpeed).toBe(windSpeed);
  });

  it('should convert kelvin temperature to celcius', function(){
    expect(scope.weather.temp).toBe(temp - 273.15);
  });
});
