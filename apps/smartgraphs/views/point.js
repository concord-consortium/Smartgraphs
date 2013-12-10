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
  isDragging: NO,
  // required by CollectionFastPath
  layerIsCacheable: YES,
  isPoolable: YES,

  color: function () {
    return this.get('overrideColor') ? this.get('overrideColor') : (this.get('isDimmed') ? this.get('dimmedColor') : this.get('datasetColor'));
  }.property('overrideColor', 'isDimmed', 'dimmedColor', 'datasetColor').cacheable(),

  radius: function () {
    return (this.get('isHovered') || this.get('isDragging') ? this.get('hoveredRadius') : this.get('notHoveredRadius'));
  }.property('isHovered', 'isDragging', 'hoveredRadius', 'notHoveredRadius').cacheable(),

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

    this.set('isDragging', true);
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

    this.set('isDragging', false);

    // Check if we might be hovered
    var r = this.get('targetRadius');
    var attrs = this.get('raphaelObject').items[0].attr();
    var dx = coords.x - attrs.cx;
    var dy = coords.y - attrs.cy;
    if (dx*dx + dy*dy < r*r) {
      this.set('isHovered', true);
      graphController.dataPointHovered(this.get('content'));
    } else {
      this.set('isHovered', false);
    }
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
    // Unfortunately, dragging a point in the graphing tool causes an entirely new set of Points
    // to be created. Because SC.CollectionView reuses item views, our content will change when the
    // graphing tool is in use; worse, this view may or may not continue to represent the "same"
    // point (i.e., we might represent the dragged point, then suddenly a differnet, non-dragged
    // point.)

    // The below is really just here so we can manage as best we can. The underlying implementation
    // should allow for mutating the currently selected point or swapping out a single element in
    // the pointset, but that will require some work.
    if (this.get('isHovered')) {
      this.set('isHovered', false);
      this.get('controller').dataPointUnhovered(this._lastContent);
    }

    // Potential issue: who says there isn't more than one point being dragged?
    var dragX = this.getPath('datadef.dragValueX');
    var dragY = this.getPath('datadef.dragValueY');
    var x = this.getPath('content.x');
    var y = this.getPath('content.y');
    this.set('isDragging', (dragX === x && dragY === y));

    this._lastContent = this.get('content');
  }.observes('content')

});
