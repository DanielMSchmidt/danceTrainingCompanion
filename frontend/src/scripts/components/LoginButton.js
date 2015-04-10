'use strict';

var React = require('react/addons');

require('styles/LoginButton.sass');

var LoginButton = React.createClass({
  propTypes: {
    onLogin: React.PropTypes.func
  },
  login: function() {
    var callback = this.props.onLogin || function() {};

    FB.getLoginStatus(function(response) {
      if (response.status === 'connected') {
        callback(response);
      } else {
        FB.login(function(response) {
          callback(response);
        });
      }
    });
  },
  render: function () {
    return (
        <a onClick={this.login} className='btn-login'>Login with Facebook</a>
      );
  }
});

module.exports = LoginButton;

