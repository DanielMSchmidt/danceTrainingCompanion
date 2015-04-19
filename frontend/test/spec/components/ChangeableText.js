'use strict';

describe('ChangeableText', function () {
  var React = require('react/addons');
  var ChangeableText, component;

  beforeEach(function () {
    ChangeableText = require('components/ChangeableText.js');
    component = React.createElement(ChangeableText);
  });

  it('should create a new instance of ChangeableText', function () {
    expect(component).toBeDefined();
  });
});
