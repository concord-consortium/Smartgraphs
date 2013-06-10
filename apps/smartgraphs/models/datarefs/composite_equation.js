/*globals Smartgraphs */

sc_require('models/dataref');

/** @class

  @extends Smartgraphs.Dataref
*/
Smartgraphs.CompositeEquation = Smartgraphs.Dataref.extend({

  initialise: function() {
    sc_super();
    this.set('stepInterval', this.get('xInterval'));
    this.populatePoints();
  },

  populatePoints: function() {
    var datarefPoints = this.get('points'),
        stepInterval = this.get('stepInterval'),
        graphBounds = this.get('graphBounds'),
        x,
        y,
        expression = this.get('expression'),
        // Gettin' evil:
        fn = new Function('x', "with (Math) { " + expression + "; } return y;"),
        i;

    for (x = graphBounds.xMin, i = 0; x <= graphBounds.xMax; x = graphBounds.xMin + stepInterval * ++i) {
      y = fn(x);
      datarefPoints.pushObject([x, y]);
    }

    this.setDatadefPoints(datarefPoints);
  }

});