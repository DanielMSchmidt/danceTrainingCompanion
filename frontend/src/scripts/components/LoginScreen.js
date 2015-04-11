'use strict';

var React = require('react/addons');
var LoginButton = require('components/LoginButton');
var Api = require('../Api');
var LoginActionCreators = require('actions/LoginActionCreators');

require('../../styles/LoginScreen.sass');

var LoginScreen = React.createClass({
  onLogin: function(token) {
    LoginActionCreators.login(token);
  },
  render: function () {
    return (
        <div className='login-screen row'>
          <div className='col-xs-2'></div>
          <div className='col-xs-8 lt-center'>
            <h1 className='text-center'>Dance Training Companion</h1>
            <LoginButton onLogin={this.onLogin} />
          </div>
          <div className='col-xs-2'></div>
        </div>
      );
  }
});

module.exports = LoginScreen;

