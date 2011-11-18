/*globals Smartgraphs */

Smartgraphs.activityDocs = Smartgraphs.activityDocs || {};
Smartgraphs.activityDocs["/shared/numeric-sequence"] =
{
  "_id": "numeric-sequence.df6",
  "_rev": 1,
  "data_format_version": 6,
  "activity": {
    "title": "Pick A Point Sequence",
    "url": "/shared/numeric-sequence",
    "owner": "shared",
    "pages": [
      "/shared/numeric-sequence/page/1-introduction"
    ],
    "axes": [
      "/shared/numeric-sequence/axes/1",
      "/shared/numeric-sequence/axes/2"
    ]
  },
  "pages": [
    {
      "name": "Introduction",
      "url": "/shared/numeric-sequence/page/1-introduction",
      "activity": "/shared/numeric-sequence",
      "index": 1,
      "introText": "in this activity....",
      "steps": [
        "/shared/numeric-sequence/page/1-introduction/step/1",
        "/shared/numeric-sequence/page/1-introduction/step/2",
        "/shared/numeric-sequence/page/1-introduction/step/3",
        "/shared/numeric-sequence/page/1-introduction/step/4",
        "/shared/numeric-sequence/page/1-introduction/step/5"
      ],
      "firstStep": "/shared/numeric-sequence/page/1-introduction/step/1"
    }
  ],
  "steps": [
    {
      "url": "/shared/numeric-sequence/page/1-introduction/step/1",
      "activityPage": "/shared/numeric-sequence/page/1-introduction",
      "beforeText": "<p>What is the x-coordinate at the 3-time unit mark?</p>",
      "responseTemplate": "/shared/numeric-sequence/response-templates/numeric",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/numeric-sequence/axes/1",
          "yAxis": "/shared/numeric-sequence/axes/2",
          "annotations": [],
          "data": [
            "datadef-1"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "datadef-1",
          "annotations": []
        }
      },
      "submitButtonTitle": "Check My Answer",
      "submissibilityCriterion": ["isNumeric", ["responseField", 1]],
      "responseBranches": [
        {
          "criterion": ["=", ["responseField", 1], 600],
          "step": "/shared/numeric-sequence/page/1-introduction/step/5"
        }
      ],
      "defaultBranch": "/shared/numeric-sequence/page/1-introduction/step/2",
      "isFinalStep": false
    },
    {
      "url": "/shared/numeric-sequence/page/1-introduction/step/2",
      "activityPage": "/shared/numeric-sequence/page/1-introduction",
      "beforeText": "<p>Hint: ask yourself, which is the y-axis and which is the x-axis?</p> <p>What is the x-coordinate of the point at the 3-time unit mark?</p>",
      "responseTemplate": "/shared/numeric-sequence/response-templates/numeric",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/numeric-sequence/axes/1",
          "yAxis": "/shared/numeric-sequence/axes/2",
          "annotations": [],
          "data": [
            "datadef-1"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "datadef-1",
          "annotations": []
        }
      },
      "submitButtonTitle": "Check My Answer",
      "submissibilityCriterion": ["isNumeric", ["responseField", 1]],
      "responseBranches": [
        {
          "criterion": ["=", ["responseField", 1], 600],
          "step": "/shared/numeric-sequence/page/1-introduction/step/5"
        }
      ],
      "defaultBranch": "/shared/numeric-sequence/page/1-introduction/step/3",
      "isFinalStep": false
    },
    {
      "url": "/shared/numeric-sequence/page/1-introduction/step/3",
      "activityPage": "/shared/numeric-sequence/page/1-introduction",
      "beforeText": "<p>Hint: Where is the \"3-time-unit mark\" on the y-axis?</p> <p>The horizontal position of the point you're looking for is located at this mark. What is the x-coordinate of the point at the 3-time unit mark?</p>",
      "responseTemplate": "/shared/numeric-sequence/response-templates/numeric",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/numeric-sequence/axes/1",
          "yAxis": "/shared/numeric-sequence/axes/2",
          "annotations": [],
          "data": [
            "datadef-1"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "datadef-1",
          "annotations": []
        }
      },
      "submitButtonTitle": "Check My Answer",
      "submissibilityCriterion": ["isNumeric", ["responseField", 1]],
      "responseBranches": [
        {
          "criterion": ["=", ["responseField", 1], 600],
          "step": "/shared/numeric-sequence/page/1-introduction/step/5"
        }
      ],
      "defaultBranch": "/shared/numeric-sequence/page/1-introduction/step/4",
      "isFinalStep": false
    },
    {
      "url": "/shared/numeric-sequence/page/1-introduction/step/4",
      "activityPage": "/shared/numeric-sequence/page/1-introduction",
      "beforeText": "<p>Take a closer look, it's 600 units of distance.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/numeric-sequence/axes/1",
          "yAxis": "/shared/numeric-sequence/axes/2",
          "annotations": [],
          "data": [
            "datadef-1"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "datadef-1",
          "annotations": []
        }
      },
      "nextButtonShouldSubmit": true,
      "isFinalStep": true
    },
    {
      "url": "/shared/numeric-sequence/page/1-introduction/step/5",
      "activityPage": "/shared/numeric-sequence/page/1-introduction",
      "beforeText": "<p>That's right: it's 600 units of distance.</p>",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/numeric-sequence/axes/1",
          "yAxis": "/shared/numeric-sequence/axes/2",
          "annotations": [],
          "data": [
            "datadef-1"
          ]
        },
        "bottom": {
          "type": "table",
          "data": "datadef-1",
          "annotations": []
        }
      },
      "nextButtonShouldSubmit": true,
      "isFinalStep": true
    }
  ],
  "responseTemplates": [
    {
      "url": "/shared/numeric-sequence/response-templates/numeric",
      "templateString": "",
      "fieldTypes": ["numeric"],
      "fieldChoicesList": [null],
      "initialValues": [""]
    }
  ],
  "axes": [
    {
      "url": "/shared/numeric-sequence/axes/1",
      "min": 0,
      "max": 10,
      "nSteps": 10,
      "label": "Time"
    },
    {
      "url": "/shared/numeric-sequence/axes/2",
      "min": 0,
      "max": 2000,
      "nSteps": 10,
      "label": "Position"
    }
  ],
  "datadefs": [
    {
      "type": "UnorderedDataPoints",
      "records": [
        {
          "url": "/shared/numeric-sequence/datadefs/datadef-1",
          "name": "datadef-1",
          "activity": "/shared/numeric-sequence",
          "xLabel": "Time",
          "xShortLabel": "Time",
          "yLabel": "Position",
          "yShortLabel": "Position",
          "points": [
            [
              1,
              200
            ],
            [
              2,
              400
            ],
            [
              3,
              600
            ],
            [
              4,
              800
            ]
          ]
        }
      ]
    }
  ],
  "tags": [],
  "annotations": [],
  "variables": [],
  "units": []
};