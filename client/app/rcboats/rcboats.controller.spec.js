'use strict';

describe('Component: RcboatsComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var RcboatsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RcboatsComponent = $componentController('rcboats', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
