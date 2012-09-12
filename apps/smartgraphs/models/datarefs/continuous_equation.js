/*globals Smartgraphs */

sc_require('models/dataref');

/** @class

  The ContinuousEquation data definition class defines a dataset that is described by an unordered set of (x,y)
  pairs.

  @extends Smartgraphs.Dataref
*/
Smartgraphs.ContinuousEquation = Smartgraphs.Dataref.extend(
/** @scope Smartgraphs.ContinuousEquation.prototype */ {

  initialise: function () {
    sc_super();
    this.set('stepInterval', this.get('xInterval'));
    this.populatePoints();
  },

  getExpressionFunction: function () {
    throw "This method must be inherited as it is an abstract method.";
  },
  
  getInverseExpressionFunction: function () {
    throw "This method must be inherited as it is an abstract method.";
  },

  populatePoints: function () {
    var fn = this.getExpressionFunction();
    if (fn) {
      var stepInterval = this.get('stepInterval');
      var graphBounds = this.get('graphBounds');
      var isContinue = true;
      var datarefPoints = this.get('points');
      var x, y, xPrev, yPrev;
      for (x = graphBounds.xMin; x <= graphBounds.xMax; x += stepInterval) {
        y = fn(x);
        if (y <= graphBounds.yMin || y >= graphBounds.yMax) {
          yPrev = y >= graphBounds.yMax ? graphBounds.yMax : graphBounds.yMin;
          var fnInverse = this.getInverseExpressionFunction();
          xPrev = fnInverse(yPrev);
          if (isContinue) {
            continue;
          }
          break;
        }
        else {
          if (isContinue && x !== graphBounds.xMin) {
            datarefPoints.pushObject([xPrev, yPrev]);
          }
          isContinue = false;
        }
        datarefPoints.pushObject([x, y]);
      }
      if (x - stepInterval !== graphBounds.xMax) {
        if (x > graphBounds.xMax) {
          x = graphBounds.xMax;
          y = fn(x);
          datarefPoints.pushObject([x, y]);
        }
        else {
          datarefPoints.pushObject([xPrev, yPrev]);
        }
      }
      this.setDatadefPoints(datarefPoints);
    }
  }
});
