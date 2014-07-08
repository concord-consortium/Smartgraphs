// ==========================================================================
// Project:   Smartgraphs.MathjaxView
// Copyright: ©2014 Concord Consortium
// Author:    Noah Paessel  <npaessel@concord.org>
// ==========================================================================
/*globals Smartgraphs, MathJax*/

/** @class
  Just like a normal SC.View, but it also tells MathJax to Typeset any
  Mathjax eprpessions on the page.

  @extends SC.View
*/
Smartgraphs.MathJaxView = SC.View.extend({
  displayPoperties: ['content'],
  render: function() {
    sc_super();
    if(typeof MathJax !== "undefined"){
      MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    }
  }
});
