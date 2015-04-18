'use strict';

var Deferred = require('../helpers/Deferred');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DanceTrainingCompanionAppDispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');
var Api = require('../Api');

var UserStore = assign({}, EventEmitter.prototype, {
  getUserId: function() {
    var user = Api.getUser();

    return user ? user.id : false;
  },

  getUser: function() {
    return Api.getUser() || {};
  },

  isLoggedIn: function() {
    var user = Api.getUser();

    return user ? !!user.id : false;
  },

  emitLogin: function() {
    this.emit(Constants.LOGIN_EVENT);
  },

  load: function(authResponse) {
    Api.setUser({id: authResponse.userID});
  },

  /**
   * @param {function} callback
   */
  addLoginListener: function(callback) {
    this.on(Constants.LOGIN_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeLoginListener: function(callback) {
    this.removeListener(Constants.LOGIN_EVENT, callback);
  }
});

// Register callback to handle all updates
UserStore.dispatchToken = DanceTrainingCompanionAppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.LOGGED_IN:
      UserStore.load(action);
      UserStore.emitLogin();
    break;

    default:
      // no op
  }
});

module.exports = UserStore;
