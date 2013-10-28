'use strict';

describe('Filter: encodeUri', function () {

  // load the filter's module
  beforeEach(module('nodeApp'));

  // initialize a new instance of the filter before each test
  var encodeUri;
  beforeEach(inject(function ($filter) {
    encodeUri = $filter('encodeUri');
  }));

  it('should return the input prefixed with "encodeUri filter:"', function () {
    var text = 'angularjs';
    expect(encodeUri(text)).toBe('encodeUri filter: ' + text);
  });

});
