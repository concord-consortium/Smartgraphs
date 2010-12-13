// ==========================================================================
// Project:   Smartgraphs.ACTIVITY_STEP_SUBMITTED Unit Test
// Copyright: ©2010 Concord Consortium
// @author:   Parker Morse <pmorse@cantinaconsulting.com>
// ==========================================================================
/*globals Smartgraphs module test ok equals same stop start setup teardown*/

module("Smartgraphs.ACTIVITY_STEP_SUBMITTED", {
  setup: function () {
    setup.store();
    
    setup.mock(Smartgraphs, 'ACTIVITY_STEP_SUBMITTED', Smartgraphs.ACTIVITY_STEP_SUBMITTED.extend({
      enterState: function () {}
    }));
    
    setup.mock(Smartgraphs, 'statechart', SC.Statechart.create({
      trace: YES,
      rootState: SC.State.design({
        initialSubstate: 'ACTIVITY_STEP_SUBMITTED',
        ACTIVITY_STEP_SUBMITTED: SC.State.plugin('Smartgraphs.ACTIVITY_STEP_SUBMITTED')
      })
    }));
    
    Smartgraphs.statechart.initStatechart();
  },

  teardown: function () {
    teardown.all();
  }
});

test("creating a HighlightedPoint record from the selection in a dataset", function () {
  expect(6);
  var startingAnnotationCount = Smartgraphs.store.find('Smartgraphs.HighlightedPoint').get('length');

  // FIXME: Using the fixtures here is brittle
  var graphName = 'walking-example-1'; // From motion toward and away in fixtures
  Smartgraphs.firstGraphController.openGraph(graphName); // Set the graph

  // get a dataset
  // This code actually "borrowed" from the method we're testing...
  var controller = Smartgraphs.GraphController.controllerForName[graphName];
  var dataset = controller && controller.findDatasetByName('walking-example-1');
  ok(dataset, "There is a graph controller and dataset");
  equals(dataset.get('selection'), null, "There is no datapoint selected yet");

  // select a point in the dataset
  dataset.set('selection', SC.SelectionSet.create());
  dataset.get('selection').addObject(dataset.get('points').firstObject());
  equals(dataset.get('selection').get('length'), 1, "The dataset has one point selected");

  // create the annotation
  var handlingState = Smartgraphs.statechart.sendAction('createHighlightedPointFromSelection', null, {'graphName': graphName, 'datasetName': 'walking-example-1', 'highlightedPointName': 'FirstPointOfSlope'});
  equals( handlingState.get('name'), 'ACTIVITY_STEP_SUBMITTED', "ACTIVITY_STEP_SUBMITTED should handle the createHighlightedPointFromSelection action");
  var currentAnnotationCount = Smartgraphs.store.find('Smartgraphs.HighlightedPoint').get('length');
  equals(currentAnnotationCount, startingAnnotationCount + 1, "There is one more HighlightedPoint");
  var newHp = Smartgraphs.store.find('Smartgraphs.HighlightedPoint').lastObject();
  equals(newHp.get('point'), dataset.get('selection').firstObject(), "The highlighted point is the first one from the dataset");
});