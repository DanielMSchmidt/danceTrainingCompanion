'use strict';

var React = require('react/addons');
var Router = require('react-router');
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

require('styles/Header.sass');

var Header = React.createClass({

  render: function () {
    return (
        <div>
          <header>
            <ul>
              <li><Link to="notes">Notes</Link></li>
              <li><Link to="choreos">Choreos</Link></li>
            </ul>
            Logged in as {this.props.username}
          </header>
        </div>
      );
  }
});

module.exports = Header;

