// ==========================================================================
// Project:   Smartgraphs - mainPage
// Copyright: ©2010 Concord Consortium
// Author:    Richard Klancer <rpk@pobox.com>
// ==========================================================================
/*globals Smartgraphs */

// This page describes the main user interface
Smartgraphs.mainPage = SC.Page.design({

  mainPane: SC.MainPane.design({
    theme: 'ace',

    defaultResponder: 'Smartgraphs.statechart',

    childViews: 'topToolbar container bottomToolbar'.w(),

    // Like a StaticContentView, allow the MainPane to become the touch responder and to respond to
    // touchend even while doing nothing with the touch. This prevents the root responder from
    // calling evt.preventDefault on the touch, which in turn causes the browser to blur any
    // textarea that has focus. At least in Chrome 27 for Android, this prevents the keyboard from
    // unexpectedly popping up when there is a stray touch on a view that does not have any touch
    // handlers in its parent view hierarchy (this can be a problem when the keyboard has been
    // dismissed but the text area has focus. The browser treats the touch as a cue to continue
    // editing the text area, unless the touch's handler or default action removes focus from the
    // textarea.)

    touchStart: function(evt){
      evt.allowDefault();
      return YES;
    },

    touchEnd: function(evt){
      evt.allowDefault();
      return YES;
    },

    topToolbar: SC.ToolbarView.design({
      anchorLocation: SC.ANCHOR_TOP,

      childViews: ['title', 'editButton', 'runButton', 'creditsButton', 'homeButton'],

      title: SC.LabelView.design({
        layout: { centerY: 0, height: 24, left: 8, width: 400 },
        controlSize: SC.LARGE_CONTROL_SIZE,
        fontWeight: SC.BOLD_WEIGHT,
        valueBinding:   'Smartgraphs.activityController.title'
      }),


      creditsButton: SC.ButtonView.design({
        layout: { right: 20, centerY: 0, height: 24, width: 80 },
        adjustLayout: function () {
          if (Smartgraphs.toolbarController.get('shouldShowHomeButton')) {
            this.adjust({right: 120});
          }
        }.observes('Smartgraphs.toolbarController.shouldShowHomeButton'),
        init: function() {
          sc_super();
          this.adjustLayout();
        },
        isVisibleBinding: 'Smartgraphs.toolbarController.shouldShowCreditsButton',
        displayProperties: ['layout'],
        title: 'Credits',
        action: 'showCredits'
      }),

      homeButton: SC.ButtonView.design({
        layout: { right: 20, centerY: 0, height: 24, width: 80 },
        isVisibleBinding: 'Smartgraphs.toolbarController.shouldShowHomeButton',
        title: 'Home',
        action: 'goHome'
      }),

      editButton: SC.ButtonView.design({
        layout: { right: 120, centerY: 0, height: 24, width: 80 },
        adjustLayout: function () {
          if (Smartgraphs.toolbarController.get('shouldShowHomeButton')) {
            this.adjust({right: 220});
          }
        }.observes('Smartgraphs.toolbarController.shouldShowHomeButton'),
        init: function() {
          sc_super();
          this.adjustLayout();
        },
        shouldShowEditButtonBinding: 'Smartgraphs.toolbarController.shouldShowEditButton',
        isVisible: function () {
          return Smartgraphs.toolbarController.get('shouldShowEditButton') && Smartgraphs.get('showEditButton');
        }.property('shouldShowEditButton'),
        displayProperties: ['layout'],
        title: 'Edit',
        action: 'openAuthorView'
      }),

      runButton: SC.ButtonView.design({
        layout: { right: 120, centerY: 0, height: 24, width: 80 },
        isVisibleBinding: 'Smartgraphs.toolbarController.shouldShowRunButton',
        title: 'Run',
        action: 'runActivity'
      })
    }),

    container: SC.SplitView.design({
      // min-width of 768 is portait mode on an iPad. min-height of ~500 accounts for IE8 with various
      // toolbars taking up the vertical space on a 1024x768 screen.
      layout: { top: 32, bottom: 33, minWidth: 768 },
      classNames: ['sg-overflow-fix'],      // fix the problem IE8 has with min-height and overflow: hidden
      defaultThickness: 200,
      topLeftMaxThickness: 300,
      layoutDirection: SC.LAYOUT_HORIZONTAL,

      topLeftView: SC.ScrollView.design({
        contentView: SC.SourceListView.design({
          classNames: ['outline'],
          contentBinding: 'Smartgraphs.activityOutlineController.arrangedObjects',
          contentValueKey: 'title',
          selectionBinding: 'Smartgraphs.activityOutlineController.selection',
          isSelectableBinding: 'Smartgraphs.activityOutlineController.isSelectable',
          exampleView: SC.ListItemView.extend({
            classNames: ['rk-test']
          })
        })
      }),

      dividerView: SC.SplitDividerView,

      bottomRightView: SC.ContainerView.design({
        nowShowingBinding: 'Smartgraphs.appWindowController.viewToShow'
      }),

      shouldShowOutlineBinding: 'Smartgraphs.appWindowController.shouldShowOutline',
      shouldShowOutlineDidChange: function () {
        if (this.get('shouldShowOutline')) {
          this.setPath('topLeftView.isVisible', YES);
          this.setPath('dividerView.isVisible', YES);
          this.updateChildLayout();
        }
        else {
          this.setPath('topLeftView.isVisible', NO);
          this.setPath('dividerView.isVisible', NO);
          this.get('bottomRightView').adjust('left', 0);
        }
      }.observes('shouldShowOutline')
    }),

    bottomToolbar: SC.ToolbarView.design({
      anchorLocation: SC.ANCHOR_BOTTOM,
      classNames: 'bottom-toolbar'.w(),
      childViews: ['pageButtons', 'nextButton'],

      // Back button removed: https://www.pivotaltracker.com/story/show/72097370
      // backButton: SC.ButtonView.design({
      //   layout: { left: 20, centerY: 0, height: 24, width: 80 },
      //   title: 'Back',
      //   // theme: 'point-left',
      //   theme: 'capsule',
      //   action: 'gotoPreviousPage',
      //   isSwipeLeft: YES,
      //   isEnabledBinding: 'Smartgraphs.activityViewController.enableBackPageButton'
      // }),

      pageButtons: Smartgraphs.PaginationView.design({
        layout: { left: 20, right: 120, height: 24, centerY: 0 },
        maxPageBinding: 'Smartgraphs.activityPagesController.maxPageCount',
        currentPageBinding: 'Smartgraphs.activityPagesController.currentPageNumber'
      }),

      nextButton: SC.ButtonView.design({
        layout: { right: 20, centerY: 0, height: 24, width: 80 },
        touchBoundary: { left: 50, right: 50, top: 50, bottom: 50 },
        title: 'Next',
        // theme: 'point-right',
        theme: 'capsule',
        action: 'gotoNextPage',
        isSwipeRight: YES,

        isVisibleBinding: 'Smartgraphs.activityViewController.showNextPageButton',
        isEnabledBinding: 'Smartgraphs.activityViewController.enableNextPageButton',
        isDefaultBinding: 'Smartgraphs.activityViewController.highlightNextPageButton'
      })
    })
  }),

  // a generic loading view for whatever is loading into mainPane.container
  loadingView: SC.View.design({
    classNames: 'smartgraph-pane'.w(),
    childViews: 'loadingIconView loadingMessageView'.w(),

    loadingIconView: SC.ImageView.design({
      layout: { width: 48, height: 48, centerX: 0, centerY: -39 },
      value: sc_static('resources/images/pane_loading.gif')
    }),

    loadingMessageView: SC.LabelView.design({
      classNames: 'loading'.w(),
      layout: { width: 200, height: 24, centerX: 0, centerY: 15 },
      textAlign: SC.ALIGN_CENTER,
      valueBinding: 'Smartgraphs.appWindowController.loadingMessage'
    })
  })

});
