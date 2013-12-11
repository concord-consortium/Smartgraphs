/*globals Smartgraphs */

/** @class

  In this graph controller state, the user can plot 2 points to specify a line.

  @extends SC.State
  @version 0.1
*/
Smartgraphs.GRAPHING_TOOL = SC.State.extend(
/** @scope Smartgraphs.GRAPHING_TOOL.prototype */ {

  initialSubstate: 'OFF',

  // The datadef being graphed. When this state is exited, the datadef will have 2 points.
  datadef: null,
  datadefName: null,

  // A FreehandSketch, required in order to draw a line between the points that also extends to the
  // edges of the graph area.
  annotation: null,
  annotationName: null,

  // Store the initial location of a dragged point so we can set pointMoved
  initialPoint: null,

  checkDatadef: function(dataRepresentation) {
    return dataRepresentation && dataRepresentation.getPath('datadef.name') === this.get('datadefName');
  },

  createPoint: function(context, args) {
    Smartgraphs.graphingTool.plotPoint(args.x, args.y);
    Smartgraphs.graphingTool.selectDatadefPoint(args.x, args.y);
  },

  updatePoint: function(context, args) {
    Smartgraphs.graphingTool.moveSelectedPoint(args.x, args.y);
  },

  finishPoint: function(context, args) {
    Smartgraphs.graphingTool.moveSelectedPoint(args.x, args.y);
    Smartgraphs.graphingTool.deselectPoint();
  },

  OFF: SC.State.design({
    toolRoot: SC.outlet('parentState'),

    graphingToolStartTool: function (context, args) {
      var toolRoot = this.get('toolRoot');
      toolRoot.set('annotationName', args.annotationName);
      toolRoot.set('datadefName', args.datadefName);
      this.gotoState('ON');
    }
  }),

  ON: SC.State.design({

    toolRoot: SC.outlet('parentState'),
    owner:    SC.outlet('statechart.owner'),

    initialSubstate: 'CHOOSE_INITIAL_STATE',

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
      graphingTool.appendSketch(this, annotation);
      graphingTool.set('annotation', annotation);
      graphingTool.appendDatadef(this, datadef);
      graphingTool.set('datadef', datadef);
      graphingTool.showToolTip(true);
    },

    exitState: function () {
      this.get('owner').hideControls();

      var graphingTool = Smartgraphs.graphingTool;
      graphingTool.set('pointMoved', false);
      graphingTool.graphingFinished(this);
      graphingTool.set('lineCount', 0);
      graphingTool.showToolTip(true);

      var toolRoot = this.get('toolRoot');
      toolRoot.set('annotation', null);
      toolRoot.set('annotationName', null);
      toolRoot.set('datadef', null);
      toolRoot.set('datadefName', null);
    },

    stopTool: function () {
      this.gotoState(this.getPath('toolRoot.OFF'));
    },

    CHOOSE_INITIAL_STATE: SC.State.design({
      toolRoot: SC.outlet('parentState.toolRoot'),

      enterState: function () {
        switch (this.getPath('toolRoot.datadef.points.length')) {
          case 0:
            this.gotoState('FIRST_POINT_NOT_SELECTED');
            break;

          case 1:
            this.gotoState('FIRST_POINT_SELECTED.SECOND_POINT_NOT_SELECTED');
            break;

          default:
            this.gotoState('FIRST_POINT_SELECTED.SECOND_POINT_SELECTED');
        }
      }
    }),

    FIRST_POINT_NOT_SELECTED: SC.State.design({
      toolRoot: SC.outlet('parentState.toolRoot'),

      mouseDownAtPoint: function(context, args) {
        this.get('toolRoot').createPoint(context, args);
      },

      mouseDraggedToPoint: function(context, args) {
        this.get('toolRoot').updatePoint(context, args);
      },

      mouseUpAtPoint: function(context, args) {
        this.get('toolRoot').finishPoint(context, args);
        this.gotoState('FIRST_POINT_SELECTED');
      }

    }),

    FIRST_POINT_SELECTED: SC.State.design({
      toolRoot: SC.outlet('parentState.toolRoot'),

      initialSubstate: 'SECOND_POINT_NOT_SELECTED',

      dataPointSelected: function(context, args) {
        if ( ! this.get('toolRoot').checkDatadef(args.dataRepresentation) ) {
          return NO;
        }
        Smartgraphs.graphingTool.selectDatadefPoint(args.x, args.y);
        this.setPath('toolRoot.initialPoint', {x: args.x, y: args.y});
      },

      dataPointDragged: function(context, args) {
        if ( ! this.get('toolRoot').checkDatadef(args.dataRepresentation) ) {
          return NO;
        }
        Smartgraphs.graphingTool.moveSelectedPoint(args.x, args.y);
      },

      dataPointUp: function(context, args) {
        if ( ! this.get('toolRoot').checkDatadef(args.dataRepresentation) ) {
          return NO;
        }
        Smartgraphs.graphingTool.moveSelectedPoint(args.x, args.y);
        Smartgraphs.graphingTool.checkIfSelectedPointMoved(this.getPath('toolRoot.initialPoint'));
        Smartgraphs.graphingTool.deselectPoint();
      },

      SECOND_POINT_NOT_SELECTED: SC.State.design({
        toolRoot: SC.outlet('parentState.toolRoot'),

        mouseDownAtPoint: function(context, args) {
          this.get('toolRoot').createPoint(context, args);
        },

        mouseDraggedToPoint: function(context, args) {
          this.get('toolRoot').updatePoint(context, args);
        },

        mouseUpAtPoint: function(context, args) {
          this.get('toolRoot').finishPoint(context, args);
          this.gotoState('SECOND_POINT_SELECTED');
        }
      }),

      SECOND_POINT_SELECTED: SC.State.design({
        toolRoot: SC.outlet('parentState.toolRoot'),

        enterState: function() {
          Smartgraphs.graphingTool.updateLine();
          Smartgraphs.graphingTool.graphingFinished(this);
          Smartgraphs.graphingTool.showToolTip(false);
        },

        dataPointDragged: function(context, args) {
          if ( ! this.get('toolRoot').checkDatadef(args.dataRepresentation) ) {
            return NO;
          }
          this.get('parentState').dataPointDragged(context, args);
          Smartgraphs.graphingTool.updateLine();
          return YES;
        },

        dataPointUp: function(context, args) {
          if ( ! this.get('toolRoot').checkDatadef(args.dataRepresentation) ) {
            return NO;
          }
          this.get('parentState').dataPointUp(context, args);
          Smartgraphs.graphingTool.updateLine();
          return YES;
        }
      })
    })
  })
});
