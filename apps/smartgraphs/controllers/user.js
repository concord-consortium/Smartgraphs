// ==========================================================================
// Project:   Smartgraphs.userController
// Copyright: ©2010 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Smartgraphs.userController = SC.ObjectController.create(
/** @scope Smartgraphs.userController.prototype */ {

  /**
    This method creates/updates saved learner data for the current activity.
  */
  saveLearnerDataToServer: function() {
    // Saved responses are currently stored under the "id" key for the 
    // activity in the current User object. We could change this later.
    var activity = Smartgraphs.activityController.get('content'),
        activityId = activity ? activity.get('id') : null,
        savedResponse = this.get(this.get('id')),
        isCreate = savedResponse ? false : true,
        shouldUpdate = false ;

    if (!savedResponse) {
      // CREATE: we need to create the entire document structure first.
      savedResponse = {} ;
      this.set(this.get('id'), savedResponse); // for next time...

      savedResponse.url = this.get('id');
      savedResponse.learner = {
        url: this.get('id')
      };
      savedResponse.activity = {
        url: activityId
      };
      savedResponse.pages = [];

      activity.get('pages').forEach(function(page) {
        var pageHash = {
          url: page.get('id'),
          steps: []
        };
        savedResponse.pages.push(pageHash);

        page.get('steps').forEach(function(step) {
          var stepHash = {
            url: step.get('id')
          };
          pageHash.steps.push(stepHash);

          var responseTemplate = step.get('responseTemplate');
          if (responseTemplate) {
            var values = responseTemplate.get('values');
            if (values) {
              stepHash.responseTemplate = {
                url: responseTemplate.get('id'),
                values: values.copy()
              };
            }
          } else if (step.get('responseTemplates')) {
            stepHash.responseTemplates = [] ;
            step.get('responseTemplates').forEach(function(responseTemplate) {
              var values = responseTemplate.get('values');
              if (values) {
                stepHash.responseTemplates.push({
                  url: responseTemplate.get('id'),
                  values: values.copy()
                });
              }
            });
          }
        });
      });

    } else {
      // UPDATE: get the values for the current responseTemplate
      var responseTemplate = Smartgraphs.responseTemplateController.get('content'),
          values = responseTemplate ? responseTemplate.get('values') : null,
          savedResponseTemplate = this._findSavedResponseTemplate(responseTemplate);
      
      if (savedResponseTemplate && values) {
        savedResponseTemplate.values = values.copy();
        shouldUpdate = true ;
      }
    }

    // PERSIST
    if (isCreate || shouldUpdate) {
      // console.log('Creating learner data.');

      if (Smartgraphs.validateLearnerData) {
        Smartgraphs.validateLearnerData(savedResponse);
      }

      SC.Request.postUrl('%@/%@'.fmt(Smartgraphs.get('persistenceDatabaseBasePath'), this.get('learnerId')))
          .json()
          .header('Accept', 'application/json')
          .notify(this, '_didSaveLearnerData', savedResponse)
          .send(savedResponse);
    } else {
      // console.log('No new learner data.');
    }
  },

  _didSaveLearnerData: function(response, savedResponse) {
    // console.log('_didSaveLearnerData');
    if (SC.ok(response)) {
      var body = response.get('body'),
          user = this.get('content');

      // console.log(body);
    } else console.log('Failed to save learner data.');
  },

  /**
    This method queries pre-existing learner data for the passed in response
    template. Learner data is cached by the activity url on the user object,
    but is otherwise persisted separately for the user.
    
    Learner data should be loaded in advance, prior to calling this method.
  */
  savedValuesForResponseTemplate: function(responseTemplate) {
    // Saved responses are currently stored under the "id" key for the 
    // activity in the current User object. We could change this later.
    var savedResponseTemplate = this._findSavedResponseTemplate(responseTemplate);
    if (!savedResponseTemplate) return;
    else return savedResponseTemplate.values;
  },
  
  _findSavedResponseTemplate: function(responseTemplate) {
    var savedResponse = this.get(this.get('id'));

    if (!responseTemplate) return;
    if (!savedResponse) return;

    // Need to find the values that *may* be stored for responseTemplate. These 
    // values depend on the current activityStep and activityPage. Get them.
    var activityStep = Smartgraphs.activityStepController.get('content'),
        activityPage = activityStep.get('activityPage');

    // We now have enough information to retrieve saved values. Drill down.
    var ary = savedResponse.pages,
        idx, len, obj;

    if (!ary) return;

    // search for the correct page
    for (idx=0, len=ary.length; idx<len; ++idx) {
      obj = ary[idx]; // a page
      if (obj.url === activityPage.get('id')) break ;
      obj = null ;
    }

    if (!obj || !(ary = obj.steps)) return;

    // search for the correct step
    for (idx=0, len=ary.length; idx<len; ++idx) {
      obj = ary[idx]; // a step
      if (obj.url === activityStep.get('id')) break ;
      obj = null ;
    }

    if (!obj) return; // didn't find any saved data for this step

    // We need to support both responseTemplates (an Array) and responseTemplate
    // (a Hash).
    ary = obj.responseTemplates;
    if (!ary && (ary = obj.responseTemplate)) ary = [ary]; // normalize
    if (!ary) return; // no saved data for any response templates

    // Now search for the requested responseTemplate.
    for (idx=0, len=ary.length; idx<len; ++idx) {
      obj = ary[idx]; // a responseTemplate
      if (obj.url === responseTemplate.get('id')) return obj;
    }

    // We did not find anything for the given responseTemplate.
  }

});
