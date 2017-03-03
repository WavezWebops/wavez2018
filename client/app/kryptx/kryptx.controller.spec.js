'use strict';

describe('Component: KryptxComponent', function () {

  // load the controller's module
  beforeEach(module('wavez2017App'));

  var KryptxComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    KryptxComponent = $componentController('kryptx', {});
  }));

  it('should ...', function () {
    expect(1).to.equal(1);
  });
});
