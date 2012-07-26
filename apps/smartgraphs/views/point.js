// ==========================================================================
// Project:   Smartgraphs.PointView
// Copyright: ©2010 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs RaphaelViews*/

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
  strokeWidth:      SC.platform.touch ? 20 : 10,

  isEnabled: YES,
  isHovered: NO,

  // required by CollectionFastPath
  layerIsCacheable: YES,
  isPoolable: YES,

  color: function () {
    return this.get('overrideColor') ? this.get('overrideColor') : ( this.get('isDimmed') ? this.get('dimmedColor') : this.get('datasetColor') );
  }.property('overrideColor', 'isDimmed', 'dimmedColor', 'datasetColor').cacheable(),

  radius: function () {
    return (this.get('isHovered') ? this.get('hoveredRadius') : this.get('notHoveredRadius'));
  }.property('isHovered', 'hoveredRadius', 'notHoveredRadius').cacheable(),

  modifiersDidChange: function () {
    var modifiers = this.get('modifiers') || {},
        x = this.getPath('content.x'),
        y = this.getPath('content.y'),
        datadefName = this.get('datadefName'),
        color;

    if (modifiers[[x, y, datadefName]]) {
      this.set('overrideColor', modifiers[[x, y, datadefName]].get('color'));
    }
    else {
      this.set('overrideColor', null);
    }
  }.observes('modifiers'),

  mouseEntered: function () {
    this.set('isHovered', YES);
    var graphController = this.get('controller');
    graphController.dataPointEntered(this.get('dataRepresentation'), this.getPath('content.x'), this.getPath('content.y'));
  },

  mouseExited: function () {
    this.set('isHovered', NO);
    var graphController = this.get('controller');
    graphController.dataPointExited(this.get('dataRepresentation'), this.getPath('content.x'), this.getPath('content.y'));
  },

  mouseDown: function (evt) { return this._mouseDownOrTouchStart(evt); },
  touchStart: function (evt) { return this._mouseDownOrTouchStart(evt); },

  _mouseDownOrTouchStart: function (evt) {
    this.get('controller').dataPointSelected(this.get('dataRepresentation'), this.getPath('content.x'), this.getPath('content.y'));
      // 'tee' the dataPointSelected event, but don't consider the mouseDown handled; let the parent collection view
      // also handle it
    var graphView = this.getPath('parentView.graphView');
    var coords = graphView.graphCanvasView.axesView.inputAreaView.coordsForEvent(evt);
    var point = graphView.pointForCoordinates(coords.x, coords.y);
    this.get('controller').dataPointDown(this.get('dataRepresentation'), point.x, point.y);
    return YES;
  },

  mouseDragged: function (evt) {
    return this._mouseDragged(evt);
  },

  _mouseDragged: function (evt) {
    var graphView = this.getPath('parentView.graphView');
    var coords = graphView.graphCanvasView.axesView.inputAreaView.coordsForEvent(evt);
    var point = graphView.pointForCoordinates(coords.x, coords.y);
    this.get('controller').dataPointDragged(this.get('dataRepresentation'), point.x, point.y);
    return YES;
  },

  mouseUp: function (evt) {
    return this._mouseUp(evt);
  },

  _mouseUp: function (evt) {
    var graphView = this.getPath('parentView.graphView');
    var coords = graphView.graphCanvasView.axesView.inputAreaView.coordsForEvent(evt);
    var point = graphView.pointForCoordinates(coords.x, coords.y);
    var graphController = this.get('controller');
    var dataRepresentation = this.get('dataRepresentation');
    graphController.dataPointUp(dataRepresentation, point.x, point.y);
    graphController.dataScreenPointUp(dataRepresentation, evt.pageX, evt.pageY);
    return YES;
  },

  renderCallback: function (raphaelCanvas, x, y, radius, color, strokeWidth) {
    return raphaelCanvas.circle(x, y, radius).attr({ fill: color, 'stroke-width': strokeWidth, 'stroke-opacity': 0 });
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
        strokeWidth = this.get('strokeWidth');

    // get the x and y values, and translate to our coordinate system
    var x = this.getPath('content.x'),
        y = this.getPath('content.y');

    var coords = graphView.coordinatesForPoint(x, y);

    if (firstTime) {
      context.callback(this, this.renderCallback, coords.x, coords.y, radius, color, strokeWidth);
    }
    else {
      var circle = context.raphael();
      circle.attr({ cx: coords.x, cy: coords.y, r: radius, fill: color, 'stroke-width': strokeWidth });
    }
  }

});
