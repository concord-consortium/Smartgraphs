// ==========================================================================
// Project:   Smartgraphs.MathRendering
// Copyright: ©2014 Concord Consortium
// Author:    noah paessel npaessel@concord.org
// ==========================================================================
/*globals Smartgraphs, MathJax */

/** @class

  Common functionality for Smartgraphs RaphaelViews which need to transiently make their child views
  appear in front; in SVG or VML, this must be done by moving the child view to the front.
*/
Smartgraphs.MathRenderCount    = 0;
Smartgraphs.NextMathRenderID   = null;
Smartgraphs.MathRenderDelay    = 1;

Smartgraphs.MathRenderFunction = function () {
  if(typeof MathJax !== "undefined") {
    MathJax.Hub.Queue(["Typeset",MathJax.Hub]);
    Smartgraphs.MathRenderCount = Smartgraphs.MathRenderCount+  1;
  }
};

Smartgraphs.MathRenderLater = function () {
  if(Smartgraphs.NextMathRenderID) {
    clearTimeout(Smartgraphs.NextMathRenderID);
  }
  if(typeof MathJax !== "undefined") {
    Smartgraphs.NextMathRenderID = setTimeout(Smartgraphs.MathRenderFunction, Smartgraphs.MathRenderDelay);
  }
};

Smartgraphs.MathRendering = {
  count: 0,
  renderMathJax: function() {
    Smartgraphs.MathRenderLater();
  },
  render: function() {
  	try { sc_super(); }
  	catch(err) {}
   	this.renderMathJax();
  },

  didAppendToDocument: function() {
  	try { sc_super(); }
  	catch(err) {}
  	this.renderMathJax();
  }
};