'use strict';
var Dispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');

var LoginCompletedActionCreators = {
  loginCompleted: function() {
    Dispatcher.dispatch({
      actionType: Constants.LOG_IN_COMPLETED,
    });
  },
}

module.exports = LoginCompletedActionCreators;
