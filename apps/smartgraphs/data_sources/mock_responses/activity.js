// ==========================================================================
// Project:   Smartgraphs.Activity mock server responses
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('data_sources/mock_responses/mock_responses');

// activity with new activity-step structure

Smartgraphs.mockResponses["/backend/activity/new-step"] = 
{
  "title":            "Activity Demonstrating New ActivityStep Structure",
  "url":              "/backend/activity/new-step",
  "pages":            ["/backend/activity/new-step/page/1"],
  "pageListUrl":      "/backend/activity/new-step/pages"
};


// starting Activity url
// generated on the console by running: 
//   Smartgraphs.mockResponsesForRecordType(Smartgraphs.Activity)

Smartgraphs.mockResponses["/backend/activity/1"] = 
{
  "trigger-list-url": "/backend/triggers", 
  "command-list-url": "/backend/commands", 
  "title":            "Away and Toward",
  "url":              "/backend/activity/1",
  "pages":            [
    "/backend/activity/1/page/1",
    "/backend/activity/1/page/2",
    "/backend/activity/1/page/3",
    "/backend/activity/1/page/4"],
  "pageListUrl":      "/backend/activity/1/pages"
};

// demo of a second activity
Smartgraphs.mockResponses["/backend/activity/2"] = 
{
  "trigger-list-url": "/backend/triggers", 
  "command-list-url": "/backend/commands", 
  "title":            "Second Activity",
  "url":              "/backend/activity/2",
  "pages":            ["/backend/activity/2/page/1"],
  "pageListUrl":      "/backend/activity/2/pages"
};
