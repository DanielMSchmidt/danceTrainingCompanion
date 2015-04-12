'use strict';

describe('NotesStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/NotesStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
