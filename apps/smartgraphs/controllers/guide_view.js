// ==========================================================================
// Project:   Smartgraphs.guideViewController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Smartgraphs.guideViewController = SC.ObjectController.create(
/** @scope Smartgraphs.guideViewController.prototype */ {

  dataViewNowShowing: null,
  firstPaneNowShowing: null,
  secondPaneNowShowing: null,
  firstImageValue: null,
  secondImageValue: null,
  
  showSinglePane: function () {
    this.set('dataViewNowShowing', 'Smartgraphs.guidePage.singlePaneDataView');
  },
  
  showSplitPane: function () {
    this.set('dataViewNowShowing', 'Smartgraphs.guidePage.splitPaneDataView');    
  },
  
  showImage: function (pane, path) {
    if (pane === 'first') {
      this.set('firstImageValue', path);
      this.set('firstPaneNowShowing', 'Smartgraphs.guidePage.firstImageView');
      return YES;
    }
    
    if (pane === 'second') {
      this.set('secondImageValue', path);
      this.set('secondPaneNowShowing', 'Smartgraphs.guidePage.secondImageView');
      return YES;
    }
    
    return NO;
  },
  
  showGraph: function (pane, graphId) {
    if (pane === 'first') {
      Smartgraphs.firstGraphController.openGraph(graphId);
      this.set('firstPaneNowShowing', 'Smartgraphs.guidePage.firstGraphView');
      return YES;
    }
    
    if (pane === 'second') {
      Smartgraphs.secondGraphController.openGraph(graphId);      
      this.set('secondPaneNowShowing', 'Smartgraphs.guidePage.secondGraphView');
      return YES;
    }
    
    return NO;
  },
  
  hidePane: function (pane) {
    if (pane === 'first') {
      this.set('firstPaneNowShowing', null);
      return YES;
    }
    
    if (pane === 'second') {  
      this.set('secondPaneNowShowing', null);
      return YES;
    }
    
    return NO;
  },
  
  // for graphViewController
  createSeriesView: function (series) {    
  },
  
  removeSeriesView: function (series) {
  }

}) ;
