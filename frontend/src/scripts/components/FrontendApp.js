'use strict';

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;
var PureRenderMixin = React.addons.PureRenderMixin;
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// CSS
require('normalize.css');
require('../../styles/main.css');
require('../../styles/layout.sass');

var imageURL = require('../../images/yeoman.png');

var FrontendApp = React.createClass({
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
