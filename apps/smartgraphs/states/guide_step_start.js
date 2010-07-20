// ==========================================================================
// Project:   Smartgraphs.GUIDE_STEP_START
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs */

/** @class

  State representing that the guide step is starting. Transitions immediately to GUIDE_STEP_WAITING
  
  @extends SC.Responder
  @version 0.1
*/
Smartgraphs.GUIDE_STEP_START = SC.Responder.create(
/** @scope Smartgraphs.GUIDE_STEP_START.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: Smartgraphs.GUIDE,
  
  didBecomeFirstResponder: function() {
    console.log('GUIDE_STEP_START.didBecomeFirstResponder');
    Smartgraphs.guideStepController.initStep();
  },
  
  willLoseFirstResponder: function() {
    console.log('GUIDE_STEP_START.willLoseFirstResponder');
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  someAction: function() {
    
  }
  
}) ;
