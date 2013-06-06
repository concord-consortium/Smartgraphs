/*global beforeEach, afterEach */

window.defineJasmineHelpers = function() {

  beforeEach(function() {
    this.addMatchers({
      toBeA: function(scType) {
        return SC.kindOf(this.actual, scType);
      },

      toContainA: function(scType) {
        var contains = function (array, scType) {
          if (!array) return false;
          var el = array.shift();
          return SC.kindOf(el, scType) || contains(array, scType);
        };
        return contains(this.actual, scType);
      },

      toBeEmpty: function() {
        return typeof this.actual !== 'undefined' && this.actual.get('length') === 0;
      },

      toEqualPairs: function() {
        var i, len, pairs = arguments;

        if ((len = pairs.length) !== this.actual.length) {
          return false;
        }
        for (i = 0; i < len; i++) {
          if (pairs[i].length !== 2 || this.actual[i].length !== 2) {
            return false;
          }
          if (pairs[i][0] !== this.actual[i][0] || pairs[i][1] !== this.actual[i][1]) {
            return false;
          }
        }
        return true;
      }
    });
  });

  window.runBeforeEach = function (fn) {
    beforeEach( function () { SC.run(fn); });
  };

  window.runAfterEach = function (fn) {
    afterEach( function () { SC.run(fn); });
  };
};
