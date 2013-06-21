// ==========================================================================
// Project:   Smartgraphs.RearrangeableParentView
// Copyright: ©2013 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  Common functionality for Smartgraphs RaphaelViews which need to transiently make their child views
  appear in front; in SVG or VML, this must be done by moving the child view to the front.
*/
Smartgraphs.RearrangeableParentView = {

  /**
    Walk like a duck.
  */
  isRearrangeableParentView: YES,

  /**
    Transiently move view to front, if it's our child.
    @param {SC.View} view
  */
  moveViewToFront: function(view) {
    // Make sure the view's layer is our direct child
    if (view.$().parent().is( this.$() )) {
      this.$().append(view.$());
    }
  }

};
