'use strict';

var React = require('react/addons');
var ChoreoStore = require('stores/ChoreoStore');
var Choreo = require('components/Choreo');
var AddChoreoButton = require('components/AddChoreoButton');

require('styles/Choreos.sass');

var Choreos = React.createClass({
  getInitialState: function() {
    return {
      items: []
    };
  },

  componentDidMount: function() {
    ChoreoStore.addChangeListener(this._onChange);
    ChoreoStore.getChoreos().then((res) => {
      this.setState({items: res});
    });
  },

  componentWillUnmount: function() {
    ChoreoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    debugger;
  },

  render: function () {
    return (
        <div>
          <AddChoreoButton />
          <div className="choreoList">
            {this.state.items.map(function(item){
              return <Choreo content={item} />;
            })}
          </div>
        </div>
      );
  }
});

module.exports = Choreos;

