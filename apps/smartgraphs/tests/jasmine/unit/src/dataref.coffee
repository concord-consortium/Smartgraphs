defineJasmineHelpers()

describe "Dataref, ", ->

  describe "Smartgraphs.LinearEquation with slope-intercept expression form", ->
    linearEquation = Smartgraphs.LinearEquation.create()
    linearEquation.expressionForm = 'slope-intercept'

    describe "having slope of 2, yIntercept of 5 and xPrecision of 0.5", ->

      beforeEach ->
        linearEquation.xInterval = 0.5
        linearEquation.params = { slope: 2, yIntercept: 5 }

      it "should generate proper dataset points", ->
        linePoints = linearEquation.getPoints(0, 2, 0, 10)
        expect(linePoints).toEqualPairs [0, 5], [0.5, 6], [1, 7], [1.5, 8], [2, 9]

    describe "having slope of 1 and yIntercept of 2 and xPrecision of 0.5", ->

      beforeEach ->
        linearEquation.xInterval = 0.5
        linearEquation.params = { slope: 1, yIntercept: 2 }

      it "should generate proper dataset points", ->
        linePoints = linearEquation.getPoints(0, 2, 0, 10)
        expect(linePoints).toEqualPairs [0, 2], [0.5, 2.5], [1, 3], [1.5, 3.5], [2, 4]

  describe "Smartgraphs.Sinusoidal with sine-cosine expression form", ->
    sinusoidalEquation = Smartgraphs.SinusoidalEquation.create()
    sinusoidalEquation.expressionForm = 'sine-cosine'

    describe "having amplitude of 2, phase of 1 centerAmplitude of 2 and frequency of 1", ->

      beforeEach ->
        sinusoidalEquation.xInterval = 0.5
        sinusoidalEquation.params = { amplitude: 2, phase: 1, centerAmplitude: 2, frequency: 1 }
        sinusoidalEquation.angularFunction = 'sine'

      it "should generate proper dataset points", ->
        linePoints = sinusoidalEquation.getPoints(0, 2, 0, 10)
        expect(linePoints).toEqualPairs [0, 3.682941969615793], [0.5, 3.994989973208109], [1, 3.8185948536513634], [1.5, 3.196944288207913], [2, 2.2822400161197343]

    describe "having amplitude of 1, phase of 1 centerAmplitude of 3 and frequency of 2", ->

      beforeEach ->
        sinusoidalEquation.xInterval = 0.5
        sinusoidalEquation.params = { amplitude: 1, phase: 1, centerAmplitude: 3, frequency: 2 }

      it "should generate proper dataset points", ->
        linePoints = sinusoidalEquation.getPoints(0, 2, 0, 10)
        expect(linePoints).toEqualPairs [0, 3.8414709848078967], [0.5, 3.909297426825682], [1, 3.1411200080598674], [1.5, 2.2431975046920716], [2, 2.0410757253368614]

  describe "Smartgraphs.CompositeEquation with y = log(x) + sin(x) expression", ->
      compositeEquation = Smartgraphs.CompositeEquation.create()

      describe "having xPrecision of 0.5", ->

        beforeEach ->
          compositeEquation.expression = 'y = log(x) + sin(x)'
          compositeEquation.xInterval = 0.5
          compositeEquation.params = {}

        it "should generate proper dataset points", ->
          linePoints = compositeEquation.getPoints(0.5, 2.2, 0, 1)
          expect(linePoints).toEqualPairs(
            [0.5, -0.21372164195574228],
            [1, 0.8414709848078965],
            [1.5, 1.4029600947122187],
            [2, 1.6024446073856269]
          )