'use strict';

var React = require('react/addons');

require('../../styles/LoginScreen.sass');

var LoginScreen = React.createClass({
  render: function () {
    return (
        <div className='lt-center lt-contained login-screen'>
          <h1>Dance Training Companion</h1>
          <a className='btn-login'>Login with Facebook</a>
        </div>
      );
  }
});

module.exports = LoginScreen;

