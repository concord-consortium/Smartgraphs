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

      // Optionally accepts { epsilon: <some number> } as first arg. A pair is considered to match
      // the target pair if both elements of the pair are within epsilon of the corresponding
      // elements of the target pair.
      toEqualPairs: function() {
        var i, len, pairs, epsilon;

        if (arguments[0].epsilon != null) {
          epsilon = arguments[0].epsilon;
          pairs = Array.prototype.slice.call(arguments, 1);
        } else {
          epsilon = 0;
          pairs = arguments;
        }

        if ((len = pairs.length) !== this.actual.length) {
          return false;
        }
        for (i = 0; i < len; i++) {
          if (pairs[i].length !== 2 || this.actual[i].length !== 2) {
            return false;
          }
          if (Math.abs(pairs[i][0] - this.actual[i][0]) > epsilon || Math.abs(pairs[i][1] - this.actual[i][1]) > epsilon) {
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
