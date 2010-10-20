// ==========================================================================
// Project:   Smartgraphs.sessionController
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Smartgraphs.sessionController = SC.ObjectController.create(
/** @scope Smartgraphs.sessionController.prototype */ {

  newSession: function () {
    var session = Smartgraphs.store.createRecord(Smartgraphs.Session, { steps: [] });
    session.set('user', Smartgraphs.userController.get('content'));
    session.set('id', Smartgraphs.getNextGuid());
    this.set('content', session);
  },
  
  createSeries: function (name) {
    var newSeries = Smartgraphs.store.createRecord(Smartgraphs.DataSeries, { 
      isExample: NO,
      name: name,
      points: []
    });
    newSeries.set('session', this.get('content'));
    newSeries.set('id', Smartgraphs.getNextGuid());
    
    return newSeries;
  },
  
  createAnnotation: function (type, name) {
    var newAnnotation = Smartgraphs.store.createRecord(type, {
      isExample: NO,
      name: name
    });
    newAnnotation.set('session', this.get('content'));
    newAnnotation.set('id', Smartgraphs.getNextGuid());
        
    return newAnnotation;
  }
  
  // NOT CURRENTLY USED:
  // TODO: change to 'copy example object to session' or the like. (but only if we really need that functionality)
  
  // copyExampleSeries: function (exampleSeriesName, targetSeriesName) {
  //   // get the example series
  //   var query = SC.Query.local(
  //     Smartgraphs.DataSeries, 
  //     'isExample=YES AND name={seriesName}', 
  //     { seriesName: exampleSeriesName }
  //   );
  // 
  //   var exampleSeriesList = Smartgraphs.store.find(query);
  //   if (exampleSeriesList.get('length') < 1) return NO;
  //   
  //   var exampleSeries = exampleSeriesList.objectAt(0);
  //   
  //   // get the series we're copying into
  //   query = SC.Query.local(
  //     Smartgraphs.DataSeries,
  //     'isExample=NO AND session={session} AND name={seriesName}',
  //     { session: this.get('content'), name: targetSeriesName }
  //   );
  //   var targetSeriesList = Smartgraphs.store.find(query);
  //   
  //   if (targetSeriesList.get('length') < 1) return NO;
  //   var targetSeries = targetSeriesList.objectAt(0);
  //   
  //   // copy all the data points
  //   var examplePoints = exampleSeries.get('points');
  //   var point, newPoint;
  //   for (var i = 0, ii = examplePoints.get('length'); i < ii; i++) {
  //     point = examplePoints[i];
  //     newPoint = Smartgraphs.store.createRecord(Smartgraphs.DataPoint, { x: point.get('x'), y: point.get('y') });
  //     newPoint.set('id', Smartgraphs.getNextGuid());
  //     newPoint.set('series', targetSeries);
  //   }
  //   
  //   return YES;
  // }
  
}) ;
