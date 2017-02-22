'use strict';

describe('Component: TreasureComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var TreasureComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    TreasureComponent = $componentController('treasure', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
