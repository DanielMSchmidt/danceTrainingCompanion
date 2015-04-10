'use strict';

var React = require('react/addons');

require('../../styles/LoginScreen.sass');

var LoginScreen = React.createClass({
  render: function () {
    return (
        <div className='login-screen row'>
          <div className='col-xs-2'></div>
          <div className='col-xs-8 lt-center'>
            <h1 className='text-center'>Dance Training Companion</h1>
            <a className='btn-login'>Login with Facebook</a>
          </div>
          <div className='col-xs-2'></div>
        </div>
      );
  }
});

module.exports = LoginScreen;

