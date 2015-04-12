'use strict';
var Deferred = require('../helpers/Deferred');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var DanceTrainingCompanionAppDispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');
var Api = require('../Api');


var _choreos = new Deferred(),
    _loadingStarted = false;

var ChoreoStore = assign({}, EventEmitter.prototype, {
  getChoreos: function() {
    return _choreos.promise;
  },

  isLoading: function() {
    return _loadingStarted;
  },

  load: function(token) {
    _loadingStarted = true;

    Api.loadChoreosFor(token, _choreos);
    _choreos.then(function() {
      _loadingStarted = false;
      // Maybe send an action to display we are done
    });
  }
});

// Register callback to handle all updates
ChoreoStore.dispatchToken = DanceTrainingCompanionAppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.LOGGED_IN:
      ChoreoStore.load(action.token);
    break;

    default:
      // no op
  }
});

module.exports = ChoreoStore;
