/*globals Smartgraphs */

/** @class

  In this graph controller state, the user can "draw" shapes on the graph by plotting the points.

  @extends SC.State
  @version 0.1
*/
Smartgraphs.GRAPHING_TOOL = SC.State.extend(
/** @scope Smartgraphs.GRAPHING_TOOL.prototype */ {
  
  initialSubstate: 'OFF',

  OFF: SC.State.design({
    toolRoot: SC.outlet('parentState'),

    graphingToolStartTool: function (context, args) {
      var toolRoot = this.get('toolRoot');
      toolRoot.set('annotationName', args.annotationName);
      toolRoot.set('datadefName', args.datadefName);
      
      if (args.shape === 'singleLine') {
        toolRoot.set('shape', args.shape);
      }
      this.gotoState(this.getPath('parentState.ON'));
    }
  }),

  ON: SC.State.design({

    toolRoot: SC.outlet('parentState'),
    owner:    SC.outlet('statechart.owner'),

    initialSubstate: 'CHOOSE_SHAPE',

    enterState: function () {
      var graphingTool = Smartgraphs.graphingTool;

      var toolRoot = this.get('toolRoot'),
          annotationName = toolRoot.get('annotationName'),
          annotation = graphingTool.getAnnotation(annotationName),
          datadefName = toolRoot.get('datadefName'),
          datadef = graphingTool.getDatadef(datadefName);

      if (!annotation) {
        throw SC.Error.desc("Graphing tool was started with a bogus annotation name '%@'".fmt(annotationName));
      }
      if (!SC.kindOf(annotation, Smartgraphs.FreehandSketch)) {
        throw SC.Error.desc("Graphing tool was started with a non-FreehandSketch annotation name '%@'".fmt(annotationName));
      }
      if (!datadef) {
        throw SC.Error.desc("Graphing tool was started with a bogus datadef name '%@'".fmt(datadefName));
      }

      graphingTool.hideGraphTitle();
      graphingTool.graphingStarting(this);
      graphingTool.updateGraphLogicalBounds();

      toolRoot.set('annotation', annotation);
      toolRoot.set('datadef', datadef);
      Smartgraphs.graphingTool.appendSketch(this, annotation);
      Smartgraphs.graphingTool.appendRepresentation(this, datadef);
    },

    exitState: function () {
      this.get('owner').hideControls();
      
      var graphingTool = Smartgraphs.graphingTool;
      graphingTool.set('pointMovedNumber', null);
      graphingTool.set('pointMoved', false);
      graphingTool.graphingFinished(this);
      graphingTool.set('lineCount', 0);
      
      var toolRoot = this.get('toolRoot');
      toolRoot.set('annotation', null);
      toolRoot.set('annotationName', null);
      toolRoot.set('datadef', null);
      toolRoot.set('datadefName', null);
    },

    stopTool: function () {
      this.gotoState(this.getPath('toolRoot.OFF'));
    },

    CHOOSE_SHAPE: SC.State.design({
      toolRoot: SC.outlet('parentState.toolRoot'),

      enterState: function () {
        var shape = this.getPath('toolRoot.shape');

        if (shape === 'singleLine') {
          this.gotoState(this.getPath('parentState.SINGLE_LINE'));
        }
        else
        {
          throw SC.Error.desc("Graphing tool was started with unknown 'shape' argument '%@'".fmt(shape));
        }
      }
    }),

    // "SINGLE_LINE" option -- draw a single line from mousedown to mousedown

    SINGLE_LINE: SC.State.design({

      toolRoot: SC.outlet('parentState.toolRoot'),
      // Adding this variable to avoid indirect fetching of datadefPoints and annotationPoints.
      // Also adding two more values required while dragging.
      initialSubstate: 'START',

      START: SC.State.design({

        pointDraggedInfo: {
          datadefPoints: null,
          annotationPoints: null,
          initialPoint: null,
          downPoint: null
        },

        toolRoot: SC.outlet('parentState.toolRoot'),
        owner:    SC.outlet('statechart.owner'),

        enterState: function () {
          this.get('owner').disableAllControls();
        },

        mouseDownAtPoint: function (context, args) {
          var graphingTool = Smartgraphs.graphingTool;
          var datadef = this.getPath('toolRoot.datadef');
          var datadefPoints = datadef.get("points");
          if (datadefPoints.length < 2) {
            graphingTool.plotPoint(Smartgraphs.Point.create({ x: args.x, y: args.y }));
            if (datadefPoints.length === 2) {
              graphingTool.drawLineThroughPoints(datadefPoints[0], datadefPoints[1], this);
              graphingTool.graphingFinished(this);
            }
          }
        },

        dataPointSelected: function (context, args) {
          var graphingTool = Smartgraphs.graphingTool;
          var curPoint = args;
          var datadefPoints = this.getPath('toolRoot.datadef').get('points');
          var annotationPoints = this.getPath('toolRoot.annotation').get('points');
          for (var i = 0 ; i < datadefPoints.length; i++) {
            if ((curPoint.x === datadefPoints[i][0]) && (curPoint.y === datadefPoints[i][1])) {
              graphingTool.set('pointMovedNumber', i);
              break;
            }
          }
          graphingTool.set('showTooltip', true);
          this.pointDraggedInfo.datadefPoints = datadefPoints;
          this.pointDraggedInfo.annotationPoints = annotationPoints;
          this.pointDraggedInfo.initialPoint = Smartgraphs.Point.create({x: curPoint.x, y: curPoint.y});
          return;
        },

        dataPointDown: function (context, args) {
          var curPoint = args;
          this.pointDraggedInfo.downPoint = Smartgraphs.Point.create({x: curPoint.x, y: curPoint.y});
          return;
        },

        isPointInDatadef: function (xCur, yCur) {
          var graphingTool = Smartgraphs.graphingTool;
          var info = this.pointDraggedInfo;
          var pointMovedNumber = graphingTool.get('pointMovedNumber');
          for (var i = 0 ; i < info.datadefPoints.length; i++) {
            if (i === pointMovedNumber) {
              continue;
            }
            var point = info.datadefPoints[i];
            if (point[0] === xCur && point[1] === yCur) {
              graphingTool.set('showTooltip', false);
              return true;
            }
            return false;
          }
        },

        dataPointDragged: function (context, args) {
          var graphingTool = Smartgraphs.graphingTool;
          if (this.isPointInDatadef(args.x, args.y)) {
            graphingTool.set('showTooltip', false);
          }
          else {
            graphingTool.set('showTooltip', true);
          }
          var info = this.pointDraggedInfo;
          var pointMovedNumber = graphingTool.get('pointMovedNumber');
          info.datadefPoints.replace(pointMovedNumber, 1, [[args.x, args.y]]);
          if (info.datadefPoints.length >= 2) {
            var pointLogicalArray = graphingTool.getLineEndPointsArray(info.datadefPoints[0], info.datadefPoints[1]);
            info.annotationPoints.replace(0, 2, pointLogicalArray);
          }
          return;
        },

        rollbackPointDragged: function () {
          var graphingTool = Smartgraphs.graphingTool;
          var info = this.pointDraggedInfo;
          var pointMovedNumber = graphingTool.get('pointMovedNumber');
          info.datadefPoints.replace(pointMovedNumber, 1, [[info.initialPoint.x, info.initialPoint.y]]);
          if (info.datadefPoints.length >= 2) {
            var pointLogicalArray = graphingTool.getLineEndPointsArray(info.datadefPoints[0], info.datadefPoints[1]);
            info.annotationPoints.replace(0, 2, pointLogicalArray);
          }
        },

        dataScreenPointUp: function (context, args) {
          var graphingTool = Smartgraphs.graphingTool;
          if (this.pointDraggedInfo.datadefPoints.length >= 2) {
            graphingTool.set('showTooltip', false);
          }
          var graphView = graphingTool.graphViewForPane(graphingTool.get('graphPane'));
          graphView.get('tooltipView').displayDidChange();
          var bPointInGraph = graphingTool.checkInputAreaScreenBounds(args.x, args.y);
          if (bPointInGraph)
          {
            var curPoint = graphingTool.pointForCoordinates(args.x, args.y);
            var bPointInDatadef = this.isPointInDatadef(curPoint.x, curPoint.y);
            if (!bPointInDatadef) {
              var curPointFixed = Smartgraphs.Point.create({x: curPoint.x, y: curPoint.y});
              var downPoint = this.pointDraggedInfo.downPoint;
              if (downPoint.xFixed() !== curPointFixed.xFixed() || downPoint.yFixed() !== curPointFixed.yFixed()) {
                graphingTool.set('pointMoved', true);
              }
              return;
            }
          }
          this.rollbackPointDragged();
          return;
        }
      })
    })
  })
});
