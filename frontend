'use strict';

var FrontendApp = require('./FrontendApp');
var LoginScreen = require('./LoginScreen');
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var content = document.getElementById('content');

var Routes = (
  <Route name="app" path="/" handler={FrontendApp}>
    <DefaultRoute handler={LoginScreen}/>
  </Route>
);

Router.run(Routes, function (Handler) {
  React.render(<Handler/>, content);
});
