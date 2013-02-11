// ==========================================================================
// Project:   Smartgraphs.EditableLabelView
// Copyright: ©2011 Concord Consortium
// Author:    Noah Paessel <knowuh@gmail.com>
// Author:    Richard Klancer <rpk@pobox.com> (revised to use TextFieldView, 25-Feb-2012)
// ==========================================================================
/*globals Smartgraphs, RaphaelViews */

/** @class

  RaphaelView for an editable label.

  @extends SC.View
  @extends RaphaelViews.RenderSupport
*/
Smartgraphs.EditableLabelView = RaphaelViews.RaphaelView.extend({
/** @scope Smartgraphs.EditableLabelView.prototype */

  isEditing:           NO,
  textFieldView:       null,  // defined on init
  fontSize:            12,

  displayProperties:   'displayText textColor displayText x y raphTextY isEditing width height'.w(),

  labelBodyView:       SC.outlet('parentView'),
  labelView:           SC.outlet('labelBodyView.parentLabelView'),
  graphView:           SC.outlet('labelView.graphView'),
  graphCanvasView:     SC.outlet('graphView.graphCanvasView'),

  textBinding:         '.labelBodyView.text',
  textColorBinding:    '.labelBodyView.textColor',
  itemBinding:         '.labelBodyView.item',

  parentXBinding:      '.labelBodyView.bodyXCoord',
  parentYBinding:      '.labelBodyView.bodyYCoord',
  leftMarginBinding:   '.labelBodyView.leftMargin',
  topMarginBinding:    '.labelBodyView.topMargin',

  // Bounds need to be calculated by Raphael:
  minHeight: function () {
    return this.get('isEditing') ? this.get('fontSize') * 1.2 * 3 : 18;
  }.property('isEditing').cacheable(),

  minWidth: function () {
    return this.get('isEditing') ? this.get('fontSize') * 1.2 * 10 : 80;
  }.property('isEditing').cacheable(),

  // our parent view is going to modify our position
  // but we will modify our parents width and height
  x: function () {
    // in IE 8 and 9, parentX is sometimes undefined
    var parentX = this.get('parentX') || 0;
    return  parentX + this.get('leftMargin') || 0;
  }.property('parentX', 'leftMargin').cacheable(),

  y: function () {
    // in IE 8 and 9, parentX is sometimes undefined
    var parentY = this.get('parentY') || 0;
    return parentY + this.get('topMargin') || 0;
  }.property('parentY', 'topMargin').cacheable(),

  raphTextY: function () {
    // in IE 8 and 9, height is sometimes undefined
    var h = this.get('height') || 0;
    return this.get('y') + (h / 2);
  }.property('y', 'height').cacheable(),

  displayText: function () {
    return this.get('text');
  }.property('text').cacheable(),

  init: function () {
    var labelView = this;

    sc_super();

    this.textFieldView = SC.TextFieldView.create({
      isTextArea: YES,

      // For some reason, SC.TextFieldView doesn't implement touchStart and touchEnd. In this particular case,
      // the result is that the Mobile Safari keyboard does not show up in response to touches. The touchStart and
      // touchEnd implementations below seem to fix this.
      touchStart: function (evt) {
        sc_super();
        this.mouseDown(evt);
      },

      touchEnd: function (evt) {
        sc_super();
        this.mouseUp(evt);
      },

      willLoseFirstResponder: function () {
        labelView.textFieldViewLostFocus();
      }
    });
  },

  destroy: function () {
    this.bindings.forEach(function (binding) {
      binding.disconnect();
    });
    this.bindings = null;
    sc_super();
  },

  renderCallback: function (raphaelCanvas, attrs, adjustTextFieldView) {
    var ret = raphaelCanvas.text().attr(attrs);
    adjustTextFieldView();
    return ret;
  },

  render: function (context, firstTime) {
    var x               = this.get('x'),
        y               = this.get('y'),
        raphTextY       = this.get('raphTextY'),
        width           = this.get('width'),
        height          = this.get('height'),
        text            = this.get('displayText'),

        attrs = {
          x:             x,
          y:             raphTextY,
          fill:          this.get('textColor'),
          text:          text,
          'font-size':   this.get('fontSize'),
          'text-anchor': 'start'
        },

        isEditing       = this.get('isEditing'),

        graphCanvasView = this.get('graphCanvasView'),
        textFieldView       = this.textFieldView,
        pane            = this.get('pane'),

        adjustTextFieldView = function () {
          var offset;

          if (isEditing) {
            textFieldView.set('value', text);
            offset = graphCanvasView.$().offset();
            textFieldView.set('layout', {
              top:    offset.top + y,
              left:   offset.left + x,
              width:  width,
              height: height
            });
            SC.run();
            pane.appendChild(textFieldView);
            textFieldView.becomeFirstResponder();

            // Perhaps because Mobile Safari won't bring up the keyboard in response to a script-initiated focus(),
            // unless the code executes in response to a touch on the textarea, TextFieldView.becomeFirstResponder
            // returns without trying to focus when running on touch browsers.
            //
            // HOWEVER, this code path only ever seems to execute in response to a user-initiated touch. Therefore,
            // go ahead and use focus() event in touch browsers. This forces the keyboard to come up.
            if (SC.platform.touch) {
              textFieldView.$().find('textarea').focus();
            }
          }
          else if (pane.get('childViews').contains(textFieldView)) {
            pane.removeChild(textFieldView);
          }
        },

        raphaelText;

    if (firstTime) {
      context.callback(this, this.renderCallback, attrs, adjustTextFieldView);
    }
    else {
      raphaelText = this.get('raphaelObject');
      raphaelText.attr(attrs);
      adjustTextFieldView();
    }
  },

  didRemoveFromGraphView: function () {
    var pane = this.get('pane');

    if (pane.get('childViews').contains(this.textFieldView)) {
      pane.removeChild(this.textFieldView);
      $('body').unbind('mousedown', this.mousedownHandler).unbind('touchstart', this.mousedownHandler);
      this.textFieldView.resignFirstResponder();
    }
    this.destroy();
  },

  adjustMetrics: function () {
    var raphaelText = this.get('raphaelObject'),
        minWidth    = this.get('minWidth'),
        minHeight   = this.get('minHeight'),
        bounds,
        width,
        height;

    if (raphaelText) {
      raphaelText.attr('text', this.get('displayText'));
      bounds = raphaelText.getBBox();
      width  = bounds.width  < minWidth  ? minWidth  : bounds.width;
      height = bounds.height < minHeight ? minHeight : bounds.height;

      this.beginPropertyChanges();
      this.set('width',  width);
      this.set('height', height);
      this.endPropertyChanges();
    }
  }.observes('displayText', 'minWidth', 'minHeight'),

  beginEditing: function () {
    var self = this;

    // without the following, _mouseDownHandler will have 'this' bound to the target of the mousedown/touchstart event.
    this.mousedownHandler = this.mousedownHandler || function (evt) {
      self._mousedownHandler(evt);
    };

    if (this.get('isEditable')) {
      this.set('isEditing', YES);
      $('body').bind('mousedown', this.mousedownHandler).bind('touchstart', this.mousedownHandler);
      return YES;
    }
    return NO;
  },

  /** Use this to allow user to click or tap away from the label in order to force loss of focus. */
  _mousedownHandler: function (evt) {
    var labelViewLayer = this.getPath('labelView.layer');

    if ( evt.target !== this.textFieldView.$().find('textarea')[0] &&
         evt.target !== labelViewLayer &&
         !$.contains(labelViewLayer, evt.target) )
    {
      $('body').unbind('mousedown', this.mousedownHandler).unbind('touchstart', this.mousedownHandler);
      this.textFieldView.resignFirstResponder(); // see if this works better than jQuery's blur or focusout...
    }
  },

  textFieldViewLostFocus: function () {
    if (this.get('isEditing')) this.commitEditing();
  },

  commitEditing: function () {
    $('body').unbind('mousedown', this.mousedownHandler).unbind('touchstart', this.mousedownHandler);
    this.set('text', this.textFieldView.get('value'));
    this.set('isEditing', NO);
    this.textFieldView.resignFirstResponder();
  }

});
