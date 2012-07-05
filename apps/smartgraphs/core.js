// ==========================================================================
// Project:   Smartgraphs
// Copyright: ©2011 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @namespace

  Smaht Graphs. Wicked Smaht Graphs!

  @extends SC.Application
*/
Smartgraphs = SC.Application.create(
  /** @scope Smartgraphs.prototype */ {

  NAMESPACE: 'Smartgraphs',
  VERSION: '0.1.0',

  // Only attempt to read data from JSON documents with doc.data_format_version that matches the version below
  DATA_FORMAT_VERSION: 6,

  rootStore: function () {
    var ret = Smartgraphs.store;
    while (ret.get('parentStore')) {
      ret = ret.get('parentStore');
    }
    return ret;
  }.property(),

  // Add global constants or singleton objects here
  _nextGuid: 1000,
  getNextGuid: function () {
    return this._nextGuid++;
  },

  sendActionToGraphControllers: function (action, context, args) {
    var ret = [];
    ret.push( Smartgraphs.firstGraphController.sendAction.apply(Smartgraphs.firstGraphController, arguments) );
    ret.push( Smartgraphs.secondGraphController.sendAction.apply(Smartgraphs.secondGraphController, arguments) );
    return ret;
  },

  sendActionToTableControllers: function (action, context, args) {
    var ret = [];
    ret.push( Smartgraphs.firstTableController.sendAction.apply(Smartgraphs.firstTableController, arguments) );
    ret.push( Smartgraphs.secondTableController.sendAction.apply(Smartgraphs.secondTableController, arguments) );
    return ret;
  },

  // FEATURE DETECTION
  support: SC.Object.create({
    placeholder: function () {
        var el = document.createElement('textarea');
        return typeof el.placeholder !== 'undefined';
    }()
  }),

  couchIdForStoreKey: function(storeKey) {
    return Smartgraphs.dataSource.couch._ids[storeKey];
  },
  
  couchRevForStoreKey: function(storeKey) {
    return Smartgraphs.dataSource.couch._revs[storeKey];
  },
  
  ensureCouchDatabase: function(databaseName) {
    var url = '/db/'+databaseName,
        response = SC.Request.putUrl(url).async(NO).json().send();

    if (SC.ok(response)) {
      var body = response.get('body');
      if (body.ok) {
        console.log("Created the '%@' database in CouchDB.".fmt(databaseName));

        // create the views
        response = SC.Request.postUrl(url).async(NO).json().send({
          "_id": "_design/by_url",
          "language": "javascript",
          "views": {
            "url": {
              "map": "function(doc) { if (doc.url) emit(doc.url, doc);  }"
            }
          }
        });
        if (SC.ok(response)) {
          console.log("Created the 'url' view in CouchDB.");
        } else {
          body = response.get('body');
          console.log("Got a "+body.error+" error when trying to create the 'url' view. Reason: "+body.reason);
          // alert("Could not create a required CouchDB view.");
          return false;
        }
      }
    } else {
      var result = response.get('body') || {} ;
      if (result.error !== "file_exists") {
        // alert("CouchDB is not running. Please go to http://www.couchbase.com/downloads and download Couchbase Server Community Edition and start up CouchDB on the default port. Then reload this application.");
        return false;
      }
    }
    this.set('couchDatabase', databaseName);
    return true;
  },
  
  // DEBUG SETTINGS
  trace:          YES,           // whether to trace firstResponder changes and app actions
  logDataSource:  YES,           // whether the data source should log
  showOutline:    typeof window.showOutline    !== 'undefined' ? window.showOutline    : YES,
  showEditButton: typeof window.showEditButton !== 'undefined' ? window.showEditButton : YES

}) ;

SC.CONTEXT_MENU_ENABLED = YES;
