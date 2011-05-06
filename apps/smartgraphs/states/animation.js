// ==========================================================================
// Project:   Smartgraphs.SENSOR
// Copyright: ©2011 Concord Consortium
// Author:    Erich Ocean <erich.ocean@me.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  Superstate representing that the activity step is animatable.

  @extends SC.State
  @version 0.1
*/

Smartgraphs.ANIMATION = SC.State.extend(
/** @scope Smartgraphs.ANIMATION.prototype */ {
  
  initialSubstate: 'ANIMATION_DEFAULT',
  
  enterState: function () {
    var enableSucceeded = Smartgraphs.sensorController.enableInput();
    if ( !enableSucceeded ) {
      // FIXME with SC.Statechart there may be some cleaner way to refuse to enter the state
      this.gotoState('ACTIVITY_STEP_DEFAULT');
    }
  },
  
  exitState: function () {
    Smartgraphs.sensorController.disableInput();
    Smartgraphs.activityViewController.hideControls();
  },
  
  // ..........................................................
  // ACTIONS
  //
  
  sensorHasLoaded: function () {
    this.gotoState('SENSOR_LOADED');
    return YES;
  },
  
  waitForSensorToLoad: function () {
    this.gotoState('SENSOR_LOADING');
    return YES;
  },
  
  
  ANIMATION_DEFAULT: SC.State.design(),
  
  
  SENSOR_LOADING: SC.State.design({
    enterState: function () {
      Smartgraphs.activityViewController.showSensorLoadingView(Smartgraphs.sensorController.get('pane'));
    }
  }),
  
  
  SENSOR_LOADED: SC.State.design({

    enterState: function () {
      Smartgraphs.activityViewController.revealAllControls();
      Smartgraphs.activityViewController.showControls(Smartgraphs.sensorController.get('pane'));
    },
    
    initialSubstate: 'SENSOR_READY',

    
    SENSOR_READY: SC.State.design({
      
      enterState: function () {
        Smartgraphs.activityViewController.highlightStartControl();
      },

      startControlWasClicked: function () {
        return this.startSensor();
      },

      startSensor: function () {
        this.gotoState('SENSOR_RECORDING');
        return YES;
      }
    }),
    
    
    SENSOR_RECORDING:  SC.State.design({
      
      enterState: function () {
        Smartgraphs.sensorController.startRecording();
        Smartgraphs.activityViewController.highlightStopControl();   
      },

      exitState: function () {
        Smartgraphs.sensorController.stopRecording();
      },

      stopControlWasClicked: function () {
        return this.stopSensor();
      },

      stopSensor: function () {
        this.gotoState('SENSOR_STOPPED');
        return YES;
      }
    }),
    
    
    SENSOR_STOPPED: SC.State.design({
      
      enterState: function () {
        Smartgraphs.activityViewController.highlightClearControl();
      },

      clearControlWasClicked: function () {
        return this.clearSensor();
      },

      clearSensor: function () {
        Smartgraphs.sensorController.clearRecordedData();
        this.gotoState('SENSOR_READY');
        return YES;
      }
    })

  })
  
});
