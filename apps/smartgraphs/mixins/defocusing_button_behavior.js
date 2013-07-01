// ==========================================================================
// Project:   Smartgraphs.DefocusingButtonBehavior
// Copyright: ©2013 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  Mix this into an SC.ButtonView to override the (buggy) behavior found in Chrome for Android, where
  text fields that retain focus even when the soft keyboard has been dismissed cause the soft
  keyboard to unexpectedly spring back into view when the button view is tapped.

*/
Smartgraphs.DefocusingButtonBehavior = {

  hasDefocusingButtonBehavior: YES,

  // Augment the ButtonView's internal _action handler to selectively blur any focused text-input
  // control in order to keep the keyboard from automatically popping up because of the touch events
  // on the button.

  // Note that simply removing the evt.preventDefault() from SC.ButtonView's touchstart and touchend
  // actions (and making sure that the root responder does not call preventDefault itself) is not
  // sufficient to cause tapping on the button to defocus the the text input control.
  _action: function() {
    var focusedView = this.getPath('pane.firstResponder');
    if (focusedView) {
      focusedView.resignFirstResponder();
    }
    sc_super();
  }

};
