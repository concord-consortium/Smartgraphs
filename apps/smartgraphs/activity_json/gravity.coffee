Smartgraphs.activityDocs ||= {}
Smartgraphs.activityDocs["/shared/gravity"] =

  _id:                 "gravity.df6"
  _rev:                1
  data_format_version: 6

  activity:

    title: "Was Galileo Right?"
    url:   "/shared/gravity"
    owner: "shared"

    pages: [
      "/shared/gravity/page/1"
      "/shared/gravity/page/2"
      "/shared/gravity/page/3"
      "/shared/gravity/page/4"
      "/shared/gravity/page/5"
      "/shared/gravity/page/6"
      "/shared/gravity/page/7"
      "/shared/gravity/page/8"
      "/shared/gravity/page/9"
      "/shared/gravity/page/10"
      "/shared/gravity/page/12"
      "/shared/gravity/page/13"
      "/shared/gravity/page/14"
    ]
    

  pages: [
    {
      name:      "Introduction"
      url:       "/shared/gravity/page/1"
      activity:  "/shared/gravity"
      index:     1
      introText: 
        '''
        <h1>Introduction</h1>
      
        <p>In the 1600s, Galileo Galilei (1564-1642) hypothesized that objects of different masses would fall at the
        same rate when they were dropped from the same height and allowed to fall freely. According to legend, Galileo
        dropped an iron cannon ball and a wooden ball from the Leaning Tower of Pisa to test his hypothesis.</p>
        '''
      steps:     [
        "/shared/gravity/page/1/step/1"
      ]
      firstStep: "/shared/gravity/page/1/step/1"
    }

    {
      name:      "Predict the Graphs (Light Ball)"
      url:       "/shared/gravity/page/2"
      activity:  "/shared/gravity"
      index:     2
      introText: 
        '''
        <h1>Predict the Graphs (Light Ball)</h1>
        
        <p>To test Galileo’s hypothesis, you are going to examine data collected when same-sized balls of different
        masses were dropped from a fixed height.</p>
        
        <p>To help you predict the motions, find a light ball and heavy ball that are the same size. (The heavy ball
        should be at least five times heavier than the light ball.)</p>
        '''
      steps:     [
        "/shared/gravity/page/2/step/1"
        "/shared/gravity/page/2/step/2"        
      ]
      firstStep: "/shared/gravity/page/2/step/1"
    }
    
    {
      name:      "Look at the Data (Light Ball)"
      url:       "/shared/gravity/page/3"
      activity:  "/shared/gravity"
      index:     3
      introText: 
        '''
        <h1>Look at the Data (Light Ball)</h1>
        
        <p>The data to the right was collected when a 102-gram softball was dropped from a height of about 2 meters.
        Every second, 20 data samples were collected.</p>      
        '''
      steps:     [
        "/shared/gravity/page/3/step/1"      
      ]
      firstStep: "/shared/gravity/page/3/step/1"
    }
    
    {
      name:      "Reflect on Predictions (Light Ball)"
      url:       "/shared/gravity/page/4"
      activity:  "/shared/gravity"
      index:     4
      introText: 
        '''
        <h1>Reflect on Predictions (Light Ball)</h1>

        <p>To the right is your predicted (red) and actual (blue) position-time and velocity-time data for the light
        ball.</p>
        '''
      steps:     [
        "/shared/gravity/page/4/step/1"      
      ]
      firstStep: "/shared/gravity/page/4/step/1"
    }
    
    {
      name:      "Predict the Graphs (Heavy Ball)"
      url:       "/shared/gravity/page/5"
      activity:  "/shared/gravity"
      index:     5
      introText: 
        '''
        <h1>Predict the Graphs (Heavy Ball)</h1>
        '''
      steps:     [
        "/shared/gravity/page/5/step/1"
      ]
      firstStep: "/shared/gravity/page/5/step/1"
    }
    
    {
      name:      "Look at the Data (Heavy Ball)"
      url:       "/shared/gravity/page/6"
      activity:  "/shared/gravity"
      index:     6
      introText: 
        '''
        <h1>Look at the Data (Heavy Ball)</h1>
        
        <p>The data to the right was collected when a heavy (170-gram) ball was dropped from a height of about 2
        meters. Every second, 20 data samples were collected.</p>
        '''
      steps:     [
        "/shared/gravity/page/6/step/1"
      ]
      firstStep: "/shared/gravity/page/6/step/1"
    }
    
    {
      name:      "Reflect on Prediction (Heavy Ball)"
      url:       "/shared/gravity/page/7"
      activity:  "/shared/gravity"
      index:     7
      introText: 
        '''
        <h1>Reflect on Prediction (Heavy Ball)</h1>
        
        <p>To the right is your predicted (red) and actual (blue) position-time and velocity-time data for the heavy
        ball.</p>
        '''
      steps:     [
        "/shared/gravity/page/7/step/1"
      ]
      firstStep: "/shared/gravity/page/7/step/1"
    }
    
    {
      name:      "Compare the Data"
      url:       "/shared/gravity/page/8"
      activity:  "/shared/gravity"
      index:     8
      introText: 
        '''
        <h1>Compare the Data I</h1>

        <p>Look at the actual data for the light ball and the heavy ball.</p>
        '''
      steps:     [
        "/shared/gravity/page/8/step/1"
        "/shared/gravity/page/8/step/2"
        "/shared/gravity/page/8/step/3"
      ]
      firstStep: "/shared/gravity/page/8/step/1"
    }
    
    {
      name:      "Choose Points (Light Ball)"
      url:       "/shared/gravity/page/9"
      activity:  "/shared/gravity"
      index:     9
      introText: 
        '''
        <h1>Choose Points (Light Ball)</h1>

        <p>Let’s look more closely at the velocities of the two balls from the time they were released until the time
        they reached the ground.</p> 
        
        <p>The slope of a velocity-time graph tells us how the velocity of an object changed over time.</p>
        
        <p>First, you will mark the portion of the graph which you believe <i>best represents</i> the period when the
        ball was falling.</p>
        '''
      steps:     [
        "/shared/gravity/page/9/step/p1"
        "/shared/gravity/page/9/step/p1-hint-1"
        "/shared/gravity/page/9/step/p1-hint-2"
        "/shared/gravity/page/9/step/p1-hint-3"
        "/shared/gravity/page/9/step/p1-hint-4"
        "/shared/gravity/page/9/step/p2"
        "/shared/gravity/page/9/step/p2-hint-1"
        "/shared/gravity/page/9/step/p2-hint-2"
        "/shared/gravity/page/9/step/p2-hint-3"
        "/shared/gravity/page/9/step/p2-hint-4"        
        "/shared/gravity/page/9/step/p2-same-point"
        "/shared/gravity/page/9/step/done"
      ]
      firstStep: "/shared/gravity/page/9/step/p1"
    }
    
    {
      name:      "Find the Slope (Light Ball)"
      url:       "/shared/gravity/page/10"
      activity:  "/shared/gravity"
      index:     10
      introText: 
        '''
        <h1>Find the Slope (Light Ball)</h1>

        <p>The slope of a velocity-time graph tells us how the velocity of an object changed over time.</p>

        <p>A line connecting the points you selected is shown to the right. The slope of this line is a good
        approximation of the slope of the velocity-time graph for the whole time that the ball fell.</p>
      
        '''
        
      contextVars: [
        { name: "initial-velocity",           value: ["coord", "y", ["listItem", 1, ["slopeToolOrder", "light-ball-point-1", "light-ball-point-2"]]] }
        { name: "initial-velocity-as-string", value: ["toFixedString", ["get", "initial-velocity"], 2] }
        { name: "final-velocity",             value: ["coord", "y", ["listItem", 2, ["slopeToolOrder", "light-ball-point-1", "light-ball-point-2"]]] }
        { name: "final-velocity-as-string",   value: ["toFixedString", ["get", "final-velocity"], 2] }
        { name: "delta-velocity",             value: ["-", ["get", "final-velocity"], ["get", "initial-velocity"]] }
        { name: "delta-velocity-as-string",   value: ["toFixedString", ["get", "delta-velocity"], 2] }

        { name: "initial-time",               value: ["coord", "x", ["listItem", 1, ["slopeToolOrder", "light-ball-point-1", "light-ball-point-2"]]] }
        { name: "initial-time-as-string",     value: ["toFixedString", ["get", "initial-time"], 2] }
        { name: "final-time",                 value: ["coord", "x", ["listItem", 2, ["slopeToolOrder", "light-ball-point-1", "light-ball-point-2"]]] }
        { name: "final-time-as-string",       value: ["toFixedString", ["get", "final-time"], 2] }
        { name: "delta-time",                 value: ["-", ["get", "final-time"], ["get", "initial-time"]] }
        { name: "delta-time-as-string",       value: ["toFixedString", ["get", "delta-time"], 2] }

        { name: "slope",                      value: ["/", ["get", "delta-velocity"], ["get", "delta-time"]] }
        { name: "slope-as-string",            value: ["toFixedString", ["get", "slope"], 2] }
      ]
      
      steps:     [
        "/shared/gravity/page/10/step/slope-initial"
        "/shared/gravity/page/10/step/slope-initial-hint"
        "/shared/gravity/page/10/step/velocity"
        "/shared/gravity/page/10/step/velocity-hint"
        "/shared/gravity/page/10/step/velocity-giveaway"
        "/shared/gravity/page/10/step/time-velocity-incorrect"
        "/shared/gravity/page/10/step/time-velocity-correct"
        "/shared/gravity/page/10/step/time-hint"
        "/shared/gravity/page/10/step/time-giveaway"
        "/shared/gravity/page/10/step/slope-final-time-incorrect"
        "/shared/gravity/page/10/step/slope-final-time-correct"
        "/shared/gravity/page/10/step/slope-final-giveaway"
        "/shared/gravity/page/10/step/slope-correct"
      ]
      firstStep: "/shared/gravity/page/10/step/slope-initial"
    }
    
    
    {
      name:      "Find the Slope (Heavy Ball)"
      url:       "/shared/gravity/page/12"
      activity:  "/shared/gravity"
      index:     12
      introText: 
        '''
        <h1>Find the Slope (Heavy Ball)</h1>
        '''
      steps:     [
        "/shared/gravity/page/12/step/1"
      ]
      firstStep: "/shared/gravity/page/12/step/1"
    }
    
    
    {
      name:      "Compare the Accelerations"
      url:       "/shared/gravity/page/13"
      activity:  "/shared/gravity"
      index:     13
      introText: 
        '''
        <h1>Compare the Accelerations</h1>

        <p>The slope of a velocity-time graph is commonly called the acceleration. The acceleration of an object due to
        gravity is a constant, called <i>g</i>. The accepted value of <i>g</i> for objects near the surface of the
        Earth is 9.8 m/s<sup>2</sup>.<p>
        
        <p>Here is the value of <i>g</i> that you found for the light ball: ... m/s<sup>2</sup></p>
        
        <p>Here is the value of <i>g</i> that you found for the heavy ball: ... m/s<sup>2</sup></p>
        '''
        
      steps:     [
        "/shared/gravity/page/13/step/1"
        "/shared/gravity/page/13/step/2"        
      ]
      firstStep: "/shared/gravity/page/13/step/1"
    }
    
    {
      name:      "Conclusion"
      url:       "/shared/gravity/page/14"
      activity:  "/shared/gravity"
      index:     14
      introText: 
        '''
        <h1>Conclusion</h1>
        
        <p>Do heavier objects fall faster?</p>
        
        <p>In this activity, you predicted and confirmed whether a light ball would fall faster than a heavier ball,
        just as Galileo likely did.</p>
        
        <p>According to legend, Galileo observed that the two balls fell at the same rate. He explained that this
        phenomenon was due to the effects of gravity acting on the two balls in a similar way.</p>
        '''
      steps:     [
        "/shared/gravity/page/14/step/1"
        "/shared/gravity/page/14/step/2"        
      ]
      firstStep: "/shared/gravity/page/14/step/1"
    }
  ]

  steps: [
    {
      url:          "/shared/gravity/page/1/step/1"
      activityPage: "/shared/gravity/page/1"
      
      beforeText: 
        '''
        <p>Do heavier objects fall at the same rate as lighter objects?</p>

        <p>What do you think Galileo observed? Explain your reasoning.<p>
        '''
      paneConfig: "single"
      panes: 
        single:
          type:    "image"
          # source:   http://www.flickr.com/photos/virgomerry/315412804/
          # also see: http://www.flickr.com/photos/virgomerry/315412603/
          path:    "/static/smartgraphs/en/current/resources/images/leaning-tower-of-pisa-wide.jpg"
          caption: "Creative Commons BY-NC-SA 2.0 photo courtesy flickr user **Mary** (<a href=\"http://www.flickr.com/photos/virgomerry/315412804/\">link</a>)"

      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    {
      url:          "/shared/gravity/page/2/step/1"
      activityPage: "/shared/gravity/page/2"
      
      beforeText: 
        '''
        <p>Try dropping each ball from a height of at least 2.5 meters.</p>
        
        <p>To the right, predict what you think the position-time graph and velocity-time graph for the light ball will
        look like.</p>
        
        <p>(Assume that the ground is at 0 meters.)</p>
        '''
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Predicted Position vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/position"
          data:        []
          annotations: ["light-ball-position"]

        bottom:
          type:        "graph"
          title:       "Predicted Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        []
          annotations: ["light-ball-velocity"]

      tools: [
        {
          name: "prediction"
          setup:
            pane:           "top"
            annotationName: "light-ball-position"
        }

        {
          name: "prediction"
          setup:
            pane:           "bottom"
            annotationName: "light-ball-velocity"
        }
      ]

      submitButtonTitle: "OK"
      defaultBranch: "/shared/gravity/page/2/step/2"
    }
    
    
    {
      url:          "/shared/gravity/page/2/step/2"
      activityPage: "/shared/gravity/page/2"
      
      beforeText: 
        '''
        <p>Explain any points of interest on the graphs.</p>
        '''
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Predicted Position vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/position"
          data:        []
          annotations: ["light-ball-position"]

        bottom:
          type:        "graph"
          title:       "Predicted Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        []
          annotations: ["light-ball-velocity"]
      
      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]   
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    {
      url:          "/shared/gravity/page/3/step/1"
      activityPage: "/shared/gravity/page/3"

      beforeText: 
        '''
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Actual Position vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/position"
          data:        ["light-ball-position"]
          annotations: []

        bottom:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: []

      hideSubmitButton: true
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/4/step/1"
      activityPage: "/shared/gravity/page/4"

      beforeText: 
        '''
        <p>How does the actual data for the light ball differ from your predicted data?</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Position vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/position"
          data:        ["light-ball-position"]
          annotations: ["light-ball-position"]

        bottom:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-velocity"]
      
      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]      
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    

    {
      url:          "/shared/gravity/page/5/step/1"
      activityPage: "/shared/gravity/page/5"

      beforeText: 
        '''
        <p>To the right, predict what you think the position-time graph and velocity-time graph will look like when the
        heavy ball is droppedfrom the same height.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Predicted Position vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/position"
          data:        []
          annotations: ["heavy-ball-position"]

        bottom:
          type:        "graph"
          title:       "Predicted Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        []
          annotations: ["heavy-ball-velocity"]

      tools: [
        {
          name: "prediction"
          setup:
            pane:           "top"
            annotationName: "heavy-ball-position"
        }

        {
          name: "prediction"
          setup:
            pane:           "bottom"
            annotationName: "heavy-ball-velocity"
        }
      ]
            
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    {
      url:          "/shared/gravity/page/6/step/1"
      activityPage: "/shared/gravity/page/6"

      beforeText: 
        '''
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Actual Position vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/position"
          data:        ["heavy-ball-position"]
          annotations: []

        bottom:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: []

      hideSubmitButton: true
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/7/step/1"
      activityPage: "/shared/gravity/page/7"
      
      beforeText: 
        '''
        <p>What happened to the ball's velocity as it approached the ground? Is this what you expected?</p>
        '''
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Position vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/position"
          data:        ["heavy-ball-position"]
          annotations: ["heavy-ball-position"]

        bottom:
          type:        "graph"
          title:       "Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: ["heavy-ball-velocity"]
        
      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]   
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/8/step/1"
      activityPage: "/shared/gravity/page/8"
      
      beforeText: 
        '''
        <p>How does the velocity-time graph of the light ball compare to the velocity-time graph of the heavy ball?</p>
        '''
      
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: []

        bottom:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: []
          
      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]   
      submitButtonTitle: "OK"
      defaultBranch: "/shared/gravity/page/8/step/2"
    }
    
    
    {
      url:          "/shared/gravity/page/8/step/2"
      activityPage: "/shared/gravity/page/8"
      
      beforeText: 
        '''
        <p>On each graph, label what happened to the ball’s velocity as it approached the ground.</p>
        <p>Make sure to label where the ball’s velocity <i>increased</i>, <i>decreased</i>, or <i>stayed the same</i>.
        </p>
        '''
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: []

        bottom:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: []

      tools: [
        {
          name: "label"
          setup:
            pane: "top"
            labelSetName: "light-ball-labels"
        }
        
        { 
          name: "label"
          setup:
            pane: "bottom"
            labelSetName: "heavy-ball-labels"
        }
      ]
      
      submitButtonTitle: "OK"
      defaultBranch: "/shared/gravity/page/8/step/3"
    }
    
    
    {
      url:          "/shared/gravity/page/8/step/3"
      activityPage: "/shared/gravity/page/8"
      
      beforeText: 
        '''
        <p>On each graph, label where the velocity might have been <i>fastest</i>, <i>slowest</i>, or <i>0</i>.</p>
        '''
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: []

        bottom:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: []

      tools: [
        {
          name: "label"
          setup:
            pane: "top"
            labelSetName: "light-ball-labels"
        }
        
        { 
          name: "label"
          setup:
            pane: "bottom"
            labelSetName: "heavy-ball-labels"
        }
      ]
      
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p1"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Select a point at which the ball is falling. (Try to pick the beginning of the region that <i>best
        represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-1"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        criterion: ["and", [">=", ["coord", "x", "light-ball-point-1"], 0.5], ["<=", ["coord", "x", "light-ball-point-1"], 0.95]]
        step:      "/shared/gravity/page/9/step/p2"
      ]
      defaultBranch: "/shared/gravity/page/9/step/p1-hint-1"
    }
    

    {
      url:          "/shared/gravity/page/9/step/p1-hint-1"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. The ball was not yet falling at this point.</p>
        
        <p>Select a point at which the ball is falling. (Try to pick the beginning of the region that <i>best
        represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-1"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        criterion: ["and", [">=", ["coord", "x", "light-ball-point-1"], 0.5], ["<=", ["coord", "x", "light-ball-point-1"], 0.95]]
        step:      "/shared/gravity/page/9/step/p2"
      ]
      defaultBranch: "/shared/gravity/page/9/step/p1-hint-2"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p1-hint-2"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. When the velocity is 0 (or nearly 0), the ball is not falling.</p>
        
        <p>Select a point at which the ball is falling. (Try to pick the beginning of the region that <i>best
        represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-1"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        criterion: ["and", [">=", ["coord", "x", "light-ball-point-1"], 0.5], ["<=", ["coord", "x", "light-ball-point-1"], 0.95]]
        step:      "/shared/gravity/page/9/step/p2"
      ]
      defaultBranch: "/shared/gravity/page/9/step/p1-hint-3"
    }
    

    {
      url:          "/shared/gravity/page/9/step/p1-hint-3"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. The highlighted region shows when the ball had a nonzero velocity and was therefore falling.</p>
        
        <p>Select a point at which the ball is falling. (Try to pick the beginning of the region that <i>best
        represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-motion-segment", "light-ball-point-1"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-1"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        criterion: ["and", [">=", ["coord", "x", "light-ball-point-1"], 0.5], ["<=", ["coord", "x", "light-ball-point-1"], 0.95]]
        step:      "/shared/gravity/page/9/step/p2"
      ]
      defaultBranch: "/shared/gravity/page/9/step/p1-hint-4"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p1-hint-4"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. The point you selected was not in the highlighted region in which the ball was falling. Try
        again.</p>
        
        <p>Select a point at which the ball is falling. (Try to pick the beginning of the region that <i>best
        represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-motion-segment", "light-ball-point-1"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-1"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        criterion: ["and", [">=", ["coord", "x", "light-ball-point-1"], 0.5], ["<=", ["coord", "x", "light-ball-point-1"], 0.95]]
        step:      "/shared/gravity/page/9/step/p2"
      ]
      defaultBranch: "/shared/gravity/page/9/step/p1-hint-4"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p2"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Now select a second point at which the ball was falling. (Try to pick the end of the region that <i>best
        represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-2"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        {
          criterion: ["=", ["coord", "x", "light-ball-point-1"], ["coord", "x", "light-ball-point-2"]]
          step:      "/shared/gravity/page/9/step/same-point"
        }
        
        {
          criterion: ["and", [">=", ["coord", "x", "light-ball-point-2"], 0.5], ["<=", ["coord", "x", "light-ball-point-2"], 0.95]]
          step:      "/shared/gravity/page/9/step/done"
        }
      ]
      defaultBranch: "/shared/gravity/page/9/step/p2-hint-1"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p2-hint-1"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. The ball was not yet falling at this point.</p>
        
        <p>Try again. Select a second point at which the ball was falling. (Try to pick the end of the region that
        <i>best represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-2"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        {
          criterion: ["=", ["coord", "x", "light-ball-point-1"], ["coord", "x", "light-ball-point-2"]]
          step:      "/shared/gravity/page/9/step/same-point"
        }
        
        {
          criterion: ["and", [">=", ["coord", "x", "light-ball-point-2"], 0.5], ["<=", ["coord", "x", "light-ball-point-2"], 0.95]]
          step:      "/shared/gravity/page/9/step/done"
        }
      ]
      defaultBranch: "/shared/gravity/page/9/step/p2-hint-2"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p2-hint-2"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. When the velocity is 0 (or nearly 0), the ball is not falling.</p>
        
        <p>Try again. Select a second point at which the ball was falling. (Try to pick the end of the region that
        <i>best represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-2"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        {
          criterion: ["=", ["coord", "x", "light-ball-point-1"], ["coord", "x", "light-ball-point-2"]]
          step:      "/shared/gravity/page/9/step/same-point"
        }
        
        {
          criterion: ["and", [">=", ["coord", "x", "light-ball-point-2"], 0.5], ["<=", ["coord", "x", "light-ball-point-2"], 0.95]]
          step:      "/shared/gravity/page/9/step/done"
        }
      ]
      defaultBranch: "/shared/gravity/page/9/step/p2-hint-3"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p2-hint-3"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. The velocity was nonzero in the highlighted region of the graph. This is when the ball was
        falling. Choose a point (different than the first) in this region.</p>
        
        <p>Try again. Select a second point at which the ball was falling. (Try to pick the end of the region that
        <i>best represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-motion-segment", "light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-2"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        {
          criterion: ["=", ["coord", "x", "light-ball-point-1"], ["coord", "x", "light-ball-point-2"]]
          step:      "/shared/gravity/page/9/step/same-point"
        }
        
        {
          criterion: ["and", [">=", ["coord", "x", "light-ball-point-2"], 0.5], ["<=", ["coord", "x", "light-ball-point-2"], 0.95]]
          step:      "/shared/gravity/page/9/step/done"
        }
      ]
      defaultBranch: "/shared/gravity/page/9/step/p2-hint-4"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/p2-hint-4"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Incorrect. The point you selected was not in the highlighted region in which the ball was falling. Try
        again.</p>
        
        <p>Try again. Select a second point at which the ball was falling. (Try to pick the end of the region that
        <i>best represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-motion-segment", "light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-2"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        {
          criterion: ["=", ["coord", "x", "light-ball-point-1"], ["coord", "x", "light-ball-point-2"]]
          step:      "/shared/gravity/page/9/step/same-point"
        }
        
        {
          criterion: ["and", [">=", ["coord", "x", "light-ball-point-2"], 0.5], ["<=", ["coord", "x", "light-ball-point-2"], 0.95]]
          step:      "/shared/gravity/page/9/step/done"
        }
      ]
      defaultBranch: "/shared/gravity/page/9/step/p2-hint-4"
    }
    
    
    {
      url:          "/shared/gravity/page/9/step/same-point"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>The point you selected is the same as the first point you selected. You need two different points in order
        to calculate the slope of the line between them.</p>
        
        <p>Try again. Select a second point at which the ball was falling. (Try to pick the end of the region that
        <i>best represents</i> when the ball was falling.)</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]

      tools: [
        name: "tagging"
        setup:
          tag: "light-ball-point-2"
          data: "light-ball-velocity"
      ]
      
      hideSubmitButton: false
      submitButtonTitle: "OK"
      
      responseBranches: [
        {
          criterion: ["=", ["coord", "x", "light-ball-point-1"], ["coord", "x", "light-ball-point-2"]]
          step:      "/shared/gravity/page/9/step/same-point"
        }
        
        {
          criterion: ["and", [">=", ["coord", "x", "light-ball-point-2"], 0.5], ["<=", ["coord", "x", "light-ball-point-2"], 0.95]]
          step:      "/shared/gravity/page/9/step/done"
        }
      ]
      defaultBranch: "/shared/gravity/page/9/step/p2-hint-1"
    }
    
    {
      url:          "/shared/gravity/page/9/step/done"
      activityPage: "/shared/gravity/page/9"

      beforeText: 
        '''
        <p>Here is the region defined by the points you selected.</p>
        
        <p>On the next page, you will calculate the slope of the velocity-time graph in this region.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-selected-segment", "light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
      
      isFinalStep:            true
      hideSubmitButton:       true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/slope-initial"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>What is the slope of the line between the points you selected, in m/s<sup>2</sup>?</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "slope"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/slope-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/slope-initial-hint"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/slope-initial-hint"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Incorrect. Hint: Recall that the slope is the change in the velocity at the two points, divided by the
        change in the time.</p>
        
        <p>What is the slope of the line between the points you selected, in m/s<sup>2</sup>?</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "slope"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/slope-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/velocity"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/velocity"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Incorrect. What was the change in the velocity of the ball, in m/s?</p>
        
        <p>Hint: Look at the graph.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:                   "graph"
          title:                  "Velocity vs. Time (Light Ball)"
          xAxis:                  "/shared/gravity/axes/time"
          yAxis:                  "/shared/gravity/axes/velocity"
          data:                   ["light-ball-velocity"]
          annotations:            ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line"]
          highlightedAnnotations: ["light-ball-rise-arrow"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "delta-velocity"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/time-velocity-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/velocity-hint"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/velocity-hint"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Incorrect. What was the change in the velocity of the ball, in m/s?</p>
        
        
        <p>Hint: Look at the table and the graph.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow"]
          
        bottom:
          type:                   "table"
          data:                   ["light-ball-velocity"]
          annotations:            ["light-ball-point-1", "light-ball-point-2"]
          highlightedAnnotations: ["light-ball-rise-bracket"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "delta-velocity"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/time-velocity-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/velocity-giveaway"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/velocity-giveaway"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Incorrect. The change in the velocity of the ball was %@ m/s - %@ m/s, or %@ m/s</p>
        '''

      substitutedExpressions: ["final-velocity-as-string", "initial-velocity-as-string", "delta-velocity-as-string"]

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket"]
      
      submitButtonTitle: "OK"
      defaultBranch: "/shared/gravity/page/10/step/time-velocity-incorrect"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/time-velocity-correct"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Correct! What is the change in time between the points you selected, in seconds?</p>
        
        <p>Hint: Look at the graph.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:                   "graph"
          title:                  "Velocity vs. Time (Light Ball)"
          xAxis:                  "/shared/gravity/axes/time"
          yAxis:                  "/shared/gravity/axes/velocity"
          data:                   ["light-ball-velocity"]
          annotations:            ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow"]
          highlightedAnnotations: ["light-ball-run-arrow"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "delta-time"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/slope-final-time-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/time-hint"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/time-velocity-incorrect"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>What is the change in time between the points you selected, in seconds?</p>
        
        <p>Hint: Look at the graph.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:                   "graph"
          title:                  "Velocity vs. Time (Light Ball)"
          xAxis:                  "/shared/gravity/axes/time"
          yAxis:                  "/shared/gravity/axes/velocity"
          data:                   ["light-ball-velocity"]
          annotations:            ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow"]
          highlightedAnnotations: ["light-ball-run-arrow"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "delta-time"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/slope-final-time-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/time-hint"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/time-hint"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Incorrect. What is the change in time between the points you selected, in seconds?</p>
        
        <p>Hint: Look at the table and the graph.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow", "light-ball-run-arrow"]
          
        bottom:
          type:                   "table"
          data:                   ["light-ball-velocity"]
          annotations:            ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket"]
          highlightedAnnotations: ["light-ball-run-bracket"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "delta-time"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/slope-final-time-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/time-giveaway"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/time-giveaway"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Incorrect. The change in time between the points is %@ s - %@ s, or %@ s.</p>
        '''

      substitutedExpressions: ["final-time-as-string", "initial-time-as-string", "delta-time-as-string"]
        
      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow", "light-ball-run-arrow"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket", "light-ball-run-bracket"]
          
      submitButtonTitle: "OK"
      defaultBranch: "/shared/gravity/page/10/step/slope-final-time-incorrect"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/slope-final-time-correct"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Correct! If the change in velocity is %@ m/s during a change in time of %@ s, then what is the slope of the velocity-time graph, in m/s<sup>2</sup>?</p>
        '''

      substitutedExpressions: ["delta-velocity-as-string", "delta-time-as-string"]
      
      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow", "light-ball-run-arrow"]
          
        bottom:
          type:                   "table"
          data:                   ["light-ball-velocity"]
          annotations:            ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket", "light-ball-run-bracket"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "slope"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/slope-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/slope-final-giveaway"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/slope-final-time-incorrect"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>If the change in velocity is %@ m/s during a change in time of %@ s, then what is the slope of the velocity-time graph, in m/s<sup>2</sup>?</p>
        '''

      substitutedExpressions: ["delta-velocity-as-string", "delta-time-as-string"]
      
      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow", "light-ball-run-arrow"]
          
        bottom:
          type:                   "table"
          data:                   ["light-ball-velocity"]
          annotations:            ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket", "light-ball-run-bracket"]
      
      responseTemplate: "/components/response-template/numeric"
      submitButtonTitle: "Check My Answer"
      
      responseBranches: [
        criterion: ["withinAbsTolerance", ["get", "slope"], ["responseField", 1], 0.1]
        step:      "/shared/gravity/page/10/step/slope-correct"
      ]
      defaultBranch: "/shared/gravity/page/10/step/slope-final-giveaway"
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/slope-final-giveaway"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        <p>Incorrect. If the change in velocity is %@ m/s during a change in time of %@ s, then the slope is %@ m/s<sup>2</sup></p>
        '''

      substitutedExpressions: ["delta-velocity-as-string", "delta-time-as-string", "slope-as-string"]
      
      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-slope-line", "light-ball-rise-arrow", "light-ball-run-arrow"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2", "light-ball-rise-bracket", "light-ball-run-bracket"]
          
      isFinalStep:            true
      hideSubmitButton:       true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/10/step/slope-correct"
      activityPage: "/shared/gravity/page/10"

      beforeText: 
        '''
        Correct! The slope of the velocity-time graph between the points you selected is %@ m/s<sup>2</sup>
        '''

      substitutedExpressions: ["slope-as-string"]

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
          
        bottom:
          type:        "table"
          data:        ["light-ball-velocity"]
          annotations: ["light-ball-point-1", "light-ball-point-2"]
          
      isFinalStep:            true
      hideSubmitButton:       true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/12/step/1"
      activityPage: "/shared/gravity/page/12"

      beforeText: 
        '''
          <p>Find the slope in m/s<sup>2</sup> of the velocity-time graph of the heavy ball while the ball was in
          motion.</p>
        '''

      paneConfig:   "split"
      panes:
        top:
          type:        "graph"
          title:       "Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: []

        bottom:
          type:        "table"
          data:        ["heavy-ball-velocity"]

      hideSubmitButton: true
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    
    {
      url:          "/shared/gravity/page/13/step/1"
      activityPage: "/shared/gravity/page/13"
      
      beforeText: 
        '''
        <p>How does your value compare with the accepted value?</p>
        '''
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: []

        bottom:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: []
          
      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]   
      submitButtonTitle: "OK"
      defaultBranch: "/shared/gravity/page/13/step/2"
    }
    
    
    {
      url:          "/shared/gravity/page/13/step/2"
      activityPage: "/shared/gravity/page/13"
      
      beforeText: 
        '''
        <p>What factors might have caused errors in your measurements?</p>
        '''
      paneConfig: "split"
      panes:
        top:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Light Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["light-ball-velocity"]
          annotations: []

        bottom:
          type:        "graph"
          title:       "Actual Velocity vs. Time (Heavy Ball)"
          xAxis:       "/shared/gravity/axes/time"
          yAxis:       "/shared/gravity/axes/velocity"
          data:        ["heavy-ball-velocity"]
          annotations: []
      
      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]      
      isFinalStep: true
      nextButtonShouldSubmit: true
    }
    
    {
      url:          "/shared/gravity/page/14/step/1"
      activityPage: "/shared/gravity/page/14"
      
      beforeText: 
        '''
        <p>What did you discover about the velocity of a light ball versus a heavy ball as each falls to the
        ground?</p>
        '''
      paneConfig: "single"
      panes: 
        single:
          type:    "image"
          # source:   http://www.flickr.com/photos/virgomerry/315412804/
          path:    "/static/smartgraphs/en/current/resources/images/leaning-tower-of-pisa-wide.jpg"
          caption: "Creative Commons BY-NC-SA 2.0 photo courtesy flickr user **Mary** (<a href=\"http://www.flickr.com/photos/virgomerry/315412804/\">link</a>)"
          
      responseTemplate: "/components/response-template/open"
      submissibilityCriterion: ["textLengthIsAtLeast", 1, ["responseField", 1]]
      submitButtonTitle: "OK"
      defaultBranch: "/shared/gravity/page/14/step/2"
    }
    
    {
      url:          "/shared/gravity/page/14/step/2"
      activityPage: "/shared/gravity/page/14"
      
      beforeText: 
        '''
        <p>This is the conclusion of the activity</p>
        '''
      paneConfig: "single"
      panes: 
        single:
          type:    "image"
          # source:   http://www.flickr.com/photos/virgomerry/315412804/
          path:    "/static/smartgraphs/en/current/resources/images/leaning-tower-of-pisa-wide.jpg"
          caption: "Creative Commons BY-NC-SA 2.0 photo courtesy flickr user **Mary** (<a href=\"http://www.flickr.com/photos/virgomerry/315412804/\">link</a>)"

      isFinalStep: true
      hideSubmitButton: true
    }
        
  ]

  responseTemplates: [
    {
      url:              "/components/response-template/open"
      templateString:   ""
      fieldTypes:       ["textarea"]
      fieldChoicesList: [null]
      initialValues:    [""]
    }
    
    {
      url:              "/components/response-template/numeric"
      templateString:   ""
      fieldTypes:       ["numeric"]
      fieldChoicesList: [null]
      initialValues:    [""]
    }
  ]
  
  axes: [
    {
      url:    "/shared/gravity/axes/time"
      units:  "/builtins/units/seconds"
      min:    0
      max:    1.5
      nSteps: 15
      label:  "Time"
    }
    {
      url:    "/shared/gravity/axes/position"
      units:  "/builtins/units/meters"
      min:    0
      max:    4
      nSteps: 4
      label:  "Position"
    }
    {
      url:    "/shared/gravity/axes/velocity"
      units:  "/builtins/units/meters-per-second"
      min:    -2
      max:    10
      nSteps: 12
      label:  "Velocity"
    }
  ]

  datadefs: [
    {
      type: "UnorderedDataPoints"
      records: [
        {
          url:         "/shared/gravity/datadefs/light-ball-position"
          name:        "light-ball-position"
          activity:    "/shared/gravity"
          xUnits:      "/builtins/units/seconds"
          xLabel:      "Time"
          xShortLabel: "Time"
          yUnits:      "/builtins/units/meters"
          yLabel:      "Position"
          yShortLabel: "Position"
          points:      [[0.05,0.178], [0.1,0.177], [0.15,0.165], [0.2,0.165], [0.25,0.164], [0.3,0.164], [0.35,0.161], [0.4,0.162], [0.45,0.159], [0.5,0.174], [0.55,0.249], [0.6,0.352], [0.65,0.477], [0.7,0.626], [0.75,0.801], [0.8,1], [0.85,1.223], [0.9,1.472], [0.95,1.738]]
        }
        
        {
          url:         "/shared/gravity/datadefs/heavy-ball-position"
          name:        "heavy-ball-position"
          activity:    "/shared/gravity"
          xUnits:      "/builtins/units/seconds"
          xLabel:      "Time"
          xShortLabel: "Time"
          yUnits:      "/builtins/units/meters"
          yLabel:      "Position"
          yShortLabel: "Position"
          points:      [[0.05,0.159], [0.1,0.159], [0.15,0.159], [0.2,0.159], [0.25,0.16], [0.3,0.158], [0.35,0.158], [0.4,0.157], [0.45,0.161], [0.5,0.158], [0.55,0.208], [0.6,0.305], [0.65,0.418], [0.7,0.565], [0.75,0.739], [0.8,0.933], [0.85,1.153], [0.9,1.402], [0.95,1.671], [1,1.964]]
        }
      ]
    }
    {
      type: "FirstOrderDifference"
      records: [
        {
          url:          "/shared/gravity/datadefs/light-ball-velocity"
          name:         "light-ball-velocity"
          activity:     "/shared/gravity"
          xUnits:       "/builtins/units/seconds"
          xLabel:       "Time"
          xShortLabel:  "Time"
          yUnits:       "/builtins/units/meters-per-second"
          yLabel:       "Velocity"
          yShortLabel:  "Vel"
          source:       "/shared/gravity/datadefs/light-ball-position"
          windowLength: 4
        }
        
        {
          url:          "/shared/gravity/datadefs/heavy-ball-velocity"
          name:         "heavy-ball-velocity"
          activity:     "/shared/gravity"
          xUnits:       "/builtins/units/seconds"
          xLabel:       "Time"
          xShortLabel:  "Time"
          yUnits:       "/builtins/units/meters-per-second"
          yLabel:       "Velocity"
          yShortLabel:  "Vel"
          source:       "/shared/gravity/datadefs/heavy-ball-position"
          windowLength: 4
        }
      ]
    }
  ]
  
  tags: [
    {
      url:      "/shared/gravity/tag/light-ball-point-1"
      activity: "/shared/gravity",
      name:     "light-ball-point-1"
    }
    
    {
      url:      "/shared/gravity/tag/light-ball-point-2"
      activity: "/shared/gravity",
      name:     "light-ball-point-2"
    }
    
    {
      url:      "/shared/gravity/tag/heavy-ball-point-1"
      activity: "/shared/gravity",
      name:     "heavy-ball-point-1"
    }
    
    {
      url:      "/shared/gravity/tag/heavy-ball-point-2"
      activity: "/shared/gravity",
      name:     "heavy-ball-point-2"
    }
  ]
  
  annotations: [
    {
      type: "HighlightedPoint",
      records: [
        {
          url:         "/shared/gravity/anotation/light-ball-point-1"
          name:        "light-ball-point-1"
          activity:    "/shared/gravity"
          datadefName: "light-ball-velocity"
          tag:         "/shared/gravity/tag/light-ball-point-1"
          color:       "#1f77b4"
        }
        
        {
          url:         "/shared/gravity/annotation/light-ball-point-2"
          name:        "light-ball-point-2"
          activity:    "/shared/gravity"
          datadefName: "light-ball-velocity"
          tag:         "/shared/gravity/tag/light-ball-point-2"
          color:       "#ff7f0e"
        }
        
        {
          url:         "/shared/gravity/annotation/heavy-ball-point-1"
          name:        "heavy-ball-point-1"
          activity:    "/shared/gravity"
          datadefName: "heavy-ball-velocity"
          tag:         "/shared/gravity/tag/heavy-ball-point-1"
          color:       "#1f77b4"
        }
        
        {
          url:         "/shared/gravity/annotation/heavy-ball-point-2"
          name:        "heavy-ball-point-2"
          activity:    "/shared/gravity"
          datadefName: "heavy-ball-velocity"
          tag:         "/shared/gravity/tag/heavy-ball-point-2"
          color:       "#ff7f0e"
        }

      ]
    }
    
    {
      type: "SegmentOverlay"
      records: [
        {
          url:         "/shared/gravity/annotation/light-ball-motion-segment"
          name:        "light-ball-motion-segment"
          activity:    "/shared/gravity"
          datadefName: "light-ball-velocity"
          x1Record:    0.5
          x2Record:    0.95
        }
        
        {
          url:         "/shared/gravity/annotation/light-ball-selected-segment"
          name:        "light-ball-selected-segment"
          activity:    "/shared/gravity"
          datadefName: "light-ball-velocity"
          tag1:        "/shared/gravity/tag/light-ball-point-1"
          tag2:        "/shared/gravity/tag/light-ball-point-2"
        }
        
        {
          url:         "/shared/gravity/annotation/heavy-ball-motion-segment"
          name:        "heavy-ball-motion-segment"
          activity:    "/shared/gravity"
          datadefName: "heavy-ball-velocity"
          x1Record:    0.55
          x2Record:    1.0
        }
      ]
    }


    { 
      type: "LineThroughPoints"
      records: [
        {
          url:      "/shared/gravity/annotation/light-ball-slope-line"
          name:     "light-ball-slope-line"
          activity: "/shared/gravity"
          p1Tag:    "/shared/gravity/tag/light-ball-point-1"
          p2Tag:    "/shared/gravity/tag/light-ball-point-2"
          color:    "#1f77b4"
        }
        
        {
          url:      "/shared/gravity/annotation/heavy-ball-slope-line"
          name:     "heavy-ball-slope-line"
          activity: "/shared/gravity"
          p1Tag:    "/shared/gravity/tag/heavy-ball-point-1"
          p2Tag:    "/shared/gravity/tag/heavy-ball-point-2"
          color:    "#1f77b4"
        }
      ]
    }
    
    {
      type: "RiseArrow"
      records: [
        {
          url:      "/shared/gravity/annotation/light-ball-rise-arrow"
          name:     "light-ball-rise-arrow"
          activity: "/shared/gravity"
          color:    "#cccccc"
          p1Tag:    "/shared/gravity/tag/light-ball-point-1"
          p2Tag:    "/shared/gravity/tag/light-ball-point-2"
        }
        
        {
          url:      "/shared/gravity/annotation/heavy-ball-rise-arrow"
          name:     "heavy-ball-rise-arrow"
          activity: "/shared/gravity"
          color:    "#cccccc"
          p1Tag:    "/shared/gravity/tag/heavy-ball-point-1"
          p2Tag:    "/shared/gravity/tag/heavy-ball-point-2"
        }
      ]
    }
    
    {
      type: "RunArrow"
      records: [
        {
          url:      "/shared/gravity/annotation/light-ball-run-arrow"
          name:     "light-ball-run-arrow"
          activity: "/shared/gravity"
          color:    "#cccccc"
          p1Tag:    "/shared/gravity/tag/light-ball-point-1"
          p2Tag:    "/shared/gravity/tag/light-ball-point-2"
        }
        
        {
          url:      "/shared/gravity/annotation/heavy-ball-run-arrow"
          name:     "heavy-ball-run-arrow"
          activity: "/shared/gravity"
          color:    "#cccccc"
          p1Tag:    "/shared/gravity/tag/heavy-ball-point-1"
          p2Tag:    "/shared/gravity/tag/heavy-ball-point-2"
        }
      ]
    }

    {
      type: "RiseBracket"
      records: [
        {
          url:         "/shared/gravity/annotation/light-ball-rise-bracket"
          name:        "light-ball-rise-bracket"
          activity:    "/shared/gravity"
          color:       "#cccccc"
          datadefName: "light-ball-velocity"
          p1Tag:       "/shared/gravity/tag/light-ball-point-1"
          p2Tag:       "/shared/gravity/tag/light-ball-point-2"
        }
        
        {
          url:         "/shared/gravity/annotation/heavy-ball-rise-bracket"
          name:        "heavy-ball-rise-bracket"
          activity:    "/shared/gravity"
          color:       "#cccccc"
          datadefName: "light-ball-velocity"
          p1Tag:       "/shared/gravity/tag/heavy-ball-point-1"
          p2Tag:       "/shared/gravity/tag/heavy-ball-point-2"
        }
      ]
    }
    
    {
      type: "RunBracket"
      records: [
        {
          url:         "/shared/gravity/annotation/light-ball-run-bracket"
          name:        "light-ball-run-bracket"
          activity:    "/shared/gravity"
          color:       "#cccccc"
          datadefName: "light-ball-velocity"
          p1Tag:       "/shared/gravity/tag/light-ball-point-1"
          p2Tag:       "/shared/gravity/tag/light-ball-point-2"
        }

        {
          url:         "/shared/gravity/annotation/heavy-ball-run-bracket"
          name:        "heavy-ball-run-bracket"
          activity:    "/shared/gravity"
          color:       "#cccccc"
          datadefName: "light-ball-velocity"
          p1Tag:       "/shared/gravity/tag/heavy-ball-point-1"
          p2Tag:       "/shared/gravity/tag/heavy-ball-point-2"
        }
      ]
    }
    
    {
      type: "FreehandSketch"
      records: [
        {
          url:      "/shared/gravity/annotation/light-ball-position"
          name:     "light-ball-position"
          activity: "/shared/gravity"
          color:    "#FF00FF"
          points:   []
        }
        
        {
          url:      "/shared/gravity/annotation/light-ball-velocity"
          name:     "light-ball-velocity"
          activity: "/shared/gravity"
          color:    "#FF00FF"
          points:   []
        }
        
        {
          url:      "/shared/gravity/annotation/heavy-ball-position"
          name:     "heavy-ball-position"
          activity: "/shared/gravity"
          color:    "#FF00FF"
          points:   []
        }
        
        {
          url:      "/shared/gravity/annotation/heavy-ball-velocity"
          name:     "heavy-ball-velocity"
          activity: "/shared/gravity"
          color:    "#FF00FF"
          points:   []
        }
      ]
    }
    
    {
      type: "LabelSet"
      records: [
        {
          url:      "/shared/gravity/annotation/light-ball-labels"
          name:     "light-ball-labels"
          activity: "/shared/gravity"
        }
        
        {
          url:      "/shared/gravity/annotation/heavy-ball-labels"
          name:     "heavy-ball-labels"
          activity: "/shared/gravity"
        }
      ]
    }
  ]
  
  variables: []
  units:     []

