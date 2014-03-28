Smartgraphs.activityDocs = Smartgraphs.activityDocs || {};
Smartgraphs.activityDocs["/shared/mathjax"] = {
  "_id": "mathjax.df6",
  "_rev": 1,
  "data_format_version": 6,
  "activity": {
    "title": "Mathjax Test activity",
    "url": "/shared/mathjax",
    "owner": "shared",
    "pages": [
      "/shared/mathjax/page/1-1-introduction",
      "/shared/mathjax/page/testing-page-2"
    ],
    "axes": [],
    "authorName": "Bo Jangles."
  },
  "pages": [
    {
    "name": "1 Introduction",
    "url": "/shared/mathjax/page/1-1-introduction",
    "activity": "/shared/mathjax",
    "index": 1,
    "introText": "<p>Here is something bold: &nbsp;<strong>BOLD</strong></p>\r\n<p>Here are sub<sub>script</sub> and super<sup>script</sup></p>\r\n<p>Here is something in Italics: &nbsp;<em>ITALICS</em></p>\r\n<p>Here is a list:</p>\r\n<ol>\r\n<li>a</li>\r\n<li>b</li>\r\n</ol>\r\n<p>A Formula: &nbsp;\\( &nbsp;\\sqrt[2]{y} &nbsp;\\frac{1}{\\prod_{k=1}^n} \\) This is the end of the sentance.</p>",
    "steps": [
      "/shared/mathjax/page/1-1-introduction/step/1"
    ],
    "firstStep": "/shared/mathjax/page/1-1-introduction/step/1",
    "contextVars": []
  },
  {
    "name": "Mathajax testing page 2",
    "url": "/shared/mathjax/page/testing-page-2",
    "activity": "/shared/mathjax",
    "index": 2,
    "introText": "<p>\\( &nbsp;\\sqrt[2]{y} &nbsp;\\frac{1}{\\prod_{k=1}^n} \\)&nbsp;</p>",
    "steps": [
      "/shared/mathjax/page/testing-page-2/step/1"
    ],
    "firstStep": "/shared/mathjax/page/testing-page-2/step/1",
    "contextVars": []
  }
  ],
  "steps": [
    {
    "url": "/shared/mathjax/page/1-1-introduction/step/1",
    "activityPage": "/shared/mathjax/page/1-1-introduction",
    "paneConfig": "single",
    "panes": null,
    "isFinalStep": true,
    "nextButtonShouldSubmit": true
  },
  {
    "url": "/shared/mathjax/page/testing-page-2/step/1",
    "activityPage": "/shared/mathjax/page/testing-page-2",
    "paneConfig": "single",
    "panes": null,
    "isFinalStep": true,
    "nextButtonShouldSubmit": true
  }
  ],
  "responseTemplates": [],
  "axes": [],
  "datadefs": [],
  "tags": [],
  "annotations": [],
  "variables": [],
  "units": [
    {
    "url": "/shared/mathjax/units/meters",
    "activity": "/shared/mathjax",
    "name": "meter",
    "abbreviation": "m",
    "pluralName": "meters"
  },
  {
    "url": "/shared/mathjax/units/minutes",
    "activity": "/shared/mathjax",
    "name": "minute",
    "abbreviation": "m",
    "pluralName": "minutes"
  },
  {
    "url": "/shared/mathjax/units/meters per second",
    "activity": "/shared/mathjax",
    "name": "meters per second",
    "abbreviation": "m/s",
    "pluralName": "meters per second"
  },
  {
    "url": "/shared/mathjax/units/seconds",
    "activity": "/shared/mathjax",
    "name": "second",
    "abbreviation": "s",
    "pluralName": "seconds"
  },
  {
    "url": "/shared/mathjax/units/Flubbers",
    "activity": "/shared/mathjax",
    "name": "Flubber",
    "abbreviation": "fbs",
    "pluralName": "Flubbers"
  }
  ]
};
