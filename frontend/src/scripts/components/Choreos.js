'use strict';

var React = require('react/addons');
var ChoreoStore = require('stores/ChoreoStore');
var ChoreoList = require('components/ChoreoList');
var AddChoreoButton = require('components/AddChoreoButton');

require('styles/Choreos.sass');

var Choreos = React.createClass({
  getInitialState: function() {
    return {
      choreos: []
    };
  },

  componentWillMount: function() {
    ChoreoStore.addChangeListener(this._onChange);
    this.loadChoreos();
  },

  componentWillUnmount: function() {
    ChoreoStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.loadChoreos();
  },

  loadChoreos: function() {
    ChoreoStore.getChoreos().then((res) => {
      this.setState({choreos: res});
    });
  },

  render: function () {
    return (
        <div>
          <AddChoreoButton />
          <ChoreoList content={this.state.choreos} />
        </div>
      );
  }
});

module.exports = Choreos;

