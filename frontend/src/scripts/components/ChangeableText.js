'use strict';

var React = require('react/addons');

require('styles/ChangeableText.sass');

var ChangeableText = React.createClass({
  getInitialState: function() {
    return {
      editable: false,
      content: ''
    };
  },

  propTypes: {
    content: React.PropTypes.string.isRequired,
    didChange: React.PropTypes.func
  },

  mixins: [React.addons.LinkedStateMixin],

  componentWillMount: function() {
    this.setState({
      content: this.props.content
    });
  },

  componentDidUpdate: function() {
    if (this.state.editable) {
      React.findDOMNode(this.refs.input).focus();
    }
  },

  edit: function() {
    this.setState({
      editable: true
    });
  },

  finishEdit: function() {
    if (this.props.didChange) {
      this.props.didChange(this.state.content);
    }

    this.setState({editable: false});
  },

  render: function () {
    if (this.state.editable) {
      return (
        <form onSubmit={this.finishEdit}>
          <input ref='input' type='text' valueLink={this.linkState('content')} />
        </form>
      );
    } else {
      return (
        <span onClick={this.edit}>{this.props.content}</span>
      );
    }
  }
});

module.exports = ChangeableText;

