// ==========================================================================
// Project:   Smartgraphs.Graph Fixtures
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('models/graph');

Smartgraphs.Graph.FIXTURES = [

  { guid: 
      'prediction-away',
    name:
      'prediction-away',
    description: 
      'Prediction graph of movement away',
    axes:
      'prediction-away-axes',
    allSeries: 
      []
  },
  
  
  { guid: 
      'prediction-toward',
    name:
      'prediction-toward',
    description: 
      'Prediction graph of movement towards',
    axes:
      'prediction-toward-axes',
    allSeries: 
      []
  },
  
  
  { guid: 
      'sensor-1',
    name:
      'sensor-1',
    description: 
      'Playing around with the sensor in page 3',
    axes:
      'sensor-1-axes',
    allSeries: 
      []
  }
];
