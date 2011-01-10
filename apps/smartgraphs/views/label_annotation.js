// ==========================================================================
// Project:   Smartgraphs.LabelAnnotationView
// Copyright: ©2011 Concord Consortium
// @author    Parker Morse <pmorse@cantinaconsulting.com>
// ==========================================================================
/*globals Smartgraphs RaphaelViews */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Smartgraphs.LabelAnnotationView = RaphaelViews.RaphaelView.extend(
/** @scope Smartgraphs.LabelAnnotationView.prototype */ {

  /**
    SproutCore will call render(context, firstTime == NO) if these properties change
  */
  displayProperties: 'item.label stroke size item.xOffset item.yOffset isHighlighted strokeWidth'.w(),
  
  canShowInTable: NO, // TODO: Maybe eventually yes?
  
  selectedColor: '#aa0000',
  notSelectedColorBinding: '.item.color',
  isHighlightedBinding: '.item.isHighlighted',
  highlightedStrokeWidth: 2,
  notHighlightedStrokeWidth: 1,
  // labelBinding: '.item.label', // Frustratingly, this doesn't work.
  isSelected: NO,
  
  ox: null,
  oy: null,
  
  strokeWidth: function () {
    return (this.get('isHighlighted') ? this.get('highlightedStrokeWidth') : this.get('notHighlightedStrokeWidth'));
  }.property('isHighlighted', 'highlightedStrokeWidth', 'notHighlightedStrokeWidth').cacheable(),
  
  stroke: function() {
    return (this.get('isSelected') ? this.get('selectedColor') : this.get('notSelectedColor'));
  }.property('isSelected', 'selectedColor', 'notSelectedColor').cacheable(),

  // mouseEntered: function () {
  // },
  // 
  // mouseExited: function () {
  // },
  // 

  // Raphael offers a drag and drop functionality, using a drag(start,
  // move, end) method (see http://raphaeljs.com/reference.html#drag-n-drop
  // ). The start, move, and end parameters are themselves functions - event 
  // handlers - which Raphael expects the developer to make available; 
  // the idea is that the start method is an opportunity to preserve starting 
  // state (i.e. remember the start position), move is a method which accepts 
  // dy and dx as movement vectors, and end does cleanup from the move.
  // 
  // In the case of the LabelAnnotations, which now have xOffset and
  // yOffset parameters to describe where they appear in the SVG space,
  // essentially start would preserve the starting xOffset and yOffset from
  // the SproutCore object (or perhaps the starting cx and cy from the
  // view's positioning), move would modify the cx/cy, and end would figure
  // the cumulative dx/dy of the move, using the values saved in start, and
  // write that new value back to the SproutCore object.
  // 
  // The thing I *haven't* figured out yet is the scoping, i.e. where to
  // define those event handlers to make them available to Raphael while
  // also knowing enough about both the SproutCore object and the Raphael
  // object to do their jobs.
  
  // The following three methods were a pass at providing the relevant event
  // handlers; this might not be the place for them, nor do I claim that they
  // do all the jobs those event handlers are expected to do.

  // startDrag: function (labelObject) {
  //   // I have a hunch we're not going to get that labelObject argument
  //   this.set('ox', labelObject.attr("cx"));
  //   this.set('oy', labelObject.attr("cy"));
  // },
  // 
  // moveDrag: function (dx, dy) {
  //   // move will be called with dx and dy
  //   this.attr({cx: this.ox + dx, cy: this.oy + dy});
  // },
  // 
  // upDrag: function () {
  //     // restoring state
  // },
  // 
  // mouseDown: function(eventID) {
  //   this.toggleSelection();
  // 
  //   // get the Raphael path object from the context
  //   // Need the context...
  //   var labelObject = context.raphael();
  // 
  //   labelObject.drag(this.moveDrag, this.startDrag(labelObject), this.upDrag);
  //   // 'tee' the event, but don't consider the mouseDown handled; let the parent collection view
  //   // also handle it
  //   return NO;
  // },

  toggleSelection: function () {
    if (this.get('isSelected')) {
      this.set('isSelected', NO);
    }
    else {
      this.set('isSelected', YES);
    }
  },
  
  /**
    We are using renderCallback in views to call non-SC render methods like
    RaphaelCanvas.segmentPath with the correct attributes.
    This is done this way because Raphael methods shouldn't be called unless
    its tags are already in the DOM.
  */
  renderCallback: function(raphaelCanvas, attrs) {
    var label = raphaelCanvas.text(attrs.labelX, attrs.labelY, attrs.label).attr({'font-size': attrs.size});
    return label;
  },

  // Called by SC (by the parent view)
  render: function(context, firstTime) {
    var graphView = this.get('graphView');
    var label = this.get('item').get('label');
    var point = this.get('item').get('point');
    var size = this.get('item').get('size');
    var xOffset = this.get('item').get('xOffset');
    var yOffset = this.get('item').get('yOffset');
    
    var labelCoords = graphView.coordinatesForPoint(point.get('x'), point.get('y'));
    
    if (xOffset) {
      labelCoords.x += xOffset;
    }
    
    if (yOffset) {
      labelCoords.y += yOffset;
    }

    var attrs = {
      'label': label,
      'labelX': labelCoords.x,
      'labelY': labelCoords.y,
      'size': size,
      'stroke': this.get('stroke'),
      'stroke-width': this.get('strokeWidth')
    };

    // boolean firstTime: Does this view start from scratch and create HTML in a context object or does it just need
    // to update properties of a context object?

    if (firstTime) {
       // Queue up the callback with will create the Raphael path object on the SVG canvas, once it is created.
       // In non-Raphael views, context is not a SC object but SC expects it (it was created by SC.Pane.append() ) This
       // call creates a tag and CSS and stores it in the context. for rendering later (by by SC.Pane.append() using
       // innerHTML()
      context.callback(this, this.renderCallback, attrs);
    }
    else {
      // get the Raphael path object from the context
      var labelObject = context.raphael();
      // and update it
      labelObject.attr(attrs);
    }
  }

});