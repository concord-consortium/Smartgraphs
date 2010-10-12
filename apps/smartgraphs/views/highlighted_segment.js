// ==========================================================================
// Project:   Smartgraphs.HighlightedSegmentView
// Copyright: ©2010 Concord Consortium
// @author:   Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs RaphaelViews */

/** @class

  // TODO (Document Your View Here)

  @extends SC.View
*/

Smartgraphs.HighlightedSegmentView = RaphaelViews.RaphaelView.extend(
/** @scope Smartgraphs.HighlightedSegmentView.prototype */
{

  // defaults
  radius: 8,
  stroke: '#cc0000',
  strokeWidth: 2,
  strokeOpacity: 1.0,
  fill: '#ffffff',
  fillOpacity: 0,

  /**
   SC will call render(context, firstTime) if these properties change
   even if it is not onscreen and not in the DOM (this will change
   later in the SC framework)
   */
  displayProperties: 'item.point.x item.point.y radius stroke strokeWidth strokeOpacity fill fillOpacity'.w(),

  /**
   We are using renderCallback in views to call non-SC render methods like
   RaphaelCanvas.segmentPath with the correct attributes.
   This is done this way because Raphael methods shouldn't be called unless
   its tags are already in the DOM.
   */
  renderCallback: function(raphaelCanvas, attrs) {
    console.warn("HighlightedSegmentView.renderCallback() called with raphaelCanvas:",raphaelCanvas);
    console.warn("attrs:",attrs);
//    return raphaelCanvas.circle(attrs.x, attrs.y, attrs.r).attr(attrs); //.toBack();
    var segmentPath = raphaelCanvas.path(attrs.pathString).attr({
      'stroke-width': 14,
      'stroke': '#aa0000',
      'stroke-opacity': 0.10,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    });//.toBack();

    //this._raphaelObjects.push(segmentPath);
    return segmentPath;
  },

  /**
   Called by SC (by the parent view)
   */
  render: function(context, firstTime) {
    var graphView = this.getPath('parentView.parentView');
    var annotation = this.get('item');

    var points = annotation.get('points');
    console.log("points:",points);
//    var point = points[0];
//    console.log("first point:",point);
//    var x = point ? point.get('x') : 0;
//    var y = point ? point.get('y') : 0;
//    var coords = graphView.coordinatesForPoint(x, y);
//
//    /** Rapheal attributes for a circle */
//    var attrs = {
//      cx: coords.x,
//      cy: coords.y,
//      r: this.get('radius'),
//      stroke: this.get('stroke'),
//      'stroke-width': this.get('strokeWidth'),
//      'stroke-opacity': this.get('strokeOpacity'),
//      fill: this.get('fill'),
//      'fill-opacity': this.get('fillOpacity')
//    };
    var coords, point;
    var pathComponents = ['M'];
    for (var i = 0, pointsLength = points.get('length'); i < pointsLength; i++) {
      point = points.objectAt(i);
      console.log("point:",point);
      coords = graphView.coordinatesForPoint(point.get('x'), point.get('y'));
      console.log("coords:",coords);
      pathComponents.push(coords.x);
      pathComponents.push(coords.y);
      pathComponents.push('L');
    }

    pathComponents.splice(pathComponents.length);      // get rid of trailing 'L'
    var pathString = pathComponents.join(' ');
    console.log(pathString);
    var attrs = {pathString: pathString};

    /**
     boolean firstTime: Does this view start from scratch and created HTML
     in a context object
     or does it just needs to update properites of a context object?
     */
    if (firstTime) {
      /**
       Create the segmentPath in Raphael
       context is not a SC object but SC expects it (it was created by SC.Pane.append() )
       This call creates a tag and CSS and stores it in the context.
       for rendering later (by by SC.Pane.append() using innerHTML() )
       */
      context.callback(this, this.renderCallback, attrs);
    }
    else {
      /** Get the segmentPath from Raphael */
      var segmentPath = context.raphael();
      /**
       Calling toBack() on the updated segmentPath puts the segmentPath earliest in the
       SVG DOM and thus in the back layer on the HTML page
       */
      segmentPath.attr({
      'stroke-width': 14,
      'stroke': '#aa0000',
      'stroke-opacity': 0.10,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round'
    }); //.toBack();
    }
  }

});
