'use strict';

var Dispatcher = require('../dispatcher/DanceTrainingCompanionAppDispatcher');
var Constants = require('../Constants');

var LoginActionCreators = {
  login: function(authResponse) {
    Dispatcher.dispatch({
      actionType: Constants.LOGGED_IN,
      userID: authResponse.userID,
      accessToken: authResponse.accessToken
    });
  },
};

module.exports = LoginActionCreators;
