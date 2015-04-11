'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DanceTrainingCompanionAppDispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');

var _user = {
    loggedIn: false,
    userId: false,
    choreos: {},
    notes: {}
};

var UserStore = assign({}, EventEmitter.prototype, {
  getState: function() {
    return assign({}, _user); // copy dat user
  },

  emitChange: function() {
    this.emit(Constants.CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(Constants.CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
DanceTrainingCompanionAppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.LOGGED_IN:
      debugger
    break;



    default:
      // no op
  }
});

module.exports = UserStore;
