// ==========================================================================
// Project:   Smartgraphs Learner Data Unit Test
// Copyright: ©2010 Concord Consortium
// Author:   Erich Ocean <erich.ocean@me.com>
// ==========================================================================
/*globals Smartgraphs module test ok equals same stop start setup teardown setupUserAndSessionFixtures JSV */

var env, schema;

module("Learner Data", {
  setup: function () {
    env = JSV.createEnvironment() ;
    schema = {
        "type": "object",
        "properties": {
            "_id": {
                "type": "string",
                "required": true
            },
            "_rev": {
                "type": "string",
                "required": true
            },
            "url": {
                "type": "string",
                "required": true
            },
            "learner": {
                "type": "object",
                "required": true,
                "properties": {
                    "url": {
                        "type": "string",
                        "required": true
                    }
                }
            },
            "activity": {
                "type": "object",
                "required": true,
                "properties": {
                    "id": {
                        "type": "string",
                        "required": true
                    },
                    "rev": {
                        "type": "string",
                        "required": true
                    },
                    "url": {
                        "type": "string",
                        "required": true
                    }
                }
            },
            "pages": {
                "required": true,
                "items": {
                    "type": "object",
                    "required": true,
                    "properties": {
                        "url": {
                            "type": "string",
                            "required": true
                        },
                        "steps": {
                            "required": true,
                            "items": {
                                "type": "object",
                                "required": true,
                                "properties": {
                                    "url": {
                                        "type": "string",
                                        "required": true
                                    },
                                    "responseTemplate": {
                                        "type": "object",
                                        "required": false,
                                        "properties": {
                                            "url": {
                                                "type": "string",
                                                "required": true
                                            },
                                            "values": {
                                                "required": true,
                                                "items": {
                                                    "type": ["any"],
                                                    "required": true
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
  }
});

test("Schema", function () {
  expect(1);
  var json = {
         "_id": "0cc8c9012cb8670d3afef2c8a3000ba4",
         "_rev": "2-114403824ad7e5a1f02340702c039466",
         "url": "/shared/example/learner/1",
         "learner": {
             "url": "/learner/1"
         },
         "activity": {
             "id": "example.df5",
             "rev": "1",
             "url": "/shared/example"
         },
         "pages": [
             {
                 "url": "/shared/example/page/1",
                 "steps": [
                     {
                         "url": "/shared/example/page/1/step/1",
                         "responseTemplate": {
                             "url": "/shared/example/response-template/example-q",
                             "values": [
                                 1
                             ]
                         }
                     },
                     {
                         "url": "/shared/example/page/1/step/2",
                         "responseTemplate": {
                             "url": "/components/response-template/open",
                             "values": [
                                 "Wow, I failed."
                             ]
                         }
                     },
                     {
                         "url": "/shared/example/page/1/step/3"
                     }
                 ]
             }
         ]
      },
      report = env.validate(json, schema);

  equals(report.errors.length, 0, "JSON is valid against the schema");
  if (report.errors.length) console.log(report);
});


