'use strict';

describe('Component: RoboceanaComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var RoboceanaComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RoboceanaComponent = $componentController('roboceana', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
