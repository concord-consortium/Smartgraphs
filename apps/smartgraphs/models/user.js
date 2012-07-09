// ==========================================================================
// Project:   Smartgraphs.User
// Copyright: ©2010 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Smartgraphs.User = SC.Record.extend(
/** @scope Smartgraphs.User.prototype */ {

  userId: SC.Record.attr(String),

  primaryKey: 'userId',

  name: SC.Record.attr(String),

  learnerId: function() {
    var id = this.get('id');
    console.log("User id: " + id);
    if (typeof(id) != 'undefined' && id.indexOf("/") != -1) {
      return id.split("/").pop();
    }
    return "undef";
  }.property(),
  
  sessions: SC.Record.toMany(Smartgraphs.Session, { inverse: 'user' })

}) ;
