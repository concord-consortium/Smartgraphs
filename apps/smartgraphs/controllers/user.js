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
        savedResponse = activity
            ? this.get("%@%@".fmt(activity.get('id'), this.get('id')))
            : null,
        isCreate = savedResponse ? false : true,
        shouldUpdate = false ;

    if (!savedResponse) {
      // CREATE: we need to create the entire document structure first.
      savedResponse = {} ;
      this.set("%@%@".fmt(activity.get('id'), this.get('id')), savedResponse); // for next time...

      savedResponse.url = "%@%@".fmt(activityId, this.get('id'));
      savedResponse.learner = {
        url: this.get('id')
      };
      savedResponse.activity = {
        id: Smartgraphs.couchIdForStoreKey(activity.storeKey),
        rev: Smartgraphs.couchRevForStoreKey(activity.storeKey),
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

    // PERSIST: we need to either (a) create the document in couchdb, or (b)
    // updated an existing document.
    if (isCreate) {
      // console.log('Creating learner data.');
      SC.Request.postUrl('/db/%@'.fmt(Smartgraphs.get('couchDatabase')))
          .json()
          .header('Accept', 'application/json')
          .notify(this, '_didSaveLearnerData', savedResponse)
          .send(savedResponse);
    } else if (shouldUpdate) {
      // Need to add existing data from couchdb
      // console.log('Updating learner data.');
      var user = this.get('content'),
          url = '/db/%@/%@'.fmt(Smartgraphs.get('couchDatabase'), user._ids[savedResponse.url]);

      console.log(url);
      savedResponse._rev = user._revs[savedResponse.url];
      SC.Request.putUrl(url)
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

      user._ids[savedResponse.url] = body.id;
      user._revs[savedResponse.url] = body.rev;

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
    var activity = Smartgraphs.activityController.get('content'),
        savedResponse = activity
          ? this.get("%@%@".fmt(activity.get('id'), this.get('id')))
          : null ;

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
