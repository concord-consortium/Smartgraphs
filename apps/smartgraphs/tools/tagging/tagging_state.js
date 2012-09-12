// ==========================================================================
// Project:   Smartgraphs.TAGGING_TOOL
// Copyright: ©2011 Concord Consortium
// Author:    Richard Klancer
// ==========================================================================
/*globals Smartgraphs */

/** @class

  In this application state, the student updates the 'points' property of an annotation by clicking on points in
  a dataset. This can continue until we leave this state (for example, when the activity step is submitted.)

  @extends SC.State
  @version 0.1
*/
Smartgraphs.TAGGING_TOOL = SC.State.extend(
/** @scope Smartgraphs.TAGGING_TOOL.prototype */ {

  enterState: function () {
    Smartgraphs.statechart.sendAction('disableSubmission');
    Smartgraphs.taggingTool.clearPoint();
  },

  exitState: function () {
    Smartgraphs.taggingTool.clearSetup();
  },

  /**
    This event is fired by DatapointViews whenever the user clicks on a data point. We ignore clicks on data points in
    datasets we don't care about.

    If this event comes from the dataset we care about, we update the annotation's 'point' property to the clicked-on
    point. This also enables activity step submission, if it was disabled.

    @param {Smartgraphs.DataPointView} dataPointView
      The dataPointView that was clicked on
  */
  dataPointSelected: function (context, args) {
    var datadefName = Smartgraphs.taggingTool.get('datadefName'),
        rep = args.dataRepresentation;

    if (rep && rep.getPath('datadef.name') === datadefName) {
      Smartgraphs.taggingTool.setPoint(args.x, args.y);
      Smartgraphs.statechart.sendAction('enableSubmission');
    }
  },

  mouseDownAtPoint: function (context, args) {
    var datadefName = Smartgraphs.taggingTool.get('datadefName');
    var graphController = context;
    var rep = graphController.getDataRepresentation(datadefName);
    if (rep) {
      if (rep.get('lineStyle') === "connected" && rep.get('pointStyle') === "none") {
        var linePoints = rep.getPath('line.points');
        if (linePoints) {
          var pointsetPoint = null;
          var lineSnapDistance = rep.getPath('datadef.lineSnapDistance');
          var minDistance = lineSnapDistance;
          // Loop to get nearest datadef point from click within lineSnapDistance
          for (var i = linePoints.get('length') - 1; i >= 0; i--) {
            var linePoint = { x: linePoints[i][0], y: linePoints[i][1] };
            var distance = Math.sqrt(Math.pow(linePoint.x - args.x, 2) + Math.pow(linePoint.y - args.y, 2));
            if (distance < lineSnapDistance) {
              if (distance < minDistance) {
                minDistance = distance;
                pointsetPoint = linePoint;
              }
            }
          }
          if (pointsetPoint) {
            rep.showSinglePoint(pointsetPoint.x, pointsetPoint.y);
            Smartgraphs.taggingTool.setPoint(pointsetPoint.x, pointsetPoint.y);
            Smartgraphs.statechart.sendAction('enableSubmission');
          }
        }
      }
    }
  }
});
