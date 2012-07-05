// ==========================================================================
// Project:   Smartgraphs.WebController
// Copyright: ©2010 Concord Consortium
// Author:    Erich Ocean <erich.ocean@me.com>
// ==========================================================================
/*globals Smartgraphs */

Smartgraphs.WebController = SC.ObjectController.extend({

  url: null,

  /**
    Causes the web view to display the url `url`.
  */
  openUrl: function (url) {
    this.set('url', url);
  }

});
