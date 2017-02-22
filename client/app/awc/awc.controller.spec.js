'use strict';

describe('Component: AwcComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var AwcComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AwcComponent = $componentController('awc', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
