/*globals Smartgraphs */

/** @class

  @extends SC.Record
*/
Smartgraphs.Dataref = SC.Record.extend(
/** @scope Smartgraphs.Dataref.prototype */ {

  /**
    The primary key of a Dataref record is technically its url. However, datarefs are referenced by name within an
    activity, so that the activity can be serialized.

    @property {String}
  */
  url: SC.Record.attr(String),
  primaryKey: 'url',

  /**
    The name of this dataref. Used to reference it within an activity.

    @property {String}
  */
  name: SC.Record.attr(String),

  /**
    The activity this dataref is part of.

    @property {Smartgraphs.Activity}
  */
  activity: SC.Record.toOne('Smartgraphs.Activity', { aggregate: YES }),

  /**
    The datadefName of the datadef which is the part of this dataref.

    @property {String}
  */
  datadefName: SC.Record.attr(String),

  /**

    @property {String}
  */
  expressionForm: SC.Record.attr(String),

  /**
    The x-distance between successive points.

    @property {Number}
  */
  xInterval : SC.Record.attr(Number),

  /**

    @property {Array}
  */
  points : SC.Record.attr(Array),

  populateDatadef: function(xMin, xMax, yMin, yMax) {
    this.setDatadefPoints(this.getPoints(xMin, xMax, yMin, yMax));
  },

  setDatadefPoints: function(points) {
    var datadef = this.getDatadef();
    datadef.set('points', points);
  },

  /**
    Get datadef of this dataref.
  */
  getDatadef: function () {
    var datadefName = this.get('datadefName');
    return Smartgraphs.activityObjectsController.findDatadef(datadefName);
  },

  /**
    Abstract Method need to implement in inherited classes.
  */
  getPoints: function () {
    throw "This method must be inherited as it is an abstract method.";
  },

  /**
    Abstract Method need to implement in inherited classes.
  */
  getExpressionFunction: function () {
    throw "This method must be inherited as it is an abstract method.";
  },

  /**
    Abstract Method need to implement in inherited classes.
  */
  getInverseExpressionFunction: function () {
    throw "This method must be inherited as it is an abstract method.";
  }
});

// FIXME this is duplicated from Smartgraphs.Datadef

(function () {

  var types = null;
  var typeNames = null;

  function findTypes() {
    types = [];
    typeNames = [];
    for (var prop in Smartgraphs) {
      if (Smartgraphs.hasOwnProperty(prop) && Smartgraphs[prop] && Smartgraphs[prop].isClass && prop !== 'Dataref' && SC.kindOf(Smartgraphs[prop], Smartgraphs.Dataref)) {
        types.push(Smartgraphs[prop]);
        typeNames.push(prop);
      }
    }
  }

  /**
    This is also duplicated from Smartgraphs.Datadef

    Returns a list of all Dataref subtypes. Value is calculated the first time this function or Smartgraphs.Dataref.typeNames is is called, and cached thereafter.
  */
  Smartgraphs.Dataref.types = function () {
    if (!types) {
      findTypes();
    }
    return types;
  };

  /**
    This is also duplicated from Smartgraphs.Datadef.

    Returns a list of the names of all Dataref subtypes. Value is calculated the first time this function or Smartgraphs.Dataref.types is is called, and cached thereafter.
  */
  Smartgraphs.Dataref.typeNames = function () {
    if (!typeNames) {
      findTypes();
    }
    return typeNames;
  };
}());
