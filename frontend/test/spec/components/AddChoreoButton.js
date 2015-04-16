'use strict';

describe('AddChoreoButton', function () {
  var React = require('react/addons');
  var AddChoreoButton, component;

  beforeEach(function () {
    AddChoreoButton = require('components/AddChoreoButton.js');
    component = React.createElement(AddChoreoButton);
  });

  it('should create a new instance of AddChoreoButton', function () {
    expect(component).toBeDefined();
  });
});
