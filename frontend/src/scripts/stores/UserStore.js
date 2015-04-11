'use strict';

var Deferred = require('../helpers/Deferred');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DanceTrainingCompanionAppDispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');
var Api = require('../Api');

var choreoDeferred = new Deferred(),
    notesDeferred = new Deferred();

var _user = {
    id: false,
    choreos: choreoDeferred,
    notes: notesDeferred
};

var UserStore = assign({}, EventEmitter.prototype, {
  getState: function() {
    return assign({}, _user); // copy dat user
  },

  isLoggedIn: function() {
    return !!_user.id;
  },

  emitLogin: function() {
    this.emit(Constants.LOGIN_EVENT);
  },

  loadUser: function(token) {
    _user.id = token;
    Api.loadNotesFor(token, _user.notes);
    Api.loadChoreosFor(token, _user.choreos);
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
DanceTrainingCompanionAppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.LOGGED_IN:
      UserStore.loadUser(action.token);
      UserStore.emitLogin();
    break;

    default:
      // no op
  }
});

module.exports = UserStore;
