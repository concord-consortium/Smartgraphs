// ==========================================================================
// Project:   Smartgraphs.SENSOR_LOADED
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('states/sensor');

/** @class

  State representing that the sensor applet is ready to record data to a dataset

  @extends SC.Responder
  @version 0.1
*/

Smartgraphs.SENSOR_LOADED = SC.Responder.create(
/** @scope Smartgraphs.SENSOR_LOADED.prototype */ {

  /**
    The next state to check if this state does not implement the action.
  */
  nextResponder: Smartgraphs.SENSOR,
  
  didBecomeFirstResponder: function () {
    Smartgraphs.activityViewController.revealAllControls();
    Smartgraphs.activityViewController.showControls(Smartgraphs.sensorController.get('pane'));
    Smartgraphs.makeFirstResponder(Smartgraphs.SENSOR_READY);
  },
  
  willLoseFirstResponder: function () {
  }
  
  // ..........................................................
  // ACTIONS
  //
  
}) ;
