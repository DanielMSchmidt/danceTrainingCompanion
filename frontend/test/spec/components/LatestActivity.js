'use strict';

describe('LatestActivity', function () {
  var React = require('react/addons');
  var LatestActivity, component;

  beforeEach(function () {
    LatestActivity = require('components/LatestActivity.js');
    component = React.createElement(LatestActivity);
  });

  it('should create a new instance of LatestActivity', function () {
    expect(component).toBeDefined();
  });
});
