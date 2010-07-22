// ==========================================================================
// Project:   Smartgraphs.CommandInvocation Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs */

sc_require('models/command_invocation');

Smartgraphs.CommandInvocation.FIXTURES = [

  { guid: 
      'step-1-single-pane',
  
    command:
      'show-single-pane',
    
    triggerResponse:
      'page-1-begin',
    
    index:
      1,
    
    literalArgs:
      {},
    
    substitutedArgs:
      {}
  },
  
  
  { guid: 
      'step-1-show-image',
  
    command:
      'show-image',
    
    triggerResponse:
      'page-1-begin',
    
    index:
      2,
    
    literalArgs: { 
      path: sc_static('resources/arrow.jpg')
    },
    
    substitutedArgs: 
      {}
  },
  
  
  { guid: 
      'step-1-finish-step',
  
    command:
      'finish-step',
    
    triggerResponse:
      'page-1-begin',
    
    index:
      3,
    
    literalArgs: 
      {},
    
    substitutedArgs: 
      {}
  },
  
  
  { guid: 
      'step-2-split-pane',
  
    command:
      'show-split-pane',
    
    triggerResponse:
      'page-2-begin',
    
    index:
      1,
    
    literalArgs:
      {},
    
    substitutedArgs:
      {}
  },
  
  
  { guid: 
      'step-2-show-graph',
  
    command:
      'show-graph',
    
    triggerResponse:
      'page-2-begin',
    
    index:
      2,
    
    literalArgs: {
      pane: 'first',
      graphId: 'prediction-away'
    },
    
    substitutedArgs:
      {}
  },
  
  
  { guid: 
      'step-2-start-input',
  
    command:
      'start-prediction-graph-input',
    
    triggerResponse:
      'page-2-begin',
    
    index:
      3,
    
    literalArgs: {
      pane: 'first',
      seriesId: 'prediction-away-series',
      xMin: 0,
      xMax: 15
    },
    
    substitutedArgs:
      {}
  }
  
];
