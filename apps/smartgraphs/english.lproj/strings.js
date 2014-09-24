// Project:   Welcome Strings
// Copyright: ©2011 Apple Inc.
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
      "Science Foundation. The software is copyrighted by "+
      "the <a target='_blank' href='https://github.com/concord-consortium/Smartgraphs/blob/master/LICENSE' "+
      "title='The Concord Consortium Software License'>"+
      "Concord Consortium under the GNU Lesser General Public License</a>, "+
      "which allows you to use and to distribute this software. ",

  '@:views.credits.authorName': ""+
      "The SmartGraphs team at the Concord Consortium. ",
  
  '@:views.credits.licenseInfo': ""+
      "The activity is available under the Creative Commons "+
      "<a target='_blank' href='http://creativecommons.org/licenses/by-sa/3.0/' title='Creative Commons Attribution-ShareAlike 3.0 Unported License'>"+
      "Attribution-Share Alike 3.0 Unported license</a>, "+
      "which allows you to use and to distribute this activity.",

  '@:views.credits.projectOf':  "SmartGraphs is a project of The Concord Consortium",
  '@:views.credits.activityBy': "This SmartGraphs activity was developed by:",

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
  '@:views.graph_pane.reset': 'Reset'
}) ;
