'use strict';

describe('ChoreoStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/ChoreoStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
