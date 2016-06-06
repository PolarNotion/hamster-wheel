(function ($) {
  module('jQuery#hamsterWheel', {
    setup: function () {
      this.elems = $('#qunit-fixture').children();
    }
  });

  test('is chainable', function () {
    expect(1);
    strictEqual(this.elems.hamsterWheel(), this.elems, 'should be chainable');
  });

  test('is hamsterWheel', function () {
    expect(1);
    strictEqual(this.elems.hamsterWheel().text(), 'hamsterWheel0hamsterWheel1hamsterWheel2', 'should be hamsterWheel');
  });

}(jQuery));
