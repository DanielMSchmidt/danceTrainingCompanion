'use strict';

describe('ChoreoList', function () {
  var React = require('react/addons');
  var ChoreoList, component;

  beforeEach(function () {
    ChoreoList = require('components/ChoreoList.js');
    component = React.createElement(ChoreoList);
  });

  it('should create a new instance of ChoreoList', function () {
    expect(component).toBeDefined();
  });
});
