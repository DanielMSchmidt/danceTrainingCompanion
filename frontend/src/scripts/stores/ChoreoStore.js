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
  add: function(choreo) {
    // Adds a new choreography
    // only add after loading is done
    _choreos.promise.then((oldChoreos) => {
      var newChoreos = oldChoreos;
      newChoreos.push(choreo);
      _choreos = new Deferred();
      _choreos.resolve(newChoreos);
      this.emitChange();
    });
  },

  getChoreos: function() {
    if (!_loadingStarted) {
      ChoreoStore.load();
    }
    return _choreos.promise;
  },

  isLoading: function() {
    return _loadingStarted;
  },

  load: function() {
    _loadingStarted = true;

    Api.loadChoreos(_choreos);
    _choreos.promise.then(function() {
      // Maybe send an action to display we are done
    });
  },

  emitChange: function() {
    this.emit(Constants.CHOREO_CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function(callback) {
    this.on(Constants.CHOREO_CHANGE_EVENT, callback);
  },

  /**
   * @param {function} callback
   */
  removeChangeListener: function(callback) {
    this.removeListener(Constants.CHOREO_CHANGE_EVENT, callback);
  }
});

// Register callback to handle all updates
ChoreoStore.dispatchToken = DanceTrainingCompanionAppDispatcher.register(function(action) {
  switch(action.actionType) {
    case Constants.LOGGED_IN:
      ChoreoStore.load();
    break;

    default:
      // no op
  }
});

module.exports = ChoreoStore;
