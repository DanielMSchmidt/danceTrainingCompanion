'use strict';

describe('Choreo', function () {
  var React = require('react/addons');
  var Choreo, component;

  beforeEach(function () {
    Choreo = require('components/Choreo.js');
    component = React.createElement(Choreo);
  });

  it('should create a new instance of Choreo', function () {
    expect(component).toBeDefined();
  });
});
