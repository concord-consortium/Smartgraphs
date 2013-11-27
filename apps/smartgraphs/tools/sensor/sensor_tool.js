// ==========================================================================
// Project:   Smartgraphs.sensorTool
// Copyright: ©2011 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs, console, sensorAppletInterface */

sc_require('tools/tool');
sc_require('lib/sensor-applet-interface');

/** @class

  @extends Smartgraphs.Tool
*/
Smartgraphs.sensorTool = Smartgraphs.Tool.create(
/** @scope Smartgraphs.sensorTool.prototype */ {

  name: 'sensor',
  state: 'SENSOR_TOOL',

  datadefName: null,
  datadef: null,
  controlsPane: null,
  graphController: null,
  xMin: null,
  xMax: null,

  sensorIsReady: NO,
  downsampleRatio: 4,     // don't adjust for IE...?

  /**
    The time interval between data points returned by the sensor
  */
  dt: 0.1,

  applet: null,

  setup: function (args) {
    var datadef         = this.getDatadef(args.data),
        pane            = Smartgraphs.activityViewController.validPaneFor(args.controlsPane),
        graphController = this.graphControllerForPane(pane),
        xAxis;

    if (!datadef || !pane) {
      console.error("invalid setup for sensorTool");
      return;
    }

    if (!graphController) {
      console.error("sensorTool setup couldn't find correct graph controller");
      return;
    }

    this.set('datadef', datadef);
    this.set('datadefName', datadef.get('name'));
    this.set('controlsPane', pane);
    this.set('graphController', graphController);

    xAxis = graphController.get('xAxis');
    this.set('xMin', SC.none(args.xMin) ? xAxis && xAxis.get('min') : args.xMin);
    this.set('xMax', SC.none(args.xMax) ? xAxis && xAxis.get('max') : args.xMax);

    Smartgraphs.statechart.gotoState(this.get('state'));
  },

  clearSetup: function () {
    this.set('datadefName', null);
    this.set('datdef', null);
    this.set('controlsPane', null);
    this.set('graphController', null);
    // don't clear sensorIsReady!
  },

  initializeSensor: function() {
    if (this.applet) {
      return;
    }
    var self = this;

    Smartgraphs.sensorTool.applet = new sensorAppletInterface.GoIO({
      codebase: '/jnlp',
      sensorDefinitions: [sensorAppletInterface.sensorDefinitions['goMotion']],
      listenerPath: 'Smartgraphs.sensorTool.applet'
    });
    this.applet.append($('body'), function(error) {
      if (error) {
        // Don't throw because the user can still attempt to recover, or skip the sensor step
        console.error("Error loading applet: ", error);
        return;
      }

      SC.RunLoop.begin();
      self.set('sensorIsReady', YES);
      Smartgraphs.statechart.sendAction('sensorHasLoaded');
      SC.RunLoop.end();

      self.applet.on('data', function(d) {
        self.appletDataCallback(d);
      });
    });
  },

  startRecording: function () {
    this.setPath('datadef.isStreaming', YES);
    this._nSamples = 0;
    this.applet.start();
  },

  stopRecording: function () {
    this.setPath('datadef.isStreaming', NO);
    this.applet.stop();
  },

  clearRecordedData: function () {
    this.get('datadef').clearPoints();
  },

  appletDataCallback: function (data) {
    var dt              = this.get('dt'),
        downsampleRatio = this.get('downsampleRatio'),
        x = this._nSamples * dt,
        y = data[0];

    if (x > this.get('xMax')) {

      // 'stopSensor' action results in an applet method being called inline. This does not work
      // well in all browsers (they seem to trip up when the applet method is called from within
      // an applet callback.) Therefore, use setTimeout to trigger the stopSensor action after the
      // callback finishes. Note that using this.invokeLater() rather than setTimeout did not seem
      // to work (the invokeLater blocks queued up indefinitely.)

      setTimeout( function () {
        SC.RunLoop.begin();
        Smartgraphs.statechart.sendAction('stopSensor');
        SC.RunLoop.end();
      }, 10);

      return;
    }

    if ( this._nSamples % downsampleRatio === 0 ) {
      SC.RunLoop.begin();
      this.get('datadef').addPoint(x, y);
      SC.RunLoop.end();
    }

    this._nSamples++;
  }

});
