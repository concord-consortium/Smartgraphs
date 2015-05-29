// Project:   SmartGraphs English Language Strings
// Copyright: ©2014 Concord Consortium
// Author:  npaessel@concord.org
// ==========================================================================
/* globals SC */

// Place strings you want to localize here.  In your app, use the key and
// localize it using "key string".loc().
// look for strings matching "@:" using `grep -r "@:" ./apps/smartrgaphs

SC.stringsFor('English', {

  "@:TEST": "Testing English",

  // ==========================================================================
  // ./views/credits.js
  // ==========================================================================
  '@:views.credits.projectInfo': ""+
      "SmartGraphs software " +
      "(<a target='_blank' href='http://smartgraphs.org'>smartgraphs.org</a>) "+
      "is based upon "+
      "work supported by the National Science Foundation "+
      "under Grant No. DRL-0918522. "+
      "Any opinions, findings, conclusions, or recommendations "+
      "expressed in this material are those of the author(s) "+
      "and do not necessarily reflect the views of the National "+
      "Science Foundation. ",

  '@:views.credits.projectInfo.graph_literacy': ""+
      "Graph Literacy " +
      "(<a target='_blank' href='http://concord.org/projects/graph-literacy'>concord.org/projects/graph-literacy</a>) "+
      "is based upon "+
      "work supported by the National Science Foundation "+
      "under Grant No. DRL-1256490. "+
      "Any opinions, findings, conclusions, or recommendations "+
      "expressed in this material are those of the author(s) "+
      "and do not necessarily reflect the views of the National "+
      "Science Foundation. ",

  '@:views.credits.authorName': ""+
      "The SmartGraphs team at the Concord Consortium. ",
  '@:views.credits.licenseInfo': ""+
      "This open educational resource from the Concord Consortium is free for "+
      "use under the Creative Commons Attribution International 4.0 license ("+
      "<a target='_blank' href='http://creativecommons.org/licenses/by/4.0/' title='Creative Commons Attribution 4.0 license'>"+
      "CC-BY 4.0</a>), "+
      "and powered by " +
      "<a target='_blank' href='https://github.com/concord-consortium/Smartgraphs/blob/master/CREDITS.md'>" +
      "open source software packages<a>. " +
      "Please see " +
      "<a target='_blank' href='http://concord.org/licenses'>" +
      "our licenses page</a> for more information. " +
      "When sharing this resource, include attribution to the Concord Consortium " +
      "and links to " +
      "<a target='_blank' href='http://concord.org/' title='concord.org'>" +
      "concord.org</a> and the CC-BY-4.0 license. " +
      "Copyright © 2015 The Concord Consortium.",

  '@:views.credits.projectOf':  "SmartGraphs is a project of The Concord Consortium",
  '@:views.credits.projectOf.graph_literacy':  "Graph Literacy is a project of The Concord Consortium",
  '@:views.credits.activityBy': "This SmartGraphs activity was developed by:",
  '@:views.credits.activityBy.graph_literacy': "Graph Literacy activity was developed by:",
  '@:views.credits.close':      "Close",

  // ==========================================================================
  // ./controllers/activity_pages.js
  // ==========================================================================
  '@:controllers.activity_pages.page_number':  'Page %@', //.loc(page.get('pageNumber') + 1),
  '@:controllers.activity_pages.step_number':  'Step %@', //.loc(stepNum++),

  // ==========================================================================
  // ./resources/pages/main_page.js
  // ==========================================================================
  '@:resources.pages.main_page.credits': 'Credits',
  '@:resources.pages.main_page.home':    'Home',
  '@:resources.pages.main_page.edit':    'Edit',
  '@:resources.pages.main_page.run':     'Run',
  '@:resources.pages.main_page.back':    'Back',
  '@:resources.pages.main_page.next':    'Next',

  // ==========================================================================
  // ./controllers/activity_step.js
  // ==========================================================================
  '@:controllers.activity_steps.OK':               'OK',
  '@:controllers.activity_steps.Check My Answer':  'Check My Answer',
  '@:controllers.activity_steps.Continue':         'Continue',


  // ==========================================================================
  // ./views/graph_pane.js
  // ==========================================================================
  '@:views.graph_pane.start': 'Start',
  '@:views.graph_pane.stop':  'Stop',
  '@:views.graph_pane.reset': 'Reset',


  // ==========================================================================
  // .views/response_template.js
  // ==========================================================================
  '@:views.response_template.textarea': 'Enter your answer here …',

  // ==========================================================================
  // states/activity.js
  // ==========================================================================
  '@:states.activity.nav_ok': "OK",
  '@:states.activity.nav_cancel': "Cancel",
  '@:states.activity.nav_title': "Restart?",
  '@:states.activity.nav_home': "" +
    "Are you sure you want to return to the menu?\n\n" +
    "You will lose your place in the activity if you leave this page.\n"

}) ;
