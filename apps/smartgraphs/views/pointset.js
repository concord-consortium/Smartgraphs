// ==========================================================================
// Project:   Smartgraphs.PointsetView
// Copyright: ©2013 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================

sc_require('mixins/pointer_events_support');

/** @class

  @extends RaphaelViews.RaphaelCollectionView
*/
Smartgraphs.PointsetView = RaphaelViews.RaphaelCollectionView.extend(Smartgraphs.PointerEventsSupport, {

  isAnimatable: NO,

  exampleView: Smartgraphs.PointView,
  // keep this set to YES prevents the collection view from redrawing all the points when re-rendering
  useFastPath: YES,

  modelColorBinding: '.item.color',
  modelColorBindingDefault: SC.Binding.oneWay(),

  dataRepresentation: SC.outlet('item.dataRepresentation'),
  datadefIsActiveBinding: '.dataRepresentation.datadef.isActive',

  // Be invisible to mouse/touch events if the corresponding datadef is not active.
  pointerEvents: function() {
    return this.get('datadefIsActive') ? 'auto' : 'none';
  }.property('datadefIsActive'),

  color: function () {
    return this.get('overrideColor') || this.get('modelColor');
  }.property('overrideColor', 'modelColor'),

  selectionBinding: '.item.selection',
  isSelectableBinding: '.item.isSelectable',

  contentBinding: '.item.points'

});
