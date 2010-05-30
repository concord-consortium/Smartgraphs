// ==========================================================================
// Project:   Smartgraphs.CorrectResponse
// Copyright: ©2010 Concord Consortium
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
Smartgraphs.CorrectResponse = SC.Record.extend(
/** @scope Smartgraphs.CorrectResponse.prototype */ {

  // this model is generic for now, but consider that it might eventually specify, in stead of a single correct
  // answer, a formula for determining the correct answer 

  value: SC.Record.attr(String)
}) ;
