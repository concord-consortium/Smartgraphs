// ==========================================================================
// Project:   Smartgraphs.SENSOR_READY
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  State representing that the sensor applet is ready to record data to a data series.

  @extends SC.Responder
  @version 0.1
*/

sc_require('states/sensor');

Smartgraphs.SENSOR_READY = SC.Responder.create(
/** @scope Smartgraphs.SENSOR_READY.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: Smartgraphs.SENSOR,
  
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
