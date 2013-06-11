/*globals Smartgraphs */

sc_require('models/dataref');

/** @class

  @extends Smartgraphs.Dataref
*/
Smartgraphs.CompositeEquation = Smartgraphs.Dataref.extend({

  getPoints: function(xMin, xMax) {
    var points = [],
        xInterval = this.get('xInterval'),
        x,
        y,
        expression = this.get('expression'),
        // Gettin' evil:
        fn = new Function('x', "with (Math) { " + expression + "; } return y;"),
        i;

    for (x = xMin, i = 0; x <= xMax; x = xMin + xInterval * ++i) {
      y = fn(x);
      points.push([x, y]);
    }

    return points;
  }

});