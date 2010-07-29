// ==========================================================================
// Project:   Smartgraphs.LOGIN
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  The login state. 
  
  (The page displayed during this state should implement an "I'm new here" type button to switch to signup mode.)

  @extends SC.Responder
  @version 0.1
*/
Smartgraphs.LOGIN = SC.Responder.create(
/** @scope Smartgraphs.LOGIN.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: null,
  
  didBecomeFirstResponder: function() {
    // Called when this state becomes first responder
  },
  
  willLoseFirstResponder: function() {
    // Called when this state loses first responder
  },
  
  // ..........................................................
  // EVENTS
  //
  
  // add event handlers here
  someAction: function() {
    
  }
  
}) ;
