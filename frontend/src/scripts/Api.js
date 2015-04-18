'use strict';

var API_ENDPOINT = '';

var Api = {
  // TODO: get rid of token and hold user information required to login here
  loadNotesFor: function(token, promise) {
    if (promise === undefined) {
      promise = new Promise();
    }
    // TODO: make a real api request
    // TODO: cache via localstorage and then background sync

    promise.resolve(function() {
      return {};
    });
  },

  // TODO: get rid of token and hold user information required to login here
  loadChoreosFor: function(token, promise) {
    if (promise === undefined) {
      promise = new Promise();
    }
    // TODO: make a real api request
    // TODO: cache via localstorage and then background sync

    promise.resolve([{
      name: 'Samba',
      content: []
    }]);
  }
};

module.exports = Api;
