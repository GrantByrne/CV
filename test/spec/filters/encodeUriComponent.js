'use strict';

describe('Filter: encodeUriComponent', function () {

  // load the filter's module
  beforeEach(module('nodeApp'));

  // initialize a new instance of the filter before each test
  var encodeUriComponent;
  beforeEach(inject(function ($filter) {
    encodeUriComponent = $filter('encodeUriComponent');
  }));

  it('should return the input prefixed with "encodeUriComponent filter:"', function () {
    var text = 'angularjs';
    expect(encodeUriComponent(text)).toBe('encodeUriComponent filter: ' + text);
  });

});
