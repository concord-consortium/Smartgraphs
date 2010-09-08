// ==========================================================================
// Project:   Smartgraphs.ActivityStep mock server responses
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('data_sources/mock_responses/mock_responses');

// ActivityStep list urls for the ActivityPages in first Activity
// generated on the console by running:
//   Smartgraphs.addStepListUrlsToPages()
//   Smartgraphs.generateStepListMockResponses()

// later:
//   Smartgraphs.addListUrlsToSteps()
//   Smartgraphs.generateStepListMockResponses()

Smartgraphs.mockResponses["/backend/activity/1/page/1/steps"] = 
[
  {
    "url": "/backend/activity/1/page/1/step/1",
    "activityPage": "/backend/activity/1/page/1",
    "beforeText": "",
    "responseTemplate": null,
    "afterText": "",
    "buttons": [
      
    ],
    "triggerResponses": [
      "/backend/activity/1/page/1/step/1/response/1/step-beginning"
    ],
    "submitButtonShouldBeVisible": false,
    "submitButtonTitle": "",
    "isLastStep": true,
    "triggerResponseListUrl": "/backend/activity/1/page/1/step/1/trigger_responses",
    "commandListUrl": "/backend/activity/1/page/1/step/1/commands"
  }
];

Smartgraphs.mockResponses["/backend/activity/1/page/2/steps"] = 
[
  {
    "url": "/backend/activity/1/page/2/step/1",
    "activityPage": "/backend/activity/1/page/2",
    "beforeText": "<p>In the top-right area, draw a graph of someone walking at a slow, steady pace from point A to point B between 0 and 15 seconds.</p>",
    "responseTemplate": null,
    "afterText": "",
    "buttons": [
      
    ],
    "triggerResponses": [
      "/backend/activity/1/page/2/step/1/response/1/step-beginning",
      "/backend/activity/1/page/2/step/1/response/2/step-finished"
    ],
    "submitButtonShouldBeVisible": true,
    "submitButtonTitle": "Done",
    "isLastStep": false,
    "triggerResponseListUrl": "/backend/activity/1/page/2/step/1/trigger_responses",
    "commandListUrl": "/backend/activity/1/page/2/step/1/commands"
  },
  {
    "url": "/backend/activity/1/page/2/step/2",
    "activityPage": "/backend/activity/1/page/2",
    "beforeText": "<p>In the bottom-right area, draw a graph of someone walking at a slow, steady pace from point B to point A between 0 and 15 seconds. Click Next when you are ready.</p>",
    "responseTemplate": null,
    "afterText": "",
    "buttons": [
      
    ],
    "triggerResponses": [
      "/backend/activity/1/page/2/step/2/response/1/step-beginning"
    ],
    "submitButtonShouldBeVisible": true,
    "submitButtonTitle": "Done",
    "isLastStep": true,
    "triggerResponseListUrl": "/backend/activity/1/page/2/step/2/trigger_responses",
    "commandListUrl": "/backend/activity/1/page/2/step/2/commands"
  }
];

Smartgraphs.mockResponses["/backend/activity/1/page/3/steps"] = 
[
  {
    "url": "/backend/activity/1/page/3/step/1",
    "activityPage": "/backend/activity/1/page/3",
    "beforeText": "<p>Place the sensor at the 0-meter mark. Stand near the sensor. When you are ready, have your partner click Start to record the position and time data for your movements. Walk on the path for 15 seconds. Experiment with different kinds of motions (walking fast, slow, forward, backward\u2026) Click Stop after 15 seconds is up. Click Reset to try a different movement.</p>",
    "responseTemplate": null,
    "afterText": "",
    "buttons": [
      
    ],
    "triggerResponses": [
      "/backend/activity/1/page/3/step/1/response/1/step-beginning",
      "/backend/activity/1/page/3/step/1/response/2/step-finished"
    ],
    "submitButtonShouldBeVisible": true,
    "submitButtonTitle": "Done",
    "isLastStep": false,
    "triggerResponseListUrl": "/backend/activity/1/page/3/step/1/trigger_responses",
    "commandListUrl": "/backend/activity/1/page/3/step/1/commands"
  },
  {
    "url": "/backend/activity/1/page/3/step/2",
    "activityPage": "/backend/activity/1/page/3",
    "beforeText": "<p>How are different motions represented on a position-time graph? (For example, what does the graph look like when you are standing still, walking forward ...?)</p><p>Try to use some of the following words: slope, flat, upward, downward, curved, straight, steep, gradual, line, curve.",
    "responseTemplate": "/backend/response-template/2/open",
    "afterText": "",
    "buttons": [
      
    ],
    "triggerResponses": [
      "/backend/activity/1/page/3/step/2/response/1/step-beginning"
    ],
    "submitButtonShouldBeVisible": true,
    "submitButtonTitle": "Submit My Answer",
    "isLastStep": true,
    "triggerResponseListUrl": "/backend/activity/1/page/3/step/2/trigger_responses",
    "commandListUrl": "/backend/activity/1/page/3/step/2/commands"
  }
];

Smartgraphs.mockResponses["/backend/activity/1/page/4/steps"] = 
[
  {
    "url": "/backend/activity/1/page/4/step/1",
    "activityPage": "/backend/activity/1/page/3",
    "beforeText": "<p>At right is your prediction and your actual motion, together</p>",
    "responseTemplate": null,
    "afterText": "",
    "buttons": [
      
    ],
    "triggerResponses": [
      "/backend/activity/1/page/4/step/1/response/1/step-beginning"
    ],
    "submitButtonShouldBeVisible": false,
    "submitButtonTitle": "",
    "isLastStep": true,
    "triggerResponseListUrl": "/backend/activity/1/page/4/step/1/trigger_responses",
    "commandListUrl": "/backend/activity/1/page/4/step/1/commands"
  }
];


// we can add individual step urls later if needed.

Smartgraphs.mockResponses["/backend/activity/2/page/1/step/1"] = 
{
  "url": "/backend/activity/2/page/1/step/1",
  "activityPage": "/backend/activity/2/page/1",
  "beforeText": "<p>Try visiting the first activity by changing just the last digit of the URL from '2' to '1' and hitting Enter.<p>" + "<p>Also, observe that you can resize the browser window without scrambling the prediction graph on the right.</p>",
  "responseTemplate": null,
  "afterText": "",
  "buttons": [
    
  ],
  "triggerResponses": [
    "/backend/activity/2/page/1/step/1/response/1/step-beginning"
  ],
  "submitButtonShouldBeVisible": false,
  "submitButtonTitle": "",
  "isLastStep": true,
  "triggerResponseListUrl": "/backend/activity/2/page/1/step/1/trigger_responses",
  "commandListUrl": "/backend/activity/2/page/1/step/1/commands"
};

Smartgraphs.mockResponses["/backend/activity/2/page/1/steps"] = [
  Smartgraphs.mockResponses["/backend/activity/2/page/1/step/1"]
];
