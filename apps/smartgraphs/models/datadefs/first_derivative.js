// ==========================================================================
// Project:   Smartgraphs.FirstDerivative
// Copyright: ©2013 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================

sc_require('models/datadef');
sc_require('lib/sampleset');

/** @class

  @extends Smartgraphs.Datadef
  @version 0.1
*/
Smartgraphs.FirstDerivative = Smartgraphs.Datadef.extend(
/** @scope Smartgraphs.FirstDerivative.prototype */ {

  /**
    @property {String}

    Possible values are 'dataref' or 'datadef'. Indicates whether the 'source' property references
    a dataref or datadef. Sigh.
  */
  sourceType: SC.Record.attr(String),

  /*
    @property {String}

    Name of the source-data record. (Used because the SC store doesn't really do polymorphism)
    The sourceType property indicates whether to look for a dataref or a datadef of this name.
  */
  source: SC.Record.attr(String),


  /*
    @property {Boolean}

    Data entered by hand is often implicitly piecewise linear. Calculating the derivative of
    piecewise-linear data requires a different algorithm than estimating the derivative from sampled
    points. Because it isn't possible to tell with certainty from the data that it is intended to be
    piecewise linear, we ask authors to supply this hint when they create a derivative dataset.
  */
  sourceIsPiecewiseLinear: SC.Record.attr(Boolean),

  sourceRecord: function() {
    var sourceType = this.get('sourceType');

    if (sourceType === 'dataref') {
      return Smartgraphs.activityObjectsController.findDataref(this.get('source'));
    } else if (sourceType === 'datadef') {
      return Smartgraphs.activityObjectsController.findDatadef(this.get('source'));
    }
  }.property().cacheable(),

  getNewSampleset: function(options) {
    var points = this._getSourcePoints(options.xMin, options.xMax),
        derivativePoints;

    if (this.get('sourceIsPiecewiseLinear')) {
      derivativePoints = this.computePiecewiseLinearDerivative(points);
    } else {
      derivativePoints = this.computeMidpointDifferences(points);
    }

    return Smartgraphs.Sampleset.create({
      datadef: this,
      points: derivativePoints
    });
  },

  _getSourcePoints: function(xMin, xMax) {
    var sourceType = this.get('sourceType'),
        sourceRecord = this.get('sourceRecord');

    if (sourceType === 'dataref') {
      return sourceRecord.getPoints(xMin, xMax);
    } else if (sourceType === 'datadef') {
      return sourceRecord.getNewSampleset({xMin: xMin, xMax: xMax}).get('points');
    }
  },

  computeMidpointDifferences: function(points) {
    var differences = [],
        p1,
        p0,
        dx;

    for (var i = 1, len = points.length; i < len; i++) {
      p1 = points[i];
      p0 = points[i-1];
      dx = p1[0] - p0[0];

      differences.push([ 0.5*[p0[0] + p1[0]], (p1[1] - p0[1]) / dx ]);
    }
    return differences;
  },

  // Given a set of points describing a textbook-style piecewise-linear function, e.g.:
  //
  // [0,0], [1,1], [2,2], [3,4], [4,6], [5,10]
  //
  // (a slope-1 line from x=0 to x=2, a slope-2 line segment from x=2 to x=4, and a slope-4 line
  // segment from x=4 to x=5)
  //
  // Returns a set of points with the same x-values, but with y-values equal to both the forward
  // and backward differences at each x-value (removing any duplicated points), e.g.,
  //
  // [0,1], [1,1], [2,1], [2,2], [3,2], [4,2], [4,4], [5,4]
  //
  // (a line segment having y=1 from x=0 to x=2, a line segment having y=2 from x=2 to x=4, and a
  // line segment having y=4 from x=4 to x=5)

  computePiecewiseLinearDerivative: function(points) {
    var differences = [],
        pPrev,
        p,
        pNext,
        forwardDifference,
        backwardDifference;

    function getForwardDifference() {
      return (pNext[1] - p[1]) / (pNext[0] - p[0]);
    }

    if (points.length >= 2) {

      // First point.
      p = points[0];
      pNext = points[1];
      forwardDifference = getForwardDifference();

      differences.push([p[0], forwardDifference]);

      // Interior points, if any.
      for (var i = 1, max = points.length - 1; i < max; i++) {
        pPrev = p;
        p = pNext;
        pNext = points[i+1];
        backwardDifference = forwardDifference;
        forwardDifference = getForwardDifference();

        differences.push([p[0], backwardDifference]);
        if (forwardDifference !== backwardDifference) {
          differences.push([p[0], forwardDifference]);
        }
      }

      // Last point.
      p = pNext;
      backwardDifference = forwardDifference;
      differences.push([p[0], backwardDifference]);
    }
    return differences;
  }

});
