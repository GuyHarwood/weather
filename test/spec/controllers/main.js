'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherApp'));

  var MainCtrl,
    scope;

  var icon = 'icon';
  var title = 'title';
  var description = 'description';

  var weatherService = {
      getCurrent : function(){
          return {
              icon : icon,
              title : title,
              description : description
            };
        }
    };

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $weatherService: weatherService
    });
  }));

  it('should return icon from weather service', function () {
    expect(scope.icon).toBe(icon);
  });

  it('should return title from weather service', function (){
    expect(scope.title).toBe(title);
  });

  it('should return description from weather service', function (){
    expect(scope.description).toBe(description);
  });
});
