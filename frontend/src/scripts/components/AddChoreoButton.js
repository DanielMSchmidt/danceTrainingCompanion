'use strict';

var React = require('react/addons');
var ChoreoStore = require('stores/ChoreoStore');

require('styles/AddChoreoButton.sass');

var AddChoreoButton = React.createClass({
  addChoreo: function(e) {
    e.preventDefault();
    var node = React.findDOMNode(this.refs.newChoreo),
        choreoName = node.value.trim();

    node.value = '';
    ChoreoStore.add({name: choreoName, content: []});
  },

  render: function () {
    return (
      <div className='row'>
        <div className='col-lg-12'>
          <div className='input-group'>
            <form onSubmit={this.addChoreo}>
              <input type='text' className='form-control' placeholder='Neue Choreographie?' ref='newChoreo' />
            </form>
            <span className='input-group-btn'>
              <button className='btn btn-default' type='button' onClick={this.addChoreo}>Hinzufügen!</button>
            </span>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = AddChoreoButton;

