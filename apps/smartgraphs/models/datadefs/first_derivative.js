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

  sourceRecord: function() {
    if (this.get('sourceType') === 'dataref') {
      return Smartgraphs.activityObjectsController.findDataref(this.get('source'));
    }
  }.property().cacheable(),

  getNewSampleset: function(options) {
    var points = this._getSourcePoints(options.xMin, options.xMax);
    return Smartgraphs.Sampleset.create({
      datadef: this,
      points: this.computeMidpointDifferences(points)
    });
  },

  _getSourcePoints: function(xMin, xMax) {
    if (this.get('sourceType') === 'dataref') {
      return this.get('sourceRecord').getPoints(xMin, xMax);
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
  }

});
