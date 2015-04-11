'use strict';

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
    UserStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    UserStore.removeChangeListener(this._onChange);
  },
  _onChange: function(payload) {
    console.info('Something changed I guess: ', payload);
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
