/* global FB, fetch */
'use strict';

var Deferred = require('./helpers/Deferred');
var Storage = require('./helpers/LocalStorage');
var LoginCompletedActionCreators = require('actions/LoginCompletedActionCreators');

require('../../bower_components/fetch/fetch');

var API_ENDPOINT = 'http://127.0.0.1:3000';
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
    fetch(`${API_ENDPOINT}/user`, {
      method: 'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        facebook_id: user.id
      })
    }).then(function() {
      LoginCompletedActionCreators.loginCompleted();
    }, function() {
      throw "Server nicht erreichbar";
    });

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
      id: 1,
      name: 'Samba',
      content: []
    }]);
  }
};

module.exports = Api;
