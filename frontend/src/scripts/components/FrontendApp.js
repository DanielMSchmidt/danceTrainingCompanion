'use strict';
require('es6-promise').polyfill();

var React = require('react/addons');
var assign = require('object-assign');
var Router = require('react-router');

var UserStore = require('stores/UserStore');

var ReactTransitionGroup = React.addons.TransitionGroup;
var PureRenderMixin = React.addons.PureRenderMixin;
var RouteHandler = Router.RouteHandler;

// CSS
require('normalize.css');
require('../../styles/main.css');
require('../../styles/layout.sass');
require('../../../node_modules/bootstrap/dist/css/bootstrap.css');

var FrontendApp = React.createClass({
  getInitialState: function() {
    return assign({}, UserStore.getState());
  },

  componentDidMount: function() {
    UserStore.addLoginListener(this._onLogin);
  },

  componentWillUnmount: function() {
    UserStore.removeLoginListener(this._onLogin);
  },
  _onLogin: function() {
    console.info('The user logged in, so redirect him');
    debugger
    // vvv Use this vvv
    // https://github.com/rackt/react-router/blob/master/docs/api/Location.md
  },
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div className='main'>
        <ReactTransitionGroup transitionName='fade'>
          <RouteHandler />
        </ReactTransitionGroup>
      </div>
    );
  }
});

module.exports = FrontendApp;
