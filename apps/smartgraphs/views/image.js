// ==========================================================================
// Project:   Smartgraphs.ImageView
// Copyright: ©2011 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  Show an image and caption inside a Smartgraph pane. The image will be scaled to completely fill the pane. The aspect
  ratio of the image is preserved, so one dimension may "overflow" while the other one is fitted exactly. The image
  will be centered in that overflow dimension.

  @extends SC.View
*/
Smartgraphs.ImageView = SC.View.extend(
/** @scope Smartgraphs.ImageView.prototype */ {

  /**
    @property String

    URL of the image to show
  */
  imageURL: null,
  imageURLBindingDefault: SC.Binding.oneWay(),
  showFullImage: false,
  scaleMethod: function() {
    if (this.get('showFullImage')) {
      return SC.BEST_FIT;
    }
   return SC.FILL_PROPORTIONALLY;
  }.property().observes('showFullImage'),
  alignMethod: function() {
    if (this.get('showFullImage')) {
      return SC.ALIGN_BOTTOM;
    }
   return SC.ALIGN_CENTER;
  }.property().observes('showFullImage'),
  /**
    @property String

    Caption text for the image.
  */
  caption: null,
  captionBindingDefault: SC.Binding.oneWay(),

  childViews: ['imageView', 'captionView'],

  captionView: SC.LabelView.design({
    escapeHTML: false,
    valueBinding: '.parentView.caption',
    valueBindingDefault: SC.Binding.oneWay(),

    isVisible: function () {
      return !!this.get('value');
    }.property('value'),

    classNames: 'floating-caption',
    layout: { top: 10, left: 10, right: 10, height: 20 }
  }),

  imageView: SC.ImageView.design({
    valueBinding: '.parentView.imageURL',
    valueBindingDefault: SC.Binding.oneWay(),

    // The image doesn't always stretch to fill if we allow SC.ImageView to use the <canvas>
    // optimization.
    useCanvas: false,

    scaleBinding: '.parentView.scaleMethod',
    alignBinding: '.parentView.alignMethod'
  })
});
