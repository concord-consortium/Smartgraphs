// ==========================================================================
// Project:   Smartgraphs.GraphView
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs RaphaelViews */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
Smartgraphs.GraphView = SC.View.extend( 
/** @scope Smartgraphs.GraphView.prototype */ {
  
  xAxisBinding: '*graphController.xAxis',
  yAxisBinding: '*graphController.yAxis',
  datasetListBinding: '*graphController.datasetList',
  annotationListBinding: '*graphController.annotationList',
  
  padding: { top: 15, right: 15, bottom: 45, left: 45 },  
  
  childViews: 'titleView graphCanvasView'.w(),
  
  init: function () {
    this._viewsByClassAndId = {};
    sc_super();
  },
  
  viewDidResize: function () {
    sc_super();
    this.replaceLayer();
  },
  
  annotationListDidChange: function () {
    this._itemListsDidChange();
  }.observes('*annotationList.[]'),
  
  datasetListDidChange: function () {
    this._itemListsDidChange();
  }.observes('*datasetList.[]'),
  
  _itemListsDidChange: function () {  
    var list = this.get('datasetList').concat(this.get('annotationList'));
    var item, classKey, id;
    var desiredViewsByClassAndId = {};
    
    var itemType, itemTypes = ['data', 'annotation'];
    
    for (var j = 0; j < itemTypes.length; j++ ) {
      itemType = itemTypes[j];
      list = this.get(itemType === 'data' ? 'datasetList' : 'annotationList');
      
      // add views for items (datasets or annotations) not currently in the list of child views
      for (var i = 0, ii = list.get('length'); i < ii; i++) {
        item = list.objectAt(i);

        // I believe this is the most cross-browser-compatible way to get a unique key representing the class of the item
        classKey = SC.guidFor(item.constructor);
        id = item.get('id');
      
        if (desiredViewsByClassAndId[classKey] === undefined) {
          desiredViewsByClassAndId[classKey] = {};
        }
      
        desiredViewsByClassAndId[classKey][id] = item;     // for our reference when we remove views
      
        if (!this._viewsByClassAndId[classKey] || !this._viewsByClassAndId[classKey][id]) {
          this._addViewForItem(item, itemType);
        }
      }
    }
    
    
    // remove views for no-longer-to-be-displayed items
    var oldView;
  
    for (classKey in this._viewsByClassAndId) {
      if (this._viewsByClassAndId.hasOwnProperty(classKey)) {
        for (id in this._viewsByClassAndId[classKey]) {
          if (this._viewsByClassAndId[classKey].hasOwnProperty(id)) {
            oldView = this._viewsByClassAndId[classKey][id];
          
            if (!desiredViewsByClassAndId[classKey] || !desiredViewsByClassAndId[classKey][id]) {
              this._removeView(oldView);
            }
          }
        }
      }
    }
  },
  
  
  _addViewForItem: function (item, itemType) {
    var viewClass = item.get('viewClass');
    if (!viewClass) return;
    
    var view = viewClass.create({
      graphView: this,
      controller: this.get('graphController'),
      item: item,
      itemType: itemType
    });
    
    // append data and annotations 
    if (itemType === 'data') {
      this.getPath('graphCanvasView.dataHolder').appendChild(view);
    }
    else if (itemType === 'annotation') {
      this.getPath('graphCanvasView.annotationsHolder').appendChild(view);
    }

    var classKey = SC.guidFor(item.constructor);
    if (this._viewsByClassAndId[classKey] === undefined) {
      this._viewsByClassAndId[classKey] = {};
    }    
    this._viewsByClassAndId[classKey][item.get('id')] = view;
  },
  
  
  _removeView: function (view) {
    var item = view.get('item');
    var itemType = view.get('itemType');
    var classKey = SC.guidFor(item.constructor);
    var id = item.get('id');
    
    delete this._viewsByClassAndId[classKey][id];
    
    if (view.willRemoveFromDataView) view.willRemoveFromDataView();
    
    if (itemType === 'data') {
      this.getPath('graphCanvasView.dataHolder').removeChild(view);
    }
    else if (itemType === 'annotation') {
      this.getPath('graphCanvasView.annotationsHolder').removeChild(view);
    }
  },  
  
  
  coordinatesForPoint: function (x, y) {
    var xAxis = this.get('xAxis');
    var yAxis = this.get('yAxis');

    if (!xAxis || !yAxis) return { x: -9999, y: -9999 };

    var xMin = xAxis.get('min'),
        xMax = xAxis.get('max'),
        yMin = yAxis.get('min'),
        yMax = yAxis.get('max');

    var frame = this.get('frame');
    var height = frame.height,
        width  = frame.width;
        
    var padding = this.get('padding');
    
    var plotWidth = width - padding.left - padding.right;
    var plotHeight = height - padding.top - padding.bottom;
    
    var xScale = plotWidth / (xMax - xMin);
    var yScale = plotHeight / (yMax - yMin);
    
    return { 
      x: padding.left + (x - xMin) * xScale,
      y: padding.top + plotHeight - (y - yMin) * yScale
    };
  },
  
  
  pointForCoordinates: function (x, y) {
    var xAxis = this.get('xAxis');
    var yAxis = this.get('yAxis');

    if (!xAxis || !yAxis) return undefined;

    var xMin = xAxis.get('min'),
        xMax = xAxis.get('max'),
        yMin = yAxis.get('min'),
        yMax = yAxis.get('max');

    var frame = this.get('frame');
    var height = frame.height,
        width  = frame.width;
        
    var padding = this.get('padding');
    
    var plotWidth = width - padding.left - padding.right;
    var plotHeight = height - padding.top - padding.bottom;
    
    var xScale = plotWidth / (xMax - xMin);
    var yScale = plotHeight / (yMax - yMin);
    
    return {
      x: xMin + (x - padding.left) / xScale,
      y: yMin + (padding.top + plotHeight - y) / yScale
    };
  },
  
  titleView: SC.LabelView.design({
    valueBinding: '.parentView*graphController.title',
    classNames: 'pane-label',
    layout: { width: 400, centerX: 0, height: 20, top: 20, zIndex: 1 },
    textAlign: SC.ALIGN_CENTER
  }),
  
  graphCanvasView: RaphaelViews.RaphaelCanvasView.design({

    layout: { zIndex: 0 },
    
    xAxisBinding: '.parentView.xAxis',
    yAxisBinding: '.parentView.yAxis',
    
    displayProperties: 'xAxis.min xAxis.max yAxis.min yAxis.max'.w(),
    
    childViews: 'axesView annotationsHolder dataHolder'.w(),
    
    axesView: RaphaelViews.RaphaelView.design({
      xAxisBinding: '.parentView.parentView.xAxis',
      yAxisBinding: '.parentView.parentView.yAxis',     
      paddingBinding: '.parentView.parentView.padding',
      
      childViews: 'inputArea xAxisView yAxisView'.w(),
      
      inputArea: RaphaelViews.RaphaelView.design({
        // axesBinding: '.parentView.parentView.parentView*axes',    // is this used anywhere?
        
        didCreateLayer: function () {
          // cache these rather than lookup the jquery object (graphView.$()) per mouse event
          this._graphView = this.getPath('parentView.parentView.parentView');
          this._$graphView = this._graphView.$();
        },
        
        renderCallback: function (raphaelCanvas, xLeft, yTop, plotWidth, plotHeight) {          
          return raphaelCanvas.rect(xLeft, yTop, plotWidth, plotHeight).attr({
            fill: '#ffffff', stroke: '#ffffff', opacity: 0.7 
          });
        },
        
        render: function (context, firstTime) {
          var frame = this.getPath('parentView.parentView.frame');
          var padding = this.getPath('parentView.parentView.parentView.padding');

          var xLeft = frame.x + padding.left;
          var yTop = frame.y + padding.top;
          var plotWidth = frame.width - padding.left - padding.right;
          var plotHeight = frame.height - padding.top - padding.bottom;
          
          if (firstTime) {
            context.callback(this, this.renderCallback, xLeft, yTop, plotWidth, plotHeight);
          }
          else {       
            var rect = context.raphael();
            rect.attr({x: xLeft, y: yTop, width: plotWidth, height: plotHeight});
          }
        },
        
        coordsForEvent: function (e) {
          var graphOffset = this._$graphView.offset();
          return { x: e.pageX - graphOffset.left, y: e.pageY - graphOffset.top };
        },

        mouseDown: function (evt) {
          this._graphController = this._graphView.get('graphController');
          var coords = this.coordsForEvent(evt);
          var point = this._graphView.pointForCoordinates(coords.x, coords.y);
          return this._graphController.inputAreaMouseDown(point.x, point.y);
        },

        mouseDragged: function (evt) {
          var coords = this.coordsForEvent(evt);  
          var point = this._graphView.pointForCoordinates(coords.x, coords.y);
          return this._graphController.inputAreaMouseDragged(point.x, point.y);
        },

        mouseUp: function (evt) {
          var coords = this.coordsForEvent(evt);
          var point = this._graphView.pointForCoordinates(coords.x, coords.y);
          return this._graphController.inputAreaMouseUp(point.x, point.y);
        }
      }),
      
      xAxisView: Smartgraphs.AxisView.design({
        axisBinding: '.parentView.parentView.parentView.xAxis',
        type: 'x'
      }),
      
      yAxisView: Smartgraphs.AxisView.design({
        axisBinding: '.parentView.parentView.parentView.yAxis',
        type: 'y'
      })
    }),
    
    // Holds the annotation views. Should be earlier in the DOM (and thus "behind") the dataset views
    annotationsHolder: RaphaelViews.RaphaelView.design({
    }),

    // Holds the dataset views. Should be later in the DOM (and thus "in front of") the annotation views.
    dataHolder: RaphaelViews.RaphaelView.design({
    })
  })
});
