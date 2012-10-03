// ==========================================================================
// Project:   Smartgraphs.Point
// Copyright: ©2012 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

sc_require('lib/mark');

/** @class

  Represents a single datapoint to be shown on the screen.

  @extends Smartgraphs.Mark
  @version 0.1
*/
(function() {

  function format(x) {
    x = x || 0;
    x = Math.round(x * 1000) / 1000;
    var leadingSpace = x >= 0 ? " " : "";
    return leadingSpace + x;
  }

  Smartgraphs.Point = Smartgraphs.Mark.extend(
    /** @scope Smartgraphs.Point.prototype */ {

    x: null,
    xFormatted: function () {
      return format(this.get('x'));
    }.property('x').cacheable(),

    y: null,
    yFormatted: function () {
      return format(this.get('y'));
    }.property('y').cacheable()
  });

}());
