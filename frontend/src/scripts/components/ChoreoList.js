'use strict';

var React = require('react/addons');
var Choreo = require('components/Choreo');

require('styles/ChoreoList.sass');

var ChoreoList = React.createClass({

  render: function () {
    return (
        <div className="choreoList">
          {this.props.content.map(function(choreo){
            return <Choreo content={choreo} />;
          })}
        </div>
      );
  }
});

module.exports = ChoreoList;

