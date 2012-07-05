/*globals Smartgraphs SC JSV */

// Create this once, for speed (it can be reused).
Smartgraphs.jsonSchemaEnviroment = JSV.createEnvironment() ;

// Validates a JSON object against Smartgraphs.LearnerDataSchema using JSV.
Smartgraphs.validateLearnerData = function(json) {
  if (!json) throw "Nothing to validate against."
  
  var report = Smartgraphs.jsonSchemaEnviroment.validate(json, Smartgraphs.LearnerDataSchema);
  if (report.errors.length !== 0) throw report;
  // else console.log('***** JSON in valid. *****')
};

// Defines a JSON Schema for the learner data saved in couchdb.
Smartgraphs.LearnerDataSchema = {
    "type": "object",
    "properties": {
        "_id": {
            "type": "string",
            "required": false // doesn't exist on create
        },
        "_rev": {
            "type": "string",
            "required": false // doesn't exist on create
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