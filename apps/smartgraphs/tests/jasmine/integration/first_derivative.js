/*global defineJasmineHelpers, runBeforeEach, beforeEach, describe, it, expect, xdescribe*/
/*jshint unused: false */

defineJasmineHelpers();

describe("FirstDerivative datadef", function () {
  var store, derivative;

  function setSource(type, source) {
    Smartgraphs.activityObjectsController.loadPredefinedObjects();

    derivative = store.createRecord(Smartgraphs.FirstDerivative, {
      url: 'derivative',
      sourceType: type,
      source: source.get('name')
    });
  }

  // Unfortunately, now we're stuck with separate "datarefs" and "datadefs".

  runBeforeEach(function() {

    // Unfortunately, dataref's sampling model is to populate a datadef which they find by name via
    // the activityObjectsController; the activityObjectsController depends on having the activity
    // and store set up.

    store = Smartgraphs.store = SC.Store.create().from(SC.FixturesDataSource.create());

    Smartgraphs.activityController.set('content', store.createRecord(Smartgraphs.Activity, {
      url: 'activity'
    }));

  });

  describe("when the source data is a dataref", function() {

    describe("and the dataref is a CompositeEquation", function() {
      runBeforeEach(function() {
        setSource('dataref', store.createRecord(Smartgraphs.CompositeEquation, {
          url: 'source-expression',
          activity: 'activity',
          name: 'source-expression',
          datadefName: 'Source',
          expression: 'y = x*x',
          xInterval: 2
        }));
      });

      describe("the derivative datadef", function() {
        it("should use the source data's xInterval and sample the data at the midpoints", function() {
          var sampleset = derivative.getNewSampleset({
            xMin: 0,
            xMax: 6
          });

          expect(sampleset.get('points')).toEqualPairs(
            [1, 2],
            [3, 6],
            [5, 10]
          );
        });
      });
    });

    describe("and the dataref is a LinearEquation", function() {
      runBeforeEach(function() {
        setSource('dataref', store.createRecord(Smartgraphs.LinearEquation, {
          url: 'source-expression',
          activity: 'activity',
          name: 'source-expression',
          datadefName: 'Source',
          xInterval: 2,
          expressionForm: 'slope-intercept',
          params: {
            slope: 1,
            yIntercept: 2
          }
        }));
      });

      describe("the derivative datadef", function() {
        it("should use the source data's xInterval and sample the data at the midpoints", function() {
          var sampleset = derivative.getNewSampleset({
            xMin: 0,
            xMax: 6
          });

          expect(sampleset.get('points')).toEqualPairs(
            [1, 1],
            [3, 1],
            [5, 1]
          );
        });
      });
    });

    describe("and the dataref is a SinusoidalEquation", function() {
      runBeforeEach(function() {
        setSource('dataref', store.createRecord(Smartgraphs.SinusoidalEquation, {
          url: 'source-expression',
          activity: 'activity',
          name: 'source-expression',
          datadefName: 'Source',
          xInterval: 0.2,
          expressionForm: 'sine-cosine',
          angularFunction: 'sine',
          params: {
            frequency: 1,
            amplitude: 1,
            phase: 0,
            centerAmplitude: 0
          }
        }));
      });

      describe("the derivative datadef", function() {
        it("should use the source data's xInterval and sample the data at the midpoints", function() {
          // Sampling approach here too?
          var sampleset = derivative.getNewSampleset({
            xMin: 0,
            xMax: 0.6
          });

          expect(sampleset.get('points')).toEqualPairs(
            { epsilon: 1e8 },
            [ (0.2 + 0) / 2, (Math.sin(0.2) - Math.sin(0)) / 0.2 ],
            [ (0.2 + 0.4) / 2, (Math.sin(0.4) - Math.sin(0.2)) / 0.2 ],
            [ (0.4 + 0.6) / 2, (Math.sin(0.6) - Math.sin(0.4)) / 0.2 ]
          );
        });
      });
    });
  });
});
