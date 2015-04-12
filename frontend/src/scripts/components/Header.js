'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

require('styles/Header.sass');

var Header = React.createClass({

  render: function () {
    return (
      <header>
        <nav className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Dance Training Companion</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li><Link to="notes">Notes</Link></li>
                <li><Link to="choreos">Choreos</Link></li>
              </ul>
              <span className="header-login-notice">Logged in as {this.props.username}</span>
            </div>
          </div>
        </nav>
      </header>
      );
  }
});

module.exports = Header;

