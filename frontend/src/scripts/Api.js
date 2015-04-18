'use strict';

var Deferred = require('./helpers/Deferred');
var Storage = require('./helpers/LocalStorage');

var API_ENDPOINT = '';
var userKey = 'User';
var _user = null;

var Api = {
  getUser: function() {
    if (_user) {
      return _user;
    }

    return Storage.getObject(userKey);
  },

  setUser: function(inputUser, accessToken) {
    var user = inputUser || this.getUser();
    if (user) {
      this.saveUser(user);
      this.enhanceUser();
    } else {
      throw "No user could be set";
    }
  },

  enhanceUser: function() {
    FB.api('/me', function(response) {
        var user = this.getUser();
        user.firstName = response.first_name;
        user.lastName = response.last_name;
        this.saveUser(user);
     }.bind(this));
  },

  saveUser: function(user) {
    // TODO: check for other id to load up additional data
    // TODO: api call?
    _user = user;
    Storage.setObject(userKey, _user);
  },

  loadNotes: function(promise) {
    if (promise === undefined) {
      promise = new Deferred();
    }
    // TODO: make a real api request
    // TODO: cache via localstorage and then background sync

    promise.resolve(function() {
      return {};
    });

    return promise;
  },

  loadChoreos: function(promise) {
    if (promise === undefined) {
      promise = new Deferred();
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
