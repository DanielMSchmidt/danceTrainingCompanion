'use strict';

var API_ENDPOINT = '';

var Api = {
  loadNotesFor: function(token, promise) {
    if (promise === undefined) {
      promise = new Promise();
    }
    // TODO: make a real api request

    promise.resolve(function() {
      return {};
    });
  },

  loadChoreosFor: function(token, promise) {
    if (promise === undefined) {
      promise = new Promise();
    }
    // TODO: make a real api request

    promise.resolve([{
      name: 'Samba',
      content: []
    }]);
  }
};

module.exports = Api;
