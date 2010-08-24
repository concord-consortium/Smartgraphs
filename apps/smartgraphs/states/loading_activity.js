// ==========================================================================
// Project:   Smartgraphs.LOADING_ACTIVITY
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  Loading state for Activity view. (Not called ACTIVITY_LOADING because it is not an ACTIVITY substate)

  @extends SC.Responder
  @extends Smartgraphs.ResourceLoader
  @version 0.1
*/

sc_require('states/ready');
sc_require('states/mixins/resource_loader');

Smartgraphs.LOADING_ACTIVITY = SC.Responder.create(Smartgraphs.ResourceLoader,
/** @scope Smartgraphs.LOADING_ACTIVITY.prototype */ {

  nextResponder: Smartgraphs.READY,
  
  masterResource: {
    load: function () { return Smartgraphs.activityController.get('content'); }
  },
  
  subordinateResources: [
    { load: function () { return Smartgraphs.store.find(Smartgraphs.activityController.get('pagesQuery')); } },
    { load: function () { return Smartgraphs.store.find(Smartgraphs.ALL_TRIGGERS_QUERY); } },
    { load: function () { return Smartgraphs.store.find(Smartgraphs.ALL_COMMANDS_QUERY); } }    
  ],
  
  didBecomeFirstResponder: function () {
    if (this.loadResources()) {
      return;
    }
    Smartgraphs.appWindowController.showActivityLoadingView();
  },
  
  willLoseFirstResponder: function () {
    this.cancelLoading();
  },
  
  resourcesDidLoad: function () {
    Smartgraphs.makeFirstResponder(Smartgraphs.ACTIVITY_START);
  },

  resourceLoadingError: function () {
    Smartgraphs.makeFirstResponder(Smartgraphs.ERROR_LOADING_ACTIVITY);
  },
  
  // ..........................................................
  // ACTIONS
  //
  
  // Handle 're-entrance' (opening a activity while we're still waiting for another activity to load)
  openActivity: function (context, args){
    if (args.id === Smartgraphs.activityController.getPath('content.id')) {
      // do nothing if it's a repeat request to load the same id
      return YES;
    }
    
    //  let READY handle opening the new activity, but we need to resetFirstResponder because the
    // 'makeFirstResponder' call in READY won't cause our didBecomeFirstResponder method to be called again
    Smartgraphs.invokeLater(Smartgraphs.resetFirstResponder);
    return NO;
  }
  
}) ;
