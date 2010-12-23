// ==========================================================================
// Project:   Smartgraphs.toolbarController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Smartgraphs.toolbarController = SC.ObjectController.create(
/** @scope Smartgraphs.toolbarController.prototype */ {

  shouldShowEditButton: NO,
  shouldShowRunButton: NO,
  shouldShowSaveButton: NO,
  
  showRunButton: function () {
    this.set('shouldShowEditButton', NO);
    this.set('shouldShowRunButton', YES);
  },
  
  showEditButton: function () {
    this.set('shouldShowEditButton', YES);
    this.set('shouldShowRunButton', NO);
  },
  
  showSaveButton: function () {
    this.set('shouldShowSaveButton', YES);
  },
  
  hideSaveButton: function () {
    this.set('shouldShowSaveButton', NO);
  }

}) ;
