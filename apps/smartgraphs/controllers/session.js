// ==========================================================================
// Project:   Smartgraphs.sessionController
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs property */

/** @class

  The sessionController manages "activity sessions".
  
  When a user (student) runs an activity, they can change any of the datasets and annotations defined in the activity
  document, and even add new datasets and annotations. However, these changes should be isolated to a single "run" of 
  the activity. This controller makes that possible.
  
  When a user starts running an activity, Smartgraphs calls the beginSession method of this controller. This creates
  a new SC.NestedStore and sets Smartgraphs.store to point to the new store. This nested store buffers changes to 
  records defined in the activity. When the student finishes the activity, the changes in the nested store are thrown
  away, leaving the datasets, annotations, etc. in a pristine state. This is invaluable anytime anyone wants to run
  an activity multiple times in a single "browser session", and is invaluable for saving authored activities (because
  it cleanly differentiates changes to activity records made in authoring mode -- which should be saved to the
  activity document -- and changes to those same records made while running the activity -- changes which should be 
  saved to a separate session record, or thrown away.
  
  The content of the sessionController is a Session object which will eventually contain metadata about the current
  session. Eventually, we will implement incremental saving of the contents of the nested store to a backend data 
  store, associating those contents with session metadata.   

  @extends SC.Object
*/
Smartgraphs.sessionController = SC.ObjectController.create(
/** @scope Smartgraphs.sessionController.prototype */ {
  
  /**
    Begin an activity session.
    
    This sets Smartgraphs.store to point to an SC.NestedStore, and sets the controller content to a new Session
    object
  */
  beginSession: function () {
    if ( this.get('content') ) throw "beginSession was called when a session is already open!";
    
    Smartgraphs.set('store', Smartgraphs.store.chain());
    Smartgraphs.activityObjectsController.loadPredefinedObjects();
    
    // make sure the session is loaded into the nested store -- optionally it can be saved back to the parent store
    var session = Smartgraphs.store.createRecord(Smartgraphs.Session, {
      user: Smartgraphs.userController.get('id')
    });
    // FIXME this works for now --- but we'll eventually need some way to create a globally unique id for a session
    session.set('id', Smartgraphs.getNextGuid());

    this.set('content', session);
  },
  
  /**
    End an activity session.
    
    This throws away the content of the nested store, leaving all activity records as they were before the session
    was started, and sets Smartgraphs.store to point to the original store defined in main.js. It also sets the
    content to null.
  */
  endSession: function () {
    if ( !this.get('content') ) throw "endSession was called when no session is open!";
    
    var parentStore = Smartgraphs.store.get('parentStore');

    if (!parentStore) {
      throw "Tried to end session, but there is no parent store to restore";
    }
    
    // let everything sync so that, e.g., graph views removes child views representing datasets & annotations that are 
    // about to be removed from the current datastore
    SC.RunLoop.begin().end();
    
    // TODO save these modified objects up to the server. Until we need that capability, we'll just throw them away.
    var changelog = Smartgraphs.store.get('changelog') || [];
    changelog.forEach( function (storeKey) {
      console.log("    about to permanently turn off observing for about-to-be-destroyed record %d", storeKey);
      var rec = Smartgraphs.store.find(Smartgraphs.store.recordTypeFor(storeKey), Smartgraphs.store.idFor(storeKey));

      // hack hack hack ... 
      if (rec) rec._notifyPropertyObservers = function () {};
    });

    Smartgraphs.store.discardChanges().destroy();
    Smartgraphs.set('store', parentStore);
    
    this.set('content', null);
  }
  
}) ;
