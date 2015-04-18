'use strict';
require('es6-promise').polyfill();

var React  = require('react/addons');
var assign = require('object-assign');
var Router = require('react-router');

var LoginScreen = require('./LoginScreen');
var Header      = require('./Header');
var UserStore   = require('stores/UserStore');
var ChoreoStore = require('stores/ChoreoStore');
var NotesStore  = require('stores/NotesStore');

var ReactTransitionGroup = React.addons.TransitionGroup;
var RouteHandler = Router.RouteHandler;
var RouteLocation = Router.HashLocation;

// CSS
require('normalize.css');
require('../../styles/main.css');
require('../../styles/layout.sass');
require('node/bootstrap/dist/css/bootstrap.css');
require('bower/font-awesome/css/font-awesome.css');
require('bower/bootstrap-social/bootstrap-social.css');

// JS
window.jQuery = require('../../../node_modules/jquery/dist/jquery.js');
require('../../../node_modules/bootstrap/js/collapse.js');

var FrontendApp = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: UserStore.isLoggedIn(),
      username: {
        first: UserStore.getUser().firstName,
        last: UserStore.getUser().lastName
      }
    };
  },

  componentDidMount: function() {
    UserStore.addLoginListener(this._onLogin);
  },

  componentWillUnmount: function() {
    UserStore.removeLoginListener(this._onLogin);
  },

  _onLogin: function() {
    this.setState({
      loggedIn: true,
      username: {
        first: UserStore.getUser().first,
        last: UserStore.getUser().last
      }
    });
  },

  render: function() {
    if (!this.state.loggedIn) {
      return (
        <div className='main'>
          <LoginScreen />
        </div>
      );
    }

    return (
      <div className='main'>
        <Header username={this.state.username.first + ' ' + this.state.username.last} />
        <div className='navbar-spaced container'>
          <ReactTransitionGroup transitionName='fade'>
            <RouteHandler />
          </ReactTransitionGroup>
        </div>
      </div>
    );
  }
});

module.exports = FrontendApp;
