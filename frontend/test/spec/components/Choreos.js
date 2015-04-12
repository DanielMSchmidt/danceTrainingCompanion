'use strict';

describe('Choreos', function () {
  var React = require('react/addons');
  var Choreos, component;

  beforeEach(function () {
    Choreos = require('components/Choreos.js');
    component = React.createElement(Choreos);
  });

  it('should create a new instance of Choreos', function () {
    expect(component).toBeDefined();
  });
});
