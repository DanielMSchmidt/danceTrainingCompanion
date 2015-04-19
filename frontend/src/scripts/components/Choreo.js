'use strict';

var React = require('react/addons');
var Button = require('react-bootstrap').Button;
var ChangeableText = require('components/ChangeableText');
var ChoreoStore = require('stores/ChoreoStore');

require('styles/Choreo.sass');

var Choreo = React.createClass({
  propTypes: {
    content: React.PropTypes.shape({
      id: React.PropTypes.number.isRequired,
      name: React.PropTypes.string.isRequired,
      content: React.PropTypes.array.isRequired
    }).isRequired
  },

  delete: function() {
    console.log('I would have been deleted');
  },

  changeName: function(newName) {
    var choreo = this.props.content;
    choreo.name = newName;

    ChoreoStore.update(choreo);
  },

  render: function () {
    return (
        <div className='Choreo'>
          <h3><ChangeableText content={this.props.content.name} didChange={this.changeName} /></h3>
          <Button className='Choreo-delete' bsStyle='danger' onClick={this.delete}>Löschen</Button>
        </div>
      );
  }
});

module.exports = Choreo;

