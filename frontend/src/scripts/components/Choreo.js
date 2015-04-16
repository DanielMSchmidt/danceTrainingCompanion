'use strict';

var React = require('react/addons');

require('styles/Choreo.sass');

var Choreo = React.createClass({
  propTypes: {
    content: React.PropTypes.shape({
      name: React.PropTypes.string.isRequired,
      content: React.PropTypes.array.isRequired
    }).isRequired
  },

  render: function () {
    return (
        <div>
          <h3>{this.props.content.name}</h3>
        </div>
      );
  }
});

module.exports = Choreo;

