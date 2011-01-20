// ==========================================================================
// Project:   Smartgraphs.TableView
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs RaphaelViews */

/** @class

  A view for displaying table data.

  @extends SC.View
*/

sc_require('views/table_item');

Smartgraphs.TableView = SC.View.extend(
/** @scope Smartgraphs.TableView.prototype */ {
  
  showTableBinding: '*tableController.showTable',
  showLabelsBinding: '*tableController.showLabels',
  datasetBinding: '*tableController.dataset',
  latestXBinding: '*tableController.latestX',
  latestYBinding: '*tableController.latestY',
  annotationListBinding: '*tableController.annotationList',
  
  init: function () {
    this._viewsByClassAndId = {};
    sc_super();
  },
  
  fix: function (val, n) {
    return (val === undefined || val === null) ? null : val.toFixed(n);
  },
  
  numericX: function () {
    return this.fix(this.get('latestX'), 1);
  }.property('latestX').cacheable(),
  
  numericY: function () {
    return this.fix(this.get('latestY'), 2);    
  }.property('latestY').cacheable(), 
  
  layout: { top: 10, bottom: 10 },

  childViews: ['numericView', 'tableColumnView'],
  
  numericView: SC.View.design({
    layout: { width: 300, centerX: -10, height: 90, centerY: -10 },
    
    childViews: ['xs', 'ys'],
    
    xs: SC.View.design({
      layout: { left: 0, width: 100 },
      childViews: ['xLabel', 'xValue'],
      
      xLabel: SC.LabelView.design({
        classNames: ['smartgraph-numeric-view-label'],
        layout: { top: 0, height: 25 },
        textAlign: SC.ALIGN_RIGHT,
        valueBinding: '.parentView.parentView.parentView.xLabel'
      }),
      
      xValue: SC.LabelView.design({
        classNames: ['smartgraph-numeric-view-value'],        
        layout: { top: 40 },
        // make the decimals (approximately) line up
        textAlign: SC.ALIGN_RIGHT,
        valueBinding: '.parentView.parentView.parentView.numericX'
      })
    }),
    
    ys: SC.View.design({
      layout: { right: 0, width: 120 },
      
      childViews: ['yLabel', 'yValue'],
      
      yLabel: SC.LabelView.design({
        classNames: ['smartgraph-numeric-view-label'],        
        layout: { top: 0, height: 25 },
        textAlign: SC.ALIGN_RIGHT,
        valueBinding: '.parentView.parentView.parentView.yLabel'
      }),
      
      yValue: SC.LabelView.design({
        classNames: ['smartgraph-numeric-view-value'],          
        layout: { top: 40 },
        textAlign: SC.ALIGN_RIGHT,
        valueBinding: '.parentView.parentView.parentView.numericY'
      })
    })
  }),
  
  tableColumnView: SC.View.design({
    layout: { width: 350, centerX: 0 },
    
    childViews: ['labelsView', 'scrollView'],
    
    labelsView: SC.View.design({
      isVisibleBinding: '.parentView.parentView.showLabels',
      
      layout: { left: 0, top: 0, width: 350, height: 30 },
      classNames: ['smartgraph-table'],
      childViews: ['xsLabel', 'ysLabel'],

      xsLabel: SC.LabelView.design({    
        layout: { left: 50, top: 0, width: 120, height: 25 },
        valueBinding: '.parentView.parentView.parentView.xLabel'
      }),

      ysLabel: SC.LabelView.design({
        layout: { right: 50, top: 0, width: 120, height: 25 },
        valueBinding: '.parentView.parentView.parentView.yLabel'
      })
    }),
  
    scrollView: SC.ScrollView.design({
      layout: { left: 0, top: 35, width: 350 },
      borderStyle: SC.BORDER_NONE,
    
      contentView: SC.View.design({
        classNames: ['smartgraph-table'],

        rowHeight: 20,
        contentBinding: '.parentView.parentView.parentView.parentView*tableController.arrangedObjects',
        selectionBinding: '.parentView.parentView.parentView.parentView*tableController.selection',
        isSelectableBinding: '.parentView.parentView.parentView.parentView*tableController.isSelectable',
        contentLengthBinding: '.content.length',
        annotationsListBinding: '.parentView.parentView.parentView.parentView*tableController.annotationsList',
        // TODO: So the parent now knows about the list of annotations...
        
        contentLengthDidChange: function () {
          this.adjust('height', this.get('contentLength') * this.get('rowHeight'));
        }.observes('contentLength'),
      
        childViews: ['backdrop', 'xsView', 'ysView'],

        backdrop: RaphaelViews.RaphaelCanvasView.design({
          // This is the canvas behind the table, used for adding notes
          layout: { zIndex: 0, width: 350 },

          childViews: 'annotationsHolder'.w(),

          // Holds the annotation views.
          annotationsHolder: RaphaelViews.RaphaelView.design({
          })
        }),

        xsView: SC.ListView.design({
          layout: { left: 50, top: 0, width: 120 },

          rowHeightBinding: '.parentView.rowHeight',
          canEditContent: NO,
          contentValueKey: 'xRounded',
          contentBinding: '.parentView.content',
          isSelectableBinding: '.parentView.isSelectable',
          selectionBinding: '.parentView.selection',
          exampleView: Smartgraphs.TableItemView
        }),

        ysView: SC.ListView.design({
          // using left: rather than right: keeps the ysView from being pushed to the left when the scroll bar appears
          layout: { left: 180, top: 0, width: 120 },
      
          rowHeightBinding: '.parentView.rowHeight',
          canEditContent: NO,
          contentValueKey: 'yRounded',
          contentBinding: '.parentView.content',
          isSelectableBinding: '.parentView.isSelectable',          
          selectionBinding: '.parentView.selection',
          exampleView: Smartgraphs.TableItemView          
        })
      })
    })
  }),
  
  datasetDidChange: function () {
    this.invokeOnce('adjustViews');
  }.observes('dataset'),
  
  showTableDidChange: function () {
    this.invokeOnce('adjustViews'); 
  }.observes('showTable'),
  
  annotationListDidChange: function () {
    // Added an annotation; now we need to adjust the canvas
    var list = this.get('annotationList');
    var item, classKey, id;
    var desiredViewsByClassAndId = {};

    // add views for items (datasets or annotations) not currently in the list of child views
    for (var i = 0, ii = list.get('length'); i < ii; i++) {
      item = list.objectAt(i);

      // I believe this is the most cross-browser-compatible way to get a unique key representing the class of the item
      classKey = SC.guidFor(item.constructor);
      id = item.get('id');

      // Add to the list of views we want to have
      if (desiredViewsByClassAndId[classKey] === undefined) {
        desiredViewsByClassAndId[classKey] = {};
      }

      desiredViewsByClassAndId[classKey][id] = item;     // for our reference when we remove views

      if (!this._viewsByClassAndId[classKey] || !this._viewsByClassAndId[classKey][id]) { 
        // If this view isn't already in the list, add it 
        this._addViewForItemToBackdrop(item, 'annotation');
      }
    }

    // remove views for no-longer-to-be-displayed items
    var oldView;

    for (classKey in this._viewsByClassAndId) {
      if (this._viewsByClassAndId.hasOwnProperty(classKey)) {
        for (id in this._viewsByClassAndId[classKey]) {
          if (this._viewsByClassAndId[classKey].hasOwnProperty(id)) {
            oldView = this._viewsByClassAndId[classKey][id]; // Get the existing view

            if (!desiredViewsByClassAndId[classKey] || !desiredViewsByClassAndId[classKey][id]) {
              // if the old view isn't in our list of desired views, remove it
              this._removeViewFromBackdrop(oldView);
            }
          }
        }
      }
    }
  }.observes('*annotationList.[]'),
  
  adjustViews: function () {
    var tableColumnView = this.get('tableColumnView');
    var scrollView = tableColumnView.get('scrollView');
    var innerView = scrollView.get('contentView');
    var numericView = this.get('numericView');
    
    if (this.get('showTable')) {
      numericView.set('isVisible', NO);
      innerView.bindings.forEach( function (b) { b.connect(); } );
      tableColumnView.set('isVisible', YES);
      
      // innerView's content depends on parentView, which isn't set until the end of the runloop. Without the 
      // line below, the scroll view believes it's contentView's height is 0
      this.invokeLast(function () {
        innerView.adjust('height', innerView.getPath('content.length') * innerView.get('rowHeight'));
      });
    }
    else {
      numericView.set('isVisible', YES);
      innerView.bindings.forEach( function (b) { b.disconnect(); });
      tableColumnView.set('isVisible', NO);       
    }
  },
  
  /**
    Adds an annotation view to the backdrop SVG
  */
  _addViewForItemToBackdrop: function (item, itemType) {
    var classKey = SC.guidFor(item.constructor);

    // create the view for the item we're adding
    var view = item.constructor.viewClass.design({
        item: item,
        itemType: itemType
    }).create();
    
    // append view to the canvas
    if (view.get('canShowInTable')) {
      this.getPath('tableColumnView.scrollView.contentView.backdrop.annotationsHolder').appendChild(view);
      // Accounting
      if (this._viewsByClassAndId[classKey] === undefined) {
        this._viewsByClassAndId[classKey] = {};
      }    
      this._viewsByClassAndId[classKey][item.get('id')] = view;
    }

  },
  
  /**
    Removes an annotation view from the backdrop SVG
  */
  _removeViewFromBackdrop: function (view) {
    var item = view.get('item');
    var itemType = view.get('itemType');
    var classKey = SC.guidFor(item.constructor);
    var id = item.get('id');
    
    delete this._viewsByClassAndId[classKey][id];
    
    this.getPath('tableColumnView.scrollView.contentView.backdrop.annotationsHolder').removeChild(view);
  }
  
});
