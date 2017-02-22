'use strict';

describe('Component: FssComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var FssComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    FssComponent = $componentController('fss', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
