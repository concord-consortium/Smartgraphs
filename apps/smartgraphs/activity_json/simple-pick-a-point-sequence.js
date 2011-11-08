/*globals Smartgraphs */

Smartgraphs.activityDocs = Smartgraphs.activityDocs || {};
Smartgraphs.activityDocs["/shared/pick-a-point-sequence"] =
{
  "_id": "pick-a-point-sequence.df6",
  "_rev": 1,
  "data_format_version": 6,
  "activity": {
    "title": "Pick A Point Sequence",
    "url": "/shared/pick-a-point-sequence",
    "owner": "shared",
    "pages": [
      "/shared/pick-a-point-sequence/page/1-introduction"
    ],
    "axes": [
      "/shared/pick-a-point-sequence/axes/1",
      "/shared/pick-a-point-sequence/axes/2"
    ]
  },
  "pages": [
    {
      "name": "Introduction",
      "url": "/shared/pick-a-point-sequence/page/1-introduction",
      "activity": "/shared/pick-a-point-sequence",
      "index": 1,
      "introText": "in this activity....",
      "steps": [
        "/shared/pick-a-point-sequence/page/1-introduction/step/1",
        "/shared/pick-a-point-sequence/page/1-introduction/step/2",
        "/shared/pick-a-point-sequence/page/1-introduction/step/3",
        "/shared/pick-a-point-sequence/page/1-introduction/step/4",
        "/shared/pick-a-point-sequence/page/1-introduction/step/5"
      ],
      "firstStep": "/shared/pick-a-point-sequence/page/1-introduction/step/1"
    }
  ],
  "steps": [
    {
      "url": "/shared/pick-a-point-sequence/page/1-introduction/step/1",
      "activityPage": "/shared/pick-a-point-sequence/page/1-introduction",
      "beforeText": "Click the point...",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/pick-a-point-sequence/axes/1",
          "yAxis": "/shared/pick-a-point-sequence/axes/2",
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
      "isFinalStep": false,
      "submitButtonTitle": "OK",
      "defaultBranch": "/shared/pick-a-point-sequence/page/1-introduction/step/2"
    },
    {
      "url": "/shared/pick-a-point-sequence/page/1-introduction/step/2",
      "activityPage": "/shared/pick-a-point-sequence/page/1-introduction",
      "beforeText": "Look at the graph...",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/pick-a-point-sequence/axes/1",
          "yAxis": "/shared/pick-a-point-sequence/axes/2",
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
      "isFinalStep": false,
      "submitButtonTitle": "OK",
      "defaultBranch": "/shared/pick-a-point-sequence/page/1-introduction/step/3"
    },
    {
      "url": "/shared/pick-a-point-sequence/page/1-introduction/step/3",
      "activityPage": "/shared/pick-a-point-sequence/page/1-introduction",
      "beforeText": "In these two intervals....",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/pick-a-point-sequence/axes/1",
          "yAxis": "/shared/pick-a-point-sequence/axes/2",
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
      "isFinalStep": false,
      "submitButtonTitle": "OK",
      "defaultBranch": "/shared/pick-a-point-sequence/page/1-introduction/step/4"
    },
    {
      "url": "/shared/pick-a-point-sequence/page/1-introduction/step/4",
      "activityPage": "/shared/pick-a-point-sequence/page/1-introduction",
      "beforeText": "If you look carefully, ....",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/pick-a-point-sequence/axes/1",
          "yAxis": "/shared/pick-a-point-sequence/axes/2",
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
      "isFinalStep": false,
      "submitButtonTitle": "OK",
      "defaultBranch": "/shared/pick-a-point-sequence/page/1-introduction/step/5"
    },
    {
      "url": "/shared/pick-a-point-sequence/page/1-introduction/step/5",
      "activityPage": "/shared/pick-a-point-sequence/page/1-introduction",
      "beforeText": "Four minutes into her run ....",
      "paneConfig": "split",
      "panes": {
        "top": {
          "type": "graph",
          "title": "Position vs. Time",
          "xAxis": "/shared/pick-a-point-sequence/axes/1",
          "yAxis": "/shared/pick-a-point-sequence/axes/2",
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
      "isFinalStep": true,
      "nextButtonShouldSubmit": true
    }
  ],
  "responseTemplates": [],
  "axes": [
    {
      "url": "/shared/pick-a-point-sequence/axes/1",
      "min": 0,
      "max": 10,
      "nSteps": 10,
      "label": "Time"
    },
    {
      "url": "/shared/pick-a-point-sequence/axes/2",
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
          "url": "/shared/pick-a-point-sequence/datadefs/datadef-1",
          "name": "datadef-1",
          "activity": "/shared/pick-a-point-sequence",
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
  "tags": [
    {
      "url": "/shared/pick-a-point-sequence/tags/tag-1",
      "activity": "/shared/pick-a-point-sequence",
      "name": "tag-1"
    }
  ],
  "annotations": [
    {
      "type": "HighlightedPoint",
      "records": [
        {
          "url": "/shared/pick-a-point-sequence/annotations/highlighted-point-1",
          "name": "highlighted-point-1",
          "activity": "/shared/pick-a-point-sequence",
          "datadefName": "datadef-1",
          "tag": "/shared/pick-a-point-sequence/tags/tag-1",
          "color": "#1f77b4"
        }
      ]
    }
  ],
  "variables": [],
  "units": []
};
