// ==========================================================================
// Project:   Smartgraphs.PointerEventsSupport
// Copyright: ©2013 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  Mix this into a view to bind the layer's 'pointer-events' style property to the 'pointerEvents'
  property of the view. This can be used to make a view transparent to mouse and touch events by
  setting the view's 'pointerEvents' property to the value 'none'.

  For browsers that do not implement pointer-events (essentially, just IE), we also capture mouse
  events on the view's layer and re-fire them on the element beneath the view. Note this fallback
  mechanism is not used for touch events, because essentially all touch-enabled browsers we care
  about support the 'pointer-events' property.
*/
Smartgraphs.PointerEventsSupport = {

  hasPointerEventsSupport: YES,

  // Default value
  pointerEvents: 'auto',

  _pes_mouseEventsList: 'mousedown.pointerEvents mousemove.pointerEvents mouseup.pointerEvents',

  _pes_pointerEventsDidChange: function() {
    this.$().css('pointerEvents', this.get('pointerEvents'));
  }.observes('pointerEvents'),

  didCreateLayerMixin: function() {
    this.$().css('pointerEvents', this.get('pointerEvents'));

    // In order to be transparent to mouse events, we weant to intercept mousemove, mousedown, and
    // mouseup events at the DOM level, so that we can trick the SproutCore root responder into
    // thinking the events actually happened on whatever view is beneath us (see handleEvent).
    // We ignore touch events because essentially all touch-enabled browsers also support the
    // pointer-events property.
    this.$().bind(Smartgraphs.PointerEventsSupport._pes_mouseEventsList,
      $.proxy(this._pes_handleEvent, this));
  },

  willDestroyLayerMixin: function() {
    this.$().unbind(Smartgraphs.PointerEventsSupport._pes_mouseEventsList);
  },

  _pes_handleEvent: function (evt) {
    if (this.get('pointerEvents') !== 'none') {
      return;
    }

    // Stop propagation. If we let the mousemove event bubble, the SproutCore root responder will
    // think we were the "last hovered" view, which screws up its calculation of hover (i.e.,
    // mouseEntered and mouseExited) events for any views below us.
    evt.stopPropagation();

    // Find the element UNDER us at the location of the mouse event
    this.$().hide();
    var el = document.elementFromPoint(evt.clientX, evt.clientY);
    this.$().show();

    // Set the event target to be the element beneath us. Because 'event' is a jQuery-normalized
    // event, 'target' is a normal read/write property.
    evt.target = el;

    // NOW let SproutCore think the event happened directly to the element below us. It will handle
    // forwarding mouseDown, mouseMoved, mouseExited, mouseEntered events to the SC.Views beneath
    // us.
    SC.Event.handle.call(document, evt);
  }
};
