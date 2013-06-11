/*globals Smartgraphs RaphaelViews describe it expect xit xdescribe beforeEach afterEach spyOn runs waits waitsFor
 clickOn fillIn defineJasmineHelpers runBeforeEach runAfterEach */

defineJasmineHelpers();

describe("ConnectedLineView with a clipping rectangle", function () {

  var pane = SC.MainPane.create(),
      xAxis = SC.Object.create({ min: 1960, max: 2010}),
      yAxis = SC.Object.create({ min: 300, max: 375 }),
      connectedLineObject,
      controller,
      graphView,
      layer;

  runBeforeEach( function () {
    connectedLineObject = Smartgraphs.ConnectedLine.create({
      "points": [
        [
          1960,
          300.00
        ],
        [
          1961,
          1317.64 // > yMax
        ],
        [
          1962,
          318.45
        ],
        [
          2008,
          385.59
        ],
        [
          2009,
          187.38  // < yMin
        ],
        [
          2010,
          389.78
        ]
      ],

      color: '#000'
    });

    controller = Smartgraphs.GraphController.create();
    controller.clear();
    controller.set('xAxis', xAxis);
    controller.set('yAxis', yAxis);

    controller.get('graphableDataObjects').pushObject(connectedLineObject);

    graphView = Smartgraphs.GraphView.create({ graphController: controller });
    pane.append();
    pane.appendChild(graphView);
  });

  runAfterEach( function () {
    pane.removeAllChildren();
    pane.remove();
  });

  describe("graph view data holder", function () {

    var dataHolder;

    beforeEach( function () {
      dataHolder = graphView.get('dataHolder');
    });

    it("should have one child view", function () {
      expect(dataHolder.getPath('childViews.length')).toEqual(1);
    });

    describe("its child view", function () {

      var connectedLineView;

      beforeEach( function () {
        connectedLineView = dataHolder.getPath('childViews.0');
      });

      it("should be the correct view class for a connected line view", function () {
        expect(connectedLineView).toBeA(connectedLineObject.get('viewClass'));
      });

      describe("its Raphael path", function () {
        var path,
            clipRect;


        beforeEach( function () {
          var raphaelAttributes;

          path = connectedLineView.get('layer').raphael.attr().path;
          raphaelAttributes = connectedLineView.get('layer').raphael.attr();
          clipRect = raphaelAttributes['clip-rect'];

          this.addMatchers({
            toBeWithinOneUnitOf: function (value) {
              return Math.abs(this.actual - value) <= 1;
            }
          });
        });

        it("should have a clipping rectangle", function () {
          expect(clipRect).toBeDefined();
          expect(clipRect.length).toEqual(4);
        });

        it("should have the same clipping rectangle as the graphView clipping rectangle", function () {
          clipRectFromView = graphView.get('clipRect');
          expect(clipRect[0]).toEqual(clipRectFromView[0]);
          expect(clipRect[1]).toEqual(clipRectFromView[1]);
          expect(clipRect[2]).toEqual(clipRectFromView[2]);
          expect(clipRect[3]).toEqual(clipRectFromView[3]);
        });

        it("should also include points where the Y value is < yMin or > yMax", function () {
          expect(path.length).toEqual(6);
        });
      });
    });
  });

});
