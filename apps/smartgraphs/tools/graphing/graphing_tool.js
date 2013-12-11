/*globals Smartgraphs */

sc_require('tools/tool');

/** @class

  @extends Smartgraphs.Tool
*/
Smartgraphs.graphingTool = Smartgraphs.Tool.create(
/** @scope Smartgraphs.graphingTool.prototype */ {

  name: 'graphing',
  state: 'GRAPHING_TOOL',
  lineCount: 0,
  pointMovedNumber: null, // used this tool-variable for checking that which point from the data point is moved
  pointMoved: false, // this tool-variable used to check whether point is moved or not.
  annotationName: null,
  datadefName: null,
  requestedCursorStyle: 'default',
  graphLogicalBounds: {xmin: 0, xmax: 0, ymin: 0, ymax: 0},
  graphPane: null,
  pointRadius: null, // this tool-variable stores radius of point and used to check point overlap

  setup: function (args) {
    this.set('graphPane', args.pane);
    var graphController = this.graphControllerForPane(args.pane);
    this.set('graphController', graphController);
    var otherPane = this.otherPaneFor(args.pane);
    var tableController = this.tableControllerForPane(otherPane);
    tableController.setRoundingFunc('Fixed');
    graphController.graphingToolStartTool({ annotationName: args.annotationName, shape: args.shape, datadefName: args.data});
    this.set('annotationName', args.annotationName);
    this.set('datadefName', args.data);

    this.getAnnotation(args.annotationName).set("isOverlayAnnotation", true);
    var graphView = this.graphViewForPane(args.pane);
    graphView._updateAllViews();
  },

  appendSketch: function (state, sketch) {
    this.graphControllerForState(state).addAnnotation(sketch);
  },

  appendDatadef: function (state, datadef) {
    this.graphControllerForState(state).addDatadef(datadef);
  },

  hideGraphTitle: function () {
    var graphView = this.graphViewForPane(this.get('graphPane'));
    graphView.get('titleView').set('isVisible', false);
  },

  showGraphTitle: function () {
    var graphView = this.graphViewForPane(this.get('graphPane'));
    graphView.get('titleView').set('isVisible', true);
  },

  graphingStarting: function (state) {
    var graphController = this.graphControllerForState(state);
    if (graphController && graphController.graphingToolGraphingStarting) {
      graphController.graphingToolGraphingStarting();
    }
  },

  graphingFinished: function (state) {
    var graphController = this.graphControllerForState(state);
    if (graphController && graphController.graphingToolGraphingFinished) {
      graphController.graphingToolGraphingFinished();
    }
  },

  graphViewForPane: function (pane) {
    return Smartgraphs.activityPage.getPath(Smartgraphs.activityViewController.firstOrSecondFor(pane) + 'GraphPane.graphView');
  },

  showToolTip: function (show) {
    var graphController = this.graphControllerForPane(this.get('graphPane'));
    graphController.set('disableToolTipCoords', ! show);
  },

  coordinatesForPoint: function (x, y) {
    var graphView = this.graphViewForPane(this.get('graphPane'));
    return graphView.coordinatesForPoint(x, y);
  },

  updateGraphLogicalBounds: function () {
    var graphView = this.graphViewForPane(this.get('graphPane'));
    this.set('graphLogicalBounds', graphView.graphCanvasView._getLogicalBounds());
  },

  plotPoint: function (x, y) {
    var datadef = this.get('datadef');

    if (!this.isPointOverlap(x, y)) {
      datadef.addPoint(x, y);
    }
  },

  selectDatadefPoint: function(x, y) {
    var datadef = this.get('datadef');
    var points = datadef.get('points');

    this.get('graphController').setCurrentlyDraggedPoint(x, y);
    datadef.setDragValueXY(x, y);

    for (var i = 0, len = points.get('length'); i < len; i++) {
      if (x === points[i][0] && y === points[i][1]) {
        this.set('pointMovedNumber', i);
        break;
      }
    }
  },

  moveSelectedPoint: function(x, y) {
    if (this.isPointOverlap(x, y)) {
      // Graph controller will have already set its currentlyDraggedPoint to (x,y). However, we
      // won't update the point to (x, y), so we have to force graph controller to set the
      // currentlyDraggedPoint back to what it was before.
      var point = this.getPath('datadef.points')[this.get('pointMovedNumber')];
      this.get('graphController').setCurrentlyDraggedPoint(point[0], point[1]);
      return;
    }

    var datadef = this.get('datadef');
    var pointMovedNumber = this.get('pointMovedNumber');

    this.get('graphController').setCurrentlyDraggedPoint(x, y);
    datadef.setDragValueXY(x, y);

    if (pointMovedNumber !== null) {
      datadef.replacePoint(pointMovedNumber, x, y);
    }
  },

  deselectPoint: function() {
    this.get('graphController').setCurrentlyDraggedPoint(null);
    this.get('datadef').setDragValueXY(null, null);
    this.set('pointMovedNumber', null);
  },

  updateLine: function() {
    this.set('lineCount', 1);
    var annotationPoints = this.getPath('annotation.points');
    var datadefPoints = this.getPath('datadef.points');
    var lineEndPoints = this.getLineEndPointsArray(datadefPoints[0], datadefPoints[1]);
    annotationPoints.replace(0, 2, lineEndPoints);
  },

  coordsAreEqual: function(x1, y1, x2, y2, digits) {
    return x1.toFixed(digits) === x2.toFixed(digits) && y1.toFixed(digits) === y2.toFixed(digits);
  },

  checkIfSelectedPointMoved: function(initialPoint) {
    var point = this.getPath('datadef.points')[this.get('pointMovedNumber')];
    this.set('pointMoved', ! this.coordsAreEqual(initialPoint.x, initialPoint.y, point[0], point[1], 2));
  },

  isPointOverlap: function (x, y) {
    var datadef = this.get('datadef');
    var datadefPoints = datadef.get('points');

    if (datadefPoints.get('length') === 0) {
      return false;
    }

    var curPoint = this.coordinatesForPoint(x, y);
    var radius = this.getPointRadius();
    var pointMovedNumber = this.get('pointMovedNumber');
    for (var i = 0; i < datadefPoints.length; i++) {
      if (i === pointMovedNumber) {
        continue;
      }
      var datadefCoords = this.coordinatesForPoint(datadefPoints[i][0], datadefPoints[i][1]);
      var distance = Math.sqrt(Math.pow(datadefCoords.x - curPoint.x, 2) +  Math.pow(datadefCoords.y - curPoint.y, 2));
      if (distance < radius + radius) {
        return true;
      }
    }
    return false;
  },

  getPointRadius: function () {
    var radius = this.get('pointRadius');
    if (radius === null) {
      this.setPointRadius();
      radius = this.get('pointRadius');
    }
    return radius;
  },

  setPointRadius: function () {
    var graphView = this.graphViewForPane(this.graphPane);
    var childViews = graphView.dataHolder.childViews;
    for (var i = 0; i < childViews.length; i++) {
      if (childViews[i].childViews.length > 0) {
        var radius = childViews[i].childViews[0].get("notHoveredRadius");
        this.set('pointRadius', radius);
        return;
      }
    }
  },

  getLinePointWithinLogicalBounds: function (point, m, c) {
    var x, y;
    var graphLogicalBounds = this.get('graphLogicalBounds');
    x = point[0];
    y = point[1];
    if (x < graphLogicalBounds.xMin) {
      x = graphLogicalBounds.xMin;
      y = m * x + c;
    } else if (x > graphLogicalBounds.xMax) {
      x = graphLogicalBounds.xMax;
      y = m * x + c;
    }
    if (y < graphLogicalBounds.yMin) {
      y = graphLogicalBounds.yMin;
      x = (y - c) / m;
    } else if (y > graphLogicalBounds.yMax) {
      y = graphLogicalBounds.yMax;
      x = (y - c) / m;
    }
    return [x, y];
  },

  getLineEndPointsArray: function (point1, point2) {
    var graphLogicalBounds, m, c, x1, y1, x2, y2;
    graphLogicalBounds = this.get('graphLogicalBounds');
    if (point2[0] === point1[0]) {
      x1 = point1[0];
      y1 = graphLogicalBounds.yMin;
      x2 = x1;
      y2 = graphLogicalBounds.yMax;

      return [[x1, y1], [x2, y2]];
    }

    m = (point2[1] - point1[1]) / (point2[0] - point1[0]);
    c = point2[1] - m * point2[0];

    if (m === 0) {
      x1 = graphLogicalBounds.xMin;
      y1 = point1[1];
      x2 = graphLogicalBounds.xMax;
      y2 = y1;

      return [[x1, y1], [x2, y2]];
    }

    var pointArr;

    x1 = graphLogicalBounds.xMin;
    y1 = m * x1 + c;
    pointArr = this.getLinePointWithinLogicalBounds([x1, y1], m, c);
    x1 = pointArr[0];
    y1 = pointArr[1];

    y2 = m > 0 ? graphLogicalBounds.yMax : graphLogicalBounds.yMin;
    x2 = (y2 - c) / m;
    pointArr = this.getLinePointWithinLogicalBounds([x2, y2], m, c);
    x2 = pointArr[0];
    y2 = pointArr[1];

    return [[x1, y1], [x2, y2]];
  }
});
