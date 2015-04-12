'use strict';

var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var FrontendApp = require('./FrontendApp');
var Notes = require('./Notes');
var Choreos = require('./Choreos');
var LatestActivity = require('./LatestActivity');

var content = document.getElementById('content');

var Routes = (
  <Route name="app" path="/" handler={FrontendApp}>
    <Route name="notes" handler={Notes}/>
    <Route name="choreos" handler={Choreos}/>
    <DefaultRoute handler={LatestActivity} />
  </Route>
);

Router.run(Routes, Router.HashLocation, function (Handler) {
  React.render(<Handler/>, content);
});
