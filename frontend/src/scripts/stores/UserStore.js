'use strict';

var Deferred = require('../helpers/Deferred');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DanceTrainingCompanionAppDispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');
var Api = require('../Api');

var localStorageKey = 'DanceTrainingCompanionAppUserID';
var _user = {
    id: localStorage.getItem(localStorageKey)
};

var UserStore = assign({}, EventEmitter.prototype, {
  getUserId: function() {
    return _user.id;
  },

  isLoggedIn: function() {
    return !!_user.id;
  },

  emitLogin: function() {
    this.emit(Constants.LOGIN_EVENT);
  },

  load: function(authResponse) {
    _user.id = authResponse.userID;
    localStorage.setItem(localStorageKey, _user.id);
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
