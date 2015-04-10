'use strict';

describe('LoginButton', function () {
  var React = require('react/addons');
  var LoginButton, component;

  beforeEach(function () {
    LoginButton = require('components/LoginButton.js');
    component = React.createElement(LoginButton);
  });

  it('should create a new instance of LoginButton', function () {
    expect(component).toBeDefined();
  });
});
