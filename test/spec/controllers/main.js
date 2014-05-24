'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherApp'));

  var MainCtrl, scope;

  var icon = 'icon';
  var temp = 'temp';
  var windSpeed = 'windSpeed';

  var weatherService = {
      getCurrent : function(){
          return {
              icon : icon,
              temp : temp,
              windSpeed : windSpeed
            };
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

  it('should return icon from weather service', function () {
    expect(scope.icon).toBe(icon);
  });

  it('should return temperature from weather service', function (){
    expect(scope.temp).toBe(temp);
  });

  it('should return wind speed from weather service', function (){
    expect(scope.windSpeed).toBe(windSpeed);
  });
});
