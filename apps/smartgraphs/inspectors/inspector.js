// ==========================================================================
// Project:   Smartgraphs.Inspector
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

Smartgraphs.Inspector = SC.Object.extend({
  
  init: function () {
    var config = this.get('config'); 
    if (config) this.configure(config);
    sc_super();
  }
});