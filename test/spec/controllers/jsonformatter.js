'use strict';

describe('Controller: JsonformatterCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeApp'));

  var JsonformatterCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JsonformatterCtrl = $controller('JsonformatterCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
