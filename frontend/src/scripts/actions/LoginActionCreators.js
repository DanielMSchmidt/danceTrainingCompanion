'use strict';

var Dispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');

var LoginActionCreators = {
  login: function(token) {
    Dispatcher.dispatch({
      actionType: Constants.LOGGED_IN,
      token: token
    });
  },
};

module.exports = LoginActionCreators;
