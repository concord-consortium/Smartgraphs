// ==========================================================================
// Project:   Smartgraphs.ACTIVITY_PAGE_LOADING
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  @extends SC.Responder
  @version 0.1
*/

sc_require('states/activity');
sc_require('states/mixins/resource_loader');

Smartgraphs.ACTIVITY_PAGE_LOADING = SC.Responder.create(Smartgraphs.ResourceLoader,
/** @scope Smartgraphs.ACTIVITY_PAGE_LOADING.prototype */ {
  
  nextResponder: Smartgraphs.ACTIVITY,
  
  masterResource: {
    load: function () { return Smartgraphs.activityPageController.get('content').toArray().objectAt(0); }
  },
  
  subordinateResources: [
    { load: function () { return Smartgraphs.store.find(Smartgraphs.activityPageController.get('stepsQuery')); } }
  ],
  
  didBecomeFirstResponder: function () {  
    this.loadResources();
  },
  
  willLoseFirstResponder: function () {
    this.cancelLoading();
  },
  
  resourcesDidLoad: function () {
    Smartgraphs.activityStepController.set('content', Smartgraphs.activityPageController.get('firstStep'));
    Smartgraphs.makeFirstResponder(Smartgraphs.ACTIVITY_STEP_LOADING);
  }
  
  // ..........................................................
  // ACTIONS
  //
  
}) ;