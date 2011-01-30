// ==========================================================================
// Project:   Smartgraphs.INTERACTIVE_SELECTION
// Copyright: ©2010 Concord Consortium
// @author:   Richard Klancer
// ==========================================================================
/*globals Smartgraphs */

/** @class

  In this application state, the student updates the 'points' property of an annotation by clicking on points in 
  a dataset. This can continue until we leave this state (for example, when the activity step is submitted.)

  @extends SC.State
  @version 0.1
*/
Smartgraphs.INTERACTIVE_SELECTION = SC.State.extend(
/** @scope Smartgraphs.INTERACTIVE_SELECTION.prototype */ {

  /**
   The annotation object we're updating
   
   @property {Smartgraphs.Annotation}
  */
  annotation: null,
  
  /** 
    The dataset we care about. dataPointSelected events associated with any other dataset will be ignored.

    @property {Smartgraphs.Dataset}
  */
  dataset: null,
  
  
  enterState: function () {
    // disable submission until a selection is made...
    Smartgraphs.statechart.sendAction('disableSubmission');
    
    var dataset = Smartgraphs.interactiveSelectionController.get('dataset');
    this._oldIsSelectable = dataset.get('isSelectable');
    dataset.set('isSelectable', NO);
    Smartgraphs.interactiveSelectionController.setPath('annotation.point', null);    
  },
  
  exitState: function () {
    var dataset = Smartgraphs.interactiveSelectionController.get('dataset');
    dataset.set('isSelectable', this._oldIsSelectable);
    Smartgraphs.interactiveSelectionController.set('dataset', null);
    Smartgraphs.interactiveSelectionController.set('annotation', null);
  },
  
  /** 
    This event is fired by DatapointViews whenever the user clicks on a data point. We ignore clicks on data points in
    datasets we don't care about.
    
    If this event comes from the dataset we care about, we update the annotation's 'point' property to the clicked-on
    point. This also enables activity step submission, if it was disabled.
  
    @param {Smartgraphs.DataPointView} dataPointView 
      The dataPointView that was clicked on
  */
  dataPointSelected: function (dataPointView) {
    var dataset = Smartgraphs.interactiveSelectionController.get('dataset');
    var point = dataPointView.get('content');
    
    if (dataset && point.get('dataset') === dataset) {
      Smartgraphs.interactiveSelectionController.setPath('annotation.point', point);
      Smartgraphs.statechart.sendAction('enableSubmission');
    }
  },
  
  /**
    Not allowed in this state. Returns YES but otherwise does nothing.
  */
  startInteractiveSelection: function () {
    return YES;
  }
  
}) ;
