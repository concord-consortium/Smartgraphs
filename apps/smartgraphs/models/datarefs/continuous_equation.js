/*globals Smartgraphs */

sc_require('models/dataref');

/** @class

  @extends Smartgraphs.Dataref
*/
Smartgraphs.ContinuousEquation = Smartgraphs.Dataref.extend(
/** @scope Smartgraphs.ContinuousEquation.prototype */ {

  initialise: function () {
    sc_super();
    this.set('xInterval', this.get('xInterval'));
    this.setDatadefPoints(this.getPoints());
  },

  getExpressionFunction: function () {
    throw "This method must be inherited as it is an abstract method.";
  },

  getInverseExpressionFunction: function () {
    throw "This method must be inherited as it is an abstract method.";
  },

  getPoints: function(xMin, xMax, yMin, yMax) {
    if (yMin == null) {
      yMin = -Infinity;
    }

    if (yMax == null) {
      yMax = Infinity;
    }

    var fn = this.getExpressionFunction();
    var points = [];

    // Why would fn not be defined? And if it wasn't, what should happen?
    if (fn) {
      var xInterval = this.get('xInterval');
      var isContinue = true;

      var fnInverse = this.getInverseExpressionFunction();
      var x, y, xPrev, yPrev;

      for (x = xMin; x <= xMax; x += xInterval) {
        y = fn(x);

        // outside of drawable y?
        if (y < yMin || y > yMax) {
          yPrev = y > yMax ? yMax : yMin;
          xPrev = fnInverse(yPrev);
          if (isContinue) {
            continue;
          }
          break;
        }
        else {
          // bottom clipping:
          if (isContinue && x !== xMin && xPrev !== x) {
            points.push([xPrev, yPrev]);
          }
          isContinue = false;
        }
        // add the data point as normal.
        points.push([x, y]);
      }

      if (x - xInterval !== xMax) {
        // right side clipping:
        if (x > xMax) {
          x = xMax;
          y = fn(x);
          points.push([x, y]);
        }
        // top clipping:
        else {
          points.push([xPrev, yPrev]);
        }
      }

      return points;
    }
  }
});
