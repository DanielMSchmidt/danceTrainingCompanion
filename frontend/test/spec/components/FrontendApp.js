'use strict';

describe('Main', function () {
  var React = require('react/addons');
  var FrontendApp, component;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    FrontendApp = require('components/FrontendApp.js');
    component = React.createElement(FrontendApp);
  });

  it('should create a new instance of FrontendApp', function () {
    expect(component).toBeDefined();
  });
});
