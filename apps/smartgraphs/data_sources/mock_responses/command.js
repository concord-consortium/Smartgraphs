// ==========================================================================
// Project:   Smartgraphs.Command mock server responses
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('data_sources/mock_responses/mock_responses');

// generated on the console by running:
//   Smartgraphs.mockResponseForRecordArray(Smartgraphs.store.find(Smartgraphs.Command), Smartgraphs.activityController.get('commandListUrl'))

Smartgraphs.mockResponses["/backend/commands"] = 
[
  {
    "url": "/backend/command/1/show-single-pane",
    "name": "showSinglePane",
    "description": "Set the right-side display to show a single pane.",
    "actionName": "showSinglePane",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/10/hide-pane",
    "name": "hidePane",
    "description": "Hide the first or second pane.",
    "actionName": "hidePane",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/11/wait-for-response",
    "name": "waitForResponse",
    "description": "Wait for a valid response before allowing submission.",
    "actionName": "waitForResponse",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/2/show-split-pane",
    "name": "showSplitPane",
    "description": "Set the right-side display to show two panes.",
    "actionName": "showSplitPane",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/3/show-image",
    "name": "showFirstPaneImage",
    "description": "Set the right-side display to show an image in the first (or top) pane.",
    "actionName": "showImage",
    "literalArgs": {
      "pane": "single"
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/4/show-graph",
    "name": "showGraph",
    "description": "Set the right-side display to show a graph.",
    "actionName": "showGraph",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/5/enable-submission",
    "name": "enableSubmission",
    "description": "Allows the user to submit his or her work on this step",
    "actionName": "enableSubmission",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/6/finish-step",
    "name": "finishActivityStep",
    "description": "Finishes this Activity step.",
    "actionName": "finishActivityStep",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/7/start-freehand-input",
    "name": "startFreehandInput",
    "description": "Open up the prediction graph.",
    "actionName": "startFreehandInput",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/8/goto-step",
    "name": "openActivityStep",
    "description": "Open a new activity step.",
    "actionName": "openActivityStep",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  },
  {
    "url": "/backend/command/9/start-sensor-input",
    "name": "startSensorInput",
    "description": "Open the controls that input data from a usb-connected sensor.",
    "actionName": "startSensorInput",
    "literalArgs": {
      
    },
    "substitutedArgs": {
      
    }
  }
];
