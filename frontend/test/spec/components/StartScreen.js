'use strict';

describe('StartScreen', function () {
  var React = require('react/addons');
  var StartScreen, component;

  beforeEach(function () {
    StartScreen = require('components/StartScreen.js');
    component = React.createElement(StartScreen);
  });

  it('should create a new instance of StartScreen', function () {
    expect(component).toBeDefined();
  });
});
