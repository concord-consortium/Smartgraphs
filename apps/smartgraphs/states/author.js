// ==========================================================================
// Project:   Smartgraphs.AUTHOR
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('states/ready');

/** @class

  The authoring mode of the application.

  @extends SC.Responder
  @version 0.1
*/
Smartgraphs.AUTHOR = SC.Responder.create(
/** @scope Smartgraphs.START.prototype */ {

  nextResponder: Smartgraphs.READY,
  
  didBecomeFirstResponder: function () {
    Smartgraphs.appWindowController.showAuthorView();
    Smartgraphs.toolbarController.showRunButton();
  },
  
  // ..........................................................
  // ACTIONS
  //
  
  openActivity: function () {
    Smartgraphs.LOADING_ACTIVITY.set('openAuthorViewAfterLoading', YES);
    return NO;    // let READY handle the rest.
  },
  
  runActivity: function () {
    Smartgraphs.LOADING_ACTIVITY.set('openAuthorViewAfterLoading', NO);
    Smartgraphs.makeFirstResponder(Smartgraphs.LOADING_ACTIVITY);
    return YES;
  }

}) ;
