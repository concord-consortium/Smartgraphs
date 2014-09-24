// ==========================================================================
// Project:   Smartgraphs.MathjaxView
// Copyright: ©2014 Concord Consortium
// Author:    Noah Paessel  <npaessel@concord.org>
// ==========================================================================
/*globals Smartgraphs */

/** @class
  A Very simple pagination view, which displays the current page
  number for an activity, Eg:
       1  2  [3] 4  5  6  7  8

  of if there isn't room, render a summary version, Eg:
          page 1 of 12
  @extends SC.View
*/

// Smartgraphs.PaginationPage = SC.View.extend({
//   classNames: 'page'
// });

Smartgraphs.PaginationView = SC.View.extend({
  currentPage: 3,
  maxPage: 10,
  displayProperties: ['currentPage','maxPage'],

  render: function(context) {
    context.push("<ul class='sg-pagination'>");
    context.push(this.renderAllPages());
  },

  update: function(jquery) {
    jquery.find("ul").html(this.renderUpdate());
  },

  renderUpdate: function() {
    var clip = this.clippingFrame();
    var pageCount = this.get('maxPage');
    var paginationWidth = 32; // pixels per page info
    var requiredWidth = pageCount * paginationWidth;
    if (clip && clip.width && clip.width > requiredWidth) {
      return this.renderAllPages();
    }
    else {
      return this.renderSummary();
    }
  },

  viewDidResize: function() {
    sc_super();
    this.set('layerNeedsUpdate', YES);
  },

  renderSummary: function() {
    var maxPage = this.get('maxPage');
    var currentPage = (this.get('currentPage') || 0)  + 1;
    return "<li class='page current'>" +
      " page " +
      currentPage +
      " of " +
      maxPage +
      "</li>";
  },

  renderAllPages: function() {
    var i;
    var buffer = "";
    for (i = 1; i <= this.get('maxPage'); i++) {
      buffer = this.renderPage(buffer, i);
    }
    return buffer;
  },

  renderPage: function(stringBuff, number) {
    var css="page";
    var current_page = this.get('currentPage') || 0;
    current_page = current_page + 1;
    var tag = "<li class='";
    if (number > current_page) {
      css = css + " unseen";
    }
    else if(number === current_page) {
      css = css + " current";
    }
    tag += css + "'>" + number + "</li>";
    return stringBuff + tag;
  }
});
