// ==========================================================================
// Project:   Smartgraphs.Command Fixtures
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs */

sc_require('models/command');

Smartgraphs.Command.FIXTURES = [
  
  { guid: 
      'show-single-pane',
    
    name: 
      'showSinglePane',
    
    description:
      'Set the right-side display to show a single pane.',
    
    actionName:
      'showSinglePane',
      
    literalArgs:
      {},
      
    substitutedArgs:
      {}
  },
  
  { guid: 
      'show-image',
    
    name: 
      'showFirstPaneImage',
    
    description:
      'Set the right-side display to show an image in the first (or top) pane.',
    
    actionName:
      'showImage',
      
    literalArgs: {
      pane: 'first'
    },
      
    substitutedArgs:
      {}
  }
];
