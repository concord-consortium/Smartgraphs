// ==========================================================================
// Project:   Smartgraphs.Pointset
// Copyright: ©2011 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('lib/graphable_object');

/** @class

  @extends SC.Object
  @version 0.1
*/
Smartgraphs.Pointset = Smartgraphs.GraphableObject.extend(
/** @scope Smartgraphs.GraphableObject.prototype */ {

  // an array of Smartgraphs.Point objects
  points: null,
  
  viewClass: function () {
    return Smartgraphs.PointsetView;
  }.property().cacheable()
  
});
