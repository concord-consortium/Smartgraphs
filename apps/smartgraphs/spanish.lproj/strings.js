// Project:   SmartGraphs Spanish Language Strings
// Copyright: ©2014 Concord Consortium
// Author:  npaessel@concord.org
// ==========================================================================
/* globals SC */

// Place strings you want to localize here.  In your app, use the key and
// localize it using "key string".loc(). 
// look for strings matching "@:" using `grep -r "@:" ./apps/smartrgaphs

SC.stringsFor('Spanish', {
  
  "@:TEST": "Testing Spanish",

  // ==========================================================================
  // ./views/credits.js
  // ==========================================================================
  '@:views.credits.projectInfo': "Software SmartGraphs" +
      "(<a target='_blank' href='http://smartgraphs.org'>smartgraphs.org</a>) "+
      "está basado en trabajo apoyado por la National Science Foundationunder Subvención No. DRL-0918522."+
      "Las opiniones, resultados, conclusiones o recomendaciones expresadas en este material son las del autor (s)"+
      "y no reflejan necesariamente las opiniones de la National Science Foundation." +
      "El software es propiedad intelectual de"+
      "the <a target='_blank' href='https://github.com/concord-consortium/Smartgraphs/blob/master/LICENSE' "+
      "title='La Licencia Concord Software Consortium'>"+
      "Concord Consortium bajo la Licencia Pública General de GNU</a>, "+
      "que le permite utilizar y distribuir este software. ",

  '@:views.credits.authorName': "★"+
      "El equipo SmartGraphs en el Concord Consortium. ",
  
  '@:views.credits.licenseInfo': "★"+
      "La actividad está disponible bajo la licencia Creative Commons"+
      "<a target='_blank' href='http://creativecommons.org/licenses/by-sa/3.0/' title='Creative Commons Attribution-ShareAlike 3.0 Unported License'>"+
      "Reconocimiento-Compartir Igual 3.0 Unported</a>, "+
      "que le permite utilizar y distribuir esta actividad.",

  '@:views.credits.projectOf':  "SmartGraphs es un proyecto de The Concord Consortium",
  '@:views.credits.activityBy': "Esta actividad fue desarrollado por SmartGraphs:",

  // ==========================================================================
  // ./controllers/activity_pages.js
  // ==========================================================================
  '@:controllers.activity_pages.page_number':  'Página %@', //.loc(page.get('pageNumber') + 1),
  '@:controllers.activity_pages.step_number':  'Paso %@', //.loc(stepNum++),

  // ==========================================================================
  // ./resources/pages/main_page.js
  // ==========================================================================
  '@:resources.pages.main_page.credits': 'Créditos',
  '@:resources.pages.main_page.home':    'Inicio',
  '@:resources.pages.main_page.edit':    'Editar',
  '@:resources.pages.main_page.run':     'Run',
  '@:resources.pages.main_page.back':    'Anterior',
  '@:resources.pages.main_page.next':    'Siguiente',

  // ==========================================================================
  // ./controllers/activity_step.js
  // ==========================================================================
  '@:controllers.activity_steps.OK':               'OK',
  '@:controllers.activity_steps.Check My Answer':  'Compruebe Mi respuesta',
  '@:controllers.activity_steps.Continue':         'Continuar',


  // ==========================================================================
  // ./views/graph_pane.js
  // ==========================================================================
  '@:views.graph_pane.start': 'Inicio',
  '@:views.graph_pane.stop':  'Deténgase',
  '@:views.graph_pane.reset': 'Reanudar'
}) ;
