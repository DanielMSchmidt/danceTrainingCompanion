'use strict';

var Deferred = require('../helpers/Deferred');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DanceTrainingCompanionAppDispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');
var Api = require('../Api');

var _notes = new Deferred(),
    _loadingStarted = false;

var NotesStore = assign({}, EventEmitter.prototype, {
  getNotes: function() {
    return _notes.promise;
  },

  isLoading: function() {
    return _loadingStarted;
  },

  load: function() {
    _loadingStarted = true;

    // Later on
    // _loadingStarted = flase;
    // Maybe send an action to display we are done
  }
});

// Register callback to handle all updates
NotesStore.dispatchToken = DanceTrainingCompanionAppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.LOGGED_IN:
      NotesStore.load(action.token);
    break;

    default:
      // no op
  }
});

module.exports = NotesStore;
