'use strict';

var Deferred = require('../helpers/Deferred');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DanceTrainingCompanionAppDispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');
var Api = require('../Api');

var _user = {
    id: false
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

  load: function(token) {
    _user.id = token;
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
      UserStore.load(action.token);
      UserStore.emitLogin();
    break;

    default:
      // no op
  }
});

module.exports = UserStore;
