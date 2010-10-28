// ==========================================================================
// Project:   Smartgraphs.HighlightedPoint Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs */

sc_require('models/highlighted_point');

Smartgraphs.HighlightedPoint.FIXTURES = [

  // need to have some fixtures or fixturesDataSource's updateRecords() thinks it can't handle the record.
  // http://github.com/sproutcore/sproutcore/issues/#issue/36
  { url: '/backend/activity/1/annotations/walking-first-point',
    name: 'walking-first-point',
    activity: '/backend/activity/1',
    isExample: YES,
    session: null,
    point: 1
  },

  { url: '/backend/activity/2/annotations/where-maria-stopped',
    name: 'where-maria-stopped',
    activity: '/backend/activity/2',
    isExample: YES,
    session: null,
    point: 403
  },

  { url: '/backend/activity/3/test-highlighted-point',
    name: 'test-highlighted-point',
    activity: '/backend/activity/3',    
    isExample: YES,
    session: null,
    point: 410
  }

];
