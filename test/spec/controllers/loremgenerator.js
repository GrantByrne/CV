'use strict';

describe('Controller: LoremgeneratorCtrl', function () {

  // load the controller's module
  beforeEach(module('nodeApp'));

  var LoremgeneratorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoremgeneratorCtrl = $controller('LoremgeneratorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
