// ==========================================================================
// Project:   Smartgraphs.evaluator
// Copyright: ©2010 Concord Consortium
// @author    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

(function () {
  
  var evaluate;       // defined below; defined here to make jslint happy
  
  var example = {
    "or": [{ "equals": [ "value", { "literal": "one" } ] }, 
           { "equals": [ "value", { "literal": "two" } ] }]
  };
  
  function or(terms, value) {
    for (var i = 0, ii = terms.length; i < ii; i++) {
      if (evaluate(terms[i], value)) return true;
    }
    return false;
  }
  
  function and(terms, value) {
    for (var i = 0, ii = terms.length; i < ii; i++) {
      if (!evaluate(terms[i], value)) return false;
    }
    return true;
  }
  
  function gt(terms, value) {
    return (evaluate(terms[0], value) > evaluate(terms[1], value));
  }
  
  function equals(terms, value) {
    return evaluate(terms[0], value) === evaluate(terms[1], value);
  }
  
  function strip(terms, value) {
    return (evaluate(terms, value) || '').strip();
  }
  
  function isIn(terms, value) {
    var item = evaluate(terms[0], value);
    var list = evaluate(terms[1], value);
    
    for (var i = 0, ii = list.length; i < ii; i++) {
      if (item === list[i]) return true;
    }
    return false;
  }
  
  function length(terms,value) {
    return (evaluate(terms, value) || []).length;
  }
  
  evaluate = function (exp, value) {
    if (exp === 'value') return value;

    if (typeof(exp) === 'string' || typeof(exp) === 'number' || exp.splice === [].splice || exp === undefined || exp === null) { 
      return exp;
    }
    
    for (var op in exp) {   // iterates only to the first 'own property', then returns
      if (exp.hasOwnProperty(op)) {
        var terms = exp[op];
        
        switch (op) {
          case 'literal':
            return terms;
          case 'or': 
            return or(terms, value);
          case 'and': 
            return and(terms, value);
          case 'equals':
            return equals(terms, value);
          case 'strip':
            return strip(terms, value);
          case 'in':
            return isIn(terms, value);
          case 'length':
            return length(terms, value);
          case 'gt':
            return gt(terms, value);
        }
        console.error('invalid expression operator: "' + op + '"');
        return;
      }
    }
  };
  
  Smartgraphs.evaluate = evaluate;

}());