// ==========================================================================
// Project:   Smartgraphs.PointView
// Copyright: ©2013 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*global Smartgraphs, RaphaelViews*/

/** @class

  (Document Your View Here)

  @extends SC.View
*/

Smartgraphs.PointView = RaphaelViews.RaphaelView.extend(
/** @scope Smartgraphs.PointView.prototype */ {

  displayProperties: 'content.x content.y isEnabled color radius'.w(),

  controllerPath: 'parentView.graphView.graphController',
  controller: SC.outlet('parentView.graphView.graphController'),

  dataRepresentation: SC.outlet('parentView.dataRepresentation'),
  datadef: SC.outlet('dataRepresentation.datadef'),
  datadefName: SC.outlet('datadef.name'),

  modifiersBinding: '.controller.modifiers',
  modifiersBindingDefault: SC.Binding.oneWay(),

  datasetColorBinding: '.parentView.color',
  overrideColor: null,

  isDimmedBinding: '.dataRepresentation.isDimmed',
  isDimmedBindingDefault: SC.Binding.oneWay(),

  dimmedColor: '#cccccc',

  hoveredRadius:    6,
  notHoveredRadius: 4, // SC.platform.touch ?  : 4,

  // This has to remain a volatile computed property for now because SC.platform.touch is initially NO
  // on Mobile Safari, but is later changed to YES.
  targetRadius: function() {
    return SC.platform.touch ? 20 : 10;
  }.property(),

  isEnabled: YES,
  isHovered: NO,
  // required by CollectionFastPath
  layerIsCacheable: YES,
  isPoolable: YES,

  color: function () {
    return this.get('overrideColor') ? this.get('overrideColor') : (this.get('isDimmed') ? this.get('dimmedColor') : this.get('datasetColor'));
  }.property('overrideColor', 'isDimmed', 'dimmedColor', 'datasetColor').cacheable(),

  radius: function () {
    return (this.get('isHovered') ? this.get('hoveredRadius') : this.get('notHoveredRadius'));
  }.property('isHovered', 'hoveredRadius', 'notHoveredRadius').cacheable(),

  modifiersDidChange: function () {
    var modifiers = this.get('modifiers') || {},
        x = this.getPath('content.x'),
        y = this.getPath('content.y'),
        datadefName = this.get('datadefName'),
        modifier;

    modifier = modifiers[[x, y, datadefName]];
    if (modifier) {
      this.set('overrideColor', modifier.get('color'));
    }
    else {
      this.set('overrideColor', null);
    }
  }.observes('modifiers'),

  mouseEntered: function () {
    if (!this.dataRepresentation.datadef.isActive) {
      return;
    }
    this.set('isHovered', YES);
    this.get('controller').dataPointHovered(this.get('content'));
  },

  mouseExited: function () {
    if (!this.dataRepresentation.datadef.isActive) {
      return;
    }
    this.set('isHovered', NO);
    this.get('controller').dataPointUnhovered(this.get('content'));
  },

  mouseDown: function (evt) {
    return this._mouseDownOrTouchStart(evt);
  },

  touchStart: function (evt) {
    return this._mouseDownOrTouchStart(evt);
  },

  _mouseDownOrTouchStart: function (evt) {
    if (!this.dataRepresentation.datadef.isActive) {
      return;
    }
    this.get('controller').dataPointSelected(this.get('dataRepresentation'), this.getPath('content.x'), this.getPath('content.y'));
      // 'tee' the dataPointSelected event, but don't consider the mouseDown handled; let the parent collection view
      // also handle it
    var graphView = this.getPath('parentView.graphView');
    var coords = graphView.graphCanvasView.axesView.inputAreaView.coordsForEvent(evt);
    var point = graphView.pointForCoordinates(coords.x, coords.y);
    this.get('datadef').set('dragValueX', this.getPath('content.x'));
    this.get('datadef').set('dragValueY', this.getPath('content.y'));
    return YES;
  },

  mouseDragged: function (evt) {
    return this._mouseDragged(evt);
  },

  touchesDragged: function(evt) {
    return this._mouseDragged(evt);
  },

  _mouseDragged: function (evt) {
    if (!this.dataRepresentation.datadef.isActive) {
      return;
    }
    var graphView = this.getPath('parentView.graphView');
    var coords = graphView.graphCanvasView.axesView.inputAreaView.coordsForEvent(evt);
    var point = graphView.pointForCoordinates(coords.x, coords.y);
    this.get('controller').dataPointDragged(this.get('dataRepresentation'), point.x, point.y);
    return YES;
  },

  mouseUp: function (evt) {
    return this._mouseUp(evt);
  },

  touchEnd: function (evt) {
    return this._mouseUp(evt);
  },

  _mouseUp: function (evt) {
    if (!this.dataRepresentation.datadef.isActive) {
      return;
    }
    var graphView = this.getPath('parentView.graphView');
    var coords = graphView.graphCanvasView.axesView.inputAreaView.coordsForEvent(evt);
    var point = graphView.pointForCoordinates(coords.x, coords.y);
    var graphController = this.get('controller');
    var dataRepresentation = this.get('dataRepresentation');
    graphController.dataPointUp(dataRepresentation, point.x, point.y);
    return YES;
  },

  renderCallback: function (raphaelCanvas, x, y, radius, color, targetRadius, clipRect) {
    // browser bug (or weird corner of svg spec): strokeWidth can't be more than 4x the circle radius or there
    // is a gap between the fill and the stroke.
    // https://code.google.com/p/chromium/issues/detail?id=239860
    // Therefore, we can't reliably use stroke-width to make the touchable area of the circle larger.
    return raphaelCanvas.set().push(
      raphaelCanvas.circle(x, y, radius).attr({ fill: color, 'stroke-width': 0, 'clip-rect': clipRect }),
      raphaelCanvas.circle(x, y, targetRadius).attr({ fill: 'black', 'fill-opacity': 0, 'stroke-width': 0 })
    );
  },

  render: function (context, firstTime) {
    var graphView = this.getPath('parentView.graphView');
    if (!graphView) {
      // apparently render may have been called after we were removed from our old parent. Redraw after add to new parent.
      this.displayDidChange();
      return;
    }

    var color = this.get('color'),
        radius = this.get('radius'),
        targetRadius = this.get('targetRadius'),
        x = this.getPath('content.x'),
        y = this.getPath('content.y'),
        coords = graphView.coordinatesForPoint(x, y),
        clipRect = graphView.get('clipRect'),
        visibleCircle,
        raphaelObject;

    if (firstTime) {
      context.callback(this, this.renderCallback, coords.x, coords.y, radius, color, targetRadius, clipRect);
    }
    else {
      raphaelObject = this.get('raphaelObject');
      raphaelObject.attr({ cx: coords.x, cy: coords.y });
      visibleCircle = context.raphael().items[0];
      visibleCircle.attr({ r: radius, fill: color, 'clip-rect': clipRect });
    }
  },

  contentDidChange: function() {
    if (this.get('isHovered')) {
      this.set('isHovered', false);
      this.get('controller').dataPointUnhovered(this._lastContent);
    }
    this._lastContent = this.get('content');
  }.observes('content')

});
