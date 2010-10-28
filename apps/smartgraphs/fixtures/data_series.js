// ==========================================================================
// Project:   Smartgraphs.DataSeries Fixtures
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('models/data_series');

Smartgraphs.DataSeries.FIXTURES = [
  // need to have some fixtures or fixturesDataSource's updateRecords() thinks it can't handle the record.
  
  { url: '/backend/activity/1/series/walking-example-1',
    name: 'walking-example-1',
    activity: '/backend/activity/1',
    isExample: YES,
    points: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76], 
    session: null,
    defaultColor: null
  },
  
  { url: '/backend/activity/1/series/walking-away-example',
    name: 'walking-away-example',
    activity: '/backend/activity/1',    
    isExample: YES,
    points: (function () { 
        var points = [];
        for (var i = 100; i <= 200; i+=2) {
          points.push(i);
        }
        return points;
      }()),
    session: null,
    defaultColor: null
  },
  
  { url: '/backend/activity/1/series/walking-toward-example',
    name: 'walking-toward-example',
    activity: '/backend/activity/1',    
    isExample: YES,
    points: (function () { 
      var points = [];
      for (var i = 201; i <= 301; i+=2) {
        points.push(i);
      }
      return points;
    }()),
    session: null,
    defaultColor: null
  },

  { url: '/backend/activity/2/series/maria',
    name: 'maria',
    activity: '/backend/activity/2',    
    isExample: YES,
    points: [400, 401, 402, 403, 404, 405, 406, 407, 408, 409],
    session: null,
    defaultColor: null
  },

  { url: '/backend/activity/3/series/test',
    name: 'test-dataset',
    activity: '/backend/activity/3',    
    isExample: YES,
    points: [410],
    session: null,
    defaultColor: null
  }
  
];

