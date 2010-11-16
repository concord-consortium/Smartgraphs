// ==========================================================================
// Project:   Smartgraphs.ACTIVITY
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  Superstate representing that the application is running a Activity.

  @extends SC.Responder
  @version 0.1
*/

sc_require('states/ready');

Smartgraphs.ACTIVITY = SC.Responder.create(
/** @scope Smartgraphs.ACTIVITY.prototype */ {
  
  nextResponder: Smartgraphs.READY,       // the default; if some other app state implements the openActivity action in 
                                          // some way, presumably that state should set itself as our nextResponder
  
  didBecomeFirstResponder: function() {
    Smartgraphs.appWindowController.showActivityView();
  },
  
  willLoseFirstResponder: function () {
    Smartgraphs.activityController.cleanup();
  },
  
  // ..........................................................
  // ACTIONS
  //
  
  /** 
    Create a LineThroughPoints with the name lineName in the current session. Takes two HighlightedPoints as the 
    points through which to draw the line
    
    The LineThroughPoints is not automatically added to the graph.
    
    This method does nothing if there is no dataset with the passed name, or if it is not open in the graph
    with graphName.
    
    @param context
    @param args
    
    @param {String} args.graphName
      The name of the graph on which the dataset with the selected point must be displayed. This graph must be open in 
      the page when this command executes.
    @param {String} args.firstPoint
      The name of one HighlightedPoint annotation.
    @param {String} args.secondPoint
      The name of the other HighlightedPoint annotation.      
    @param {String} args.lineName
      The name given to the session-scoped LineThroughPoints annotation which will be created.
  */
  createLineThroughPoints: function (context, args) {
    // given the graphName, find the associated graph controller
    var controller = Smartgraphs.GraphController.controllerForName[args.graphName];
  
    if (!controller) return YES;
    
    var firstAnnotation = controller.findAnnotationByName(args.firstPoint);
    var secondAnnotation = controller.findAnnotationByName(args.secondPoint);
    
    // set points (a relation) using ids rather than objects, because createAnnotation works like createRecord
    // in that regard (it works on the datahash underlying the record)
    var lineThroughPoints = 
      Smartgraphs.sessionController.createAnnotation(Smartgraphs.LineThroughPoints, args.lineName, { 
        point1: firstAnnotation.get('point').get('id'),
        point2: secondAnnotation.get('point').get('id')
      });
    
    return YES;
  }
  
}) ;
