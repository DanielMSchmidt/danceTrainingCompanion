'use strict';

describe('LoginScreen', function () {
  var React = require('react/addons');
  var LoginScreen, component;

  beforeEach(function () {
    LoginScreen = require('components/LoginScreen.js');
    component = React.createElement(LoginScreen);
  });

  it('should create a new instance of LoginScreen', function () {
    expect(component).toBeDefined();
  });
});
