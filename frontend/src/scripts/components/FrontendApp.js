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
var PureRenderMixin = React.addons.PureRenderMixin;
var RouteHandler = Router.RouteHandler;
var RouteLocation = Router.HashLocation;

// CSS
require('normalize.css');
require('../../styles/main.css');
require('../../styles/layout.sass');
require('../../../node_modules/bootstrap/dist/css/bootstrap.css');

var FrontendApp = React.createClass({
  getInitialState: function() {
    return {loggedIn: false};
  },

  componentDidMount: function() {
    UserStore.addLoginListener(this._onLogin);
  },

  componentWillUnmount: function() {
    UserStore.removeLoginListener(this._onLogin);
  },
  _onLogin: function() {
    this.setState({loggedIn: true});
  },
  mixins: [PureRenderMixin],
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
        <Header username='Frank Underwood' />
        <ReactTransitionGroup transitionName='fade'>
          <RouteHandler />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = FrontendApp;
