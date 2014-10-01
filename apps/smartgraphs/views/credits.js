// ==========================================================================
// Project:   Smartgraphs
// Copyright: ©2010-2011 Concord Consortium
// Author:    Noah Paessel <npaessel@concord.org>
// ==========================================================================
/*globals Smartgraphs */

Smartgraphs.CreditsPane = SC.View.extend({
  classNames:   "creditsBox".w(),

  projectInfo:  '@:views.credits.projectInfo'.loc(),

  authorName:   '@:views.credits.authorName'.loc(),

  licenseInfo:  '@:views.credits.licenseInfo'.loc(),

  projectOf:    '@:views.credits.projectOf'.loc(),
  
  activityBy:   '@:views.credits.activityBy',

  render: function(context, firstTime) {
    context.push(
      "<div id='credits-container'>",
        "<h2>" + this.get('projectOf') + "</h2>" +
        "<div id='credits-logos'>",
        "  <span id='credits-sg-logo' alt='SmartGraphs' title='SmartGraphs' />",
        "  <span id='credits-cc-logo' alt='The Concord Consortium' title='The Concord Consortium' />",
        "</div>",
        "<p id='credits-projectInfo'>",
          this.get('projectInfo'),
        "</p>",
        "<hr />",
        "<h2></h2>",
        "<p id='credits-authorName'>",
          this.get('authorName'),
        "</p>",
        "<p id='credits-licenseInfo'>",
          this.get('licenseInfo'),
        "</p>",
      "</div>"
    );
    sc_super();  // render child views &etc.
  }
});

Smartgraphs.CreditsPane.show  = function(aboutText) {
  var designHash, ret, show, authorName;

  designHash = {
    layout      : { right: 0, left: 0, top:0, bottom: 0},
    childViews  : 'closeButton'.w(),
    closeButton : SC.ButtonView.design({
        layout    : { centerX: 0, bottom: 5, height: 24, width: 80 },
        title     : '@:views.credits.close'.loc(),
        isVisible : YES,
        isEnabled : YES,
        action    : function () { ret.remove(); }
      })
    };

  if (aboutText) {
    designHash['licenseInfo'] = aboutText;
  }


  authorName = Smartgraphs.activityController.get('authorName');
  if (authorName) {
    designHash['authorName'] = authorName;
  }
  ret = SC.PanelPane.create({
    layout: { centerX:0, centerY: 0, height: 450, width: 580},
    contentView: Smartgraphs.CreditsPane.design(designHash)
  });

  show = ret.append() ; // make visible.
  return show ;
};
