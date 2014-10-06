function gracecode_turtle () {
  this.definitionModule = "turtle";
  this.definitionLine = 0;
  lineNumber = 35
  var func0 = function(argcv) {
    var curarg = 1;
    var var_angle = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawTurtle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 36
      onSelf = true;
      var call1 = callmethod(this, "initialise", [0]);
      lineNumber = 37
      var string2 = new GraceString("2d");
      var call3 = callmethod(var_canvas,"getContext", [1], string2);
      var var_mctx = call3;
      lineNumber = 37;
      moduleName = "turtle";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 39
      lineNumber = 38
      var var_triangleSize = new GraceNum(30);
      lineNumber = 39;
      moduleName = "turtle";
      lineNumber = 38
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_triangleSize)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'triangleSize' to be of type Unknown"))
      lineNumber = 40
      lineNumber = 39
      var quotient9 = callmethod(var_angle, "/", [1], new GraceNum(180));
      var prod11 = callmethod(quotient9, "*", [1], var_PI);
      var call12 = callmethod(var_trig,"sin", [1], prod11);
      var prod14 = callmethod(call12, "*", [1], var_triangleSize);
      var quotient16 = callmethod(prod14, "/", [1], new GraceNum(2));
      var opresult19 = callmethod(var_x, "+", [1], quotient16);
      var var_x__39__ = opresult19;
      lineNumber = 40;
      moduleName = "turtle";
      lineNumber = 39
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x__39__)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'x'' to be of type Unknown"))
      lineNumber = 41
      lineNumber = 40
      var quotient25 = callmethod(var_angle, "/", [1], new GraceNum(180));
      var prod27 = callmethod(quotient25, "*", [1], var_PI);
      var call28 = callmethod(var_trig,"cos", [1], prod27);
      var prod30 = callmethod(call28, "*", [1], var_triangleSize);
      var quotient32 = callmethod(prod30, "/", [1], new GraceNum(2));
      var diff35 = callmethod(var_y, "-", [1], quotient32);
      var var_y__39__ = diff35;
      lineNumber = 41;
      moduleName = "turtle";
      lineNumber = 40
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y__39__)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'y'' to be of type Unknown"))
      lineNumber = 41
      var call36 = callmethod(var_mctx,"beginPath", [0]);
      lineNumber = 43
      lineNumber = 41
      lineNumber = 42
      var string37 = new GraceString("rgb(0, 128, 0)");
      var call38 = callmethod(var_mctx,"fillStyle:=", [1], string37);
      lineNumber = 44
      lineNumber = 41
      lineNumber = 43
      var call39 = callmethod(var_mctx,"lineWidth:=", [1], new GraceNum(3));
      lineNumber = 44
      var call40 = callmethod(var_mctx,"moveTo", [2], var_x__39__, var_y__39__);
      lineNumber = 45
      var diff46 = callmethod(var_angle, "-", [1], new GraceNum(75));
      var quotient48 = callmethod(diff46, "/", [1], new GraceNum(180));
      var prod50 = callmethod(quotient48, "*", [1], var_PI);
      var call51 = callmethod(var_trig,"cos", [1], prod50);
      var prod53 = callmethod(call51, "*", [1], var_triangleSize);
      var diff56 = callmethod(var_x__39__, "-", [1], prod53);
      lineNumber = 46
      var diff62 = callmethod(var_angle, "-", [1], new GraceNum(75));
      var quotient64 = callmethod(diff62, "/", [1], new GraceNum(180));
      var prod66 = callmethod(quotient64, "*", [1], var_PI);
      var call67 = callmethod(var_trig,"sin", [1], prod66);
      var prod69 = callmethod(call67, "*", [1], var_triangleSize);
      var diff72 = callmethod(var_y__39__, "-", [1], prod69);
      lineNumber = 45
      var call73 = callmethod(var_mctx,"lineTo", [2], diff56, diff72);
      lineNumber = 47
      var opresult79 = callmethod(var_angle, "+", [1], new GraceNum(75));
      var quotient81 = callmethod(opresult79, "/", [1], new GraceNum(180));
      var prod83 = callmethod(quotient81, "*", [1], var_PI);
      var call84 = callmethod(var_trig,"cos", [1], prod83);
      var prod86 = callmethod(call84, "*", [1], var_triangleSize);
      var opresult89 = callmethod(var_x__39__, "+", [1], prod86);
      lineNumber = 48
      var opresult95 = callmethod(var_angle, "+", [1], new GraceNum(75));
      var quotient97 = callmethod(opresult95, "/", [1], new GraceNum(180));
      var prod99 = callmethod(quotient97, "*", [1], var_PI);
      var call100 = callmethod(var_trig,"sin", [1], prod99);
      var prod102 = callmethod(call100, "*", [1], var_triangleSize);
      var opresult105 = callmethod(var_y__39__, "+", [1], prod102);
      lineNumber = 47
      var call106 = callmethod(var_mctx,"lineTo", [2], opresult89, opresult105);
      lineNumber = 49
      var call107 = callmethod(var_mctx,"lineTo", [2], var_x__39__, var_y__39__);
      lineNumber = 50
      var call108 = callmethod(var_mctx,"fill", [0]);
      lineNumber = 51
      var call109 = callmethod(var_mctx,"closePath", [0]);
      return call109
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func0.paramCounts = [
    1,
  ];
  func0.variableArities = [
    false,
  ];
  this.methods["drawTurtle"] = func0;
  func0.definitionLine = 35;
  func0.definitionModule = "turtle";
  lineNumber = 57
  var func110 = function(argcv) {
    var curarg = 1;
    var var_dist = arguments[curarg];
    curarg++;
    var var_lineCol = arguments[curarg];
    curarg++;
    var var_lineWidth = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func110.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (move)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 58
      onSelf = true;
      var call111 = callmethod(this, "initialise", [0]);
      lineNumber = 60
      lineNumber = 59
      var var_angle = var_turtleAngle;
      lineNumber = 60;
      moduleName = "turtle";
      lineNumber = 59
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_angle)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'angle' to be of type Unknown"))
      lineNumber = 61
      lineNumber = 60
      var quotient116 = callmethod(var_angle, "/", [1], new GraceNum(180));
      var prod118 = callmethod(quotient116, "*", [1], var_PI);
      var call119 = callmethod(var_trig,"cos", [1], prod118);
      var prod121 = callmethod(call119, "*", [1], var_dist);
      var var_y__39__ = prod121;
      lineNumber = 61;
      moduleName = "turtle";
      lineNumber = 60
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_y__39__)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'y'' to be of type Unknown"))
      lineNumber = 62
      lineNumber = 61
      var quotient126 = callmethod(var_angle, "/", [1], new GraceNum(180));
      var prod128 = callmethod(quotient126, "*", [1], var_PI);
      var call129 = callmethod(var_trig,"sin", [1], prod128);
      var prod131 = callmethod(call129, "*", [1], var_dist);
      var var_x__39__ = prod131;
      lineNumber = 62;
      moduleName = "turtle";
      lineNumber = 61
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_x__39__)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'x'' to be of type Unknown"))
      lineNumber = 63
      lineNumber = 62
      var var_startX = var_x;
      lineNumber = 63;
      moduleName = "turtle";
      lineNumber = 62
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startX)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startX' to be of type Unknown"))
      lineNumber = 64
      lineNumber = 63
      var var_startY = var_y;
      lineNumber = 64;
      moduleName = "turtle";
      lineNumber = 63
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startY)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startY' to be of type Unknown"))
      lineNumber = 65
      lineNumber = 64
      var var_startAngle = var_turtleAngle;
      lineNumber = 65;
      moduleName = "turtle";
      lineNumber = 64
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startAngle)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startAngle' to be of type Unknown"))
      lineNumber = 66
      lineNumber = 65
      var diff134 = callmethod(var_y, "-", [1], var_y__39__);
      var_y = diff134;
      lineNumber = 67
      lineNumber = 66
      var opresult137 = callmethod(var_x, "+", [1], var_x__39__);
      var_x = opresult137;
      lineNumber = 68
      lineNumber = 67
      var call139 = callmethod(var_stages,"size", [0]);
      var diff141 = callmethod(call139, "-", [1], new GraceNum(1));
      var var_stageN = diff141;
      lineNumber = 68;
      moduleName = "turtle";
      lineNumber = 67
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_stageN)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'stageN' to be of type Unknown"))
      lineNumber = 68
      var string142 = new GraceString("2d");
      var call143 = callmethod(var_canvas,"getContext", [1], string142);
      var var_mctx = call143;
      lineNumber = 68;
      moduleName = "turtle";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 70
      var opresult146 = callmethod(new GraceNum(1), "..", [1], var_dist);
      lineNumber = 87
      var block147 = Grace_allocObject();
      block147.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block147.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block147.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block147.methods["match"] = GraceBlock_match;
      block147.methods["prefix?"] = GraceBlock_lift;
      block147.receiver = this;
      block147.className = 'block<turtle:87>';
      block147.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 71
        lineNumber = 86
        var block148 = Grace_allocObject();
        block148.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block148.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block148.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block148.methods["match"] = GraceBlock_match;
        block148.methods["prefix?"] = GraceBlock_lift;
        block148.receiver = this;
        block148.className = 'block<turtle:86>';
        block148.real = function(
        ) {
          sourceObject = this;
          lineNumber = 73
          lineNumber = 72
          var quotient153 = callmethod(var_angle, "/", [1], new GraceNum(180));
          var prod155 = callmethod(quotient153, "*", [1], var_PI);
          var call156 = callmethod(var_trig,"cos", [1], prod155);
          var prod158 = callmethod(call156, "*", [1], var_i);
          var var_y__39____39__ = prod158;
          lineNumber = 73;
          moduleName = "turtle";
          lineNumber = 72
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_y__39____39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'y''' to be of type Unknown"))
          lineNumber = 74
          lineNumber = 73
          var quotient163 = callmethod(var_angle, "/", [1], new GraceNum(180));
          var prod165 = callmethod(quotient163, "*", [1], var_PI);
          var call166 = callmethod(var_trig,"sin", [1], prod165);
          var prod168 = callmethod(call166, "*", [1], var_i);
          var var_x__39____39__ = prod168;
          lineNumber = 74;
          moduleName = "turtle";
          lineNumber = 73
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_x__39____39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'x''' to be of type Unknown"))
          lineNumber = 74
          var call169 = callmethod(var_mctx,"beginPath", [0]);
          lineNumber = 76
          lineNumber = 74
          lineNumber = 75
          var string170 = new GraceString(")");
          var call172 = callmethod(var_lineCol,"b", [0]);
          var string174 = new GraceString(", ");
          var call176 = callmethod(var_lineCol,"g", [0]);
          var string178 = new GraceString(", ");
          var call180 = callmethod(var_lineCol,"r", [0]);
          var string182 = new GraceString("rgb(");
          var opresult184 = callmethod(string182, "++", [1], call180);
          var opresult186 = callmethod(opresult184, "++", [1], string178);
          var opresult188 = callmethod(opresult186, "++", [1], call176);
          var opresult190 = callmethod(opresult188, "++", [1], string174);
          var opresult192 = callmethod(opresult190, "++", [1], call172);
          var opresult194 = callmethod(opresult192, "++", [1], string170);
          var call195 = callmethod(var_mctx,"strokeStyle:=", [1], opresult194);
          lineNumber = 77
          lineNumber = 75
          lineNumber = 76
          var call196 = callmethod(var_mctx,"lineWidth:=", [1], var_lineWidth);
          lineNumber = 77
          var call197 = callmethod(var_mctx,"moveTo", [2], var_startX, var_startY);
          lineNumber = 79
          lineNumber = 78
          var diff200 = callmethod(var_startY, "-", [1], var_y__39____39__);
          var_y = diff200;
          lineNumber = 80
          lineNumber = 79
          var opresult203 = callmethod(var_startX, "+", [1], var_x__39____39__);
          var_x = opresult203;
          lineNumber = 84
          var if204 = var_done;
          lineNumber = 80
          if (Grace_isTrue(var_drawingEnabled)) {
            lineNumber = 81
            var call205 = callmethod(var_mctx,"lineTo", [2], var_x, var_y);
            lineNumber = 82
            var call206 = callmethod(var_mctx,"stroke", [0]);
            if204 = call206;
          }
          lineNumber = 85
          lineNumber = 84
          var_turtleAngle = var_startAngle;
          return var_startAngle;
        };
        lineNumber = 71
        var call207 = callmethod(var_steps,"push", [1], block148);
        return call207;
      };
      var call208 = callmethod(Grace_prelude,"for()do", [1, 1], opresult146, block147);
      lineNumber = 87
      lineNumber = 102
      var block209 = Grace_allocObject();
      block209.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block209.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block209.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block209.methods["match"] = GraceBlock_match;
      block209.methods["prefix?"] = GraceBlock_lift;
      block209.receiver = this;
      block209.className = 'block<turtle:102>';
      block209.real = function(
      ) {
        sourceObject = this;
        lineNumber = 89
        lineNumber = 88
        var quotient214 = callmethod(var_angle, "/", [1], new GraceNum(180));
        var prod216 = callmethod(quotient214, "*", [1], var_PI);
        var call217 = callmethod(var_trig,"cos", [1], prod216);
        var prod219 = callmethod(call217, "*", [1], var_dist);
        var var_y__39____39__ = prod219;
        lineNumber = 89;
        moduleName = "turtle";
        lineNumber = 88
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_y__39____39__)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'y''' to be of type Unknown"))
        lineNumber = 90
        lineNumber = 89
        var quotient224 = callmethod(var_angle, "/", [1], new GraceNum(180));
        var prod226 = callmethod(quotient224, "*", [1], var_PI);
        var call227 = callmethod(var_trig,"sin", [1], prod226);
        var prod229 = callmethod(call227, "*", [1], var_dist);
        var var_x__39____39__ = prod229;
        lineNumber = 90;
        moduleName = "turtle";
        lineNumber = 89
        if (!Grace_isTrue(callmethod(var_Unknown, "match",
          [1], var_x__39____39__)))
            throw new GraceExceptionPacket(TypeErrorObject,
                  new GraceString("expected "
                  + "initial value of def 'x''' to be of type Unknown"))
        lineNumber = 90
        var call230 = callmethod(var_ctx,"beginPath", [0]);
        lineNumber = 92
        lineNumber = 90
        lineNumber = 91
        var string231 = new GraceString(")");
        var call233 = callmethod(var_lineCol,"b", [0]);
        var string235 = new GraceString(", ");
        var call237 = callmethod(var_lineCol,"g", [0]);
        var string239 = new GraceString(", ");
        var call241 = callmethod(var_lineCol,"r", [0]);
        var string243 = new GraceString("rgb(");
        var opresult245 = callmethod(string243, "++", [1], call241);
        var opresult247 = callmethod(opresult245, "++", [1], string239);
        var opresult249 = callmethod(opresult247, "++", [1], call237);
        var opresult251 = callmethod(opresult249, "++", [1], string235);
        var opresult253 = callmethod(opresult251, "++", [1], call233);
        var opresult255 = callmethod(opresult253, "++", [1], string231);
        var call256 = callmethod(var_ctx,"strokeStyle:=", [1], opresult255);
        lineNumber = 93
        lineNumber = 91
        lineNumber = 92
        var call257 = callmethod(var_ctx,"lineWidth:=", [1], var_lineWidth);
        lineNumber = 93
        var call258 = callmethod(var_ctx,"moveTo", [2], var_startX, var_startY);
        lineNumber = 95
        lineNumber = 94
        var diff261 = callmethod(var_startY, "-", [1], var_y__39____39__);
        var_y = diff261;
        lineNumber = 96
        lineNumber = 95
        var opresult264 = callmethod(var_startX, "+", [1], var_x__39____39__);
        var_x = opresult264;
        lineNumber = 100
        var if265 = var_done;
        lineNumber = 96
        if (Grace_isTrue(var_drawingEnabled)) {
          lineNumber = 97
          var call266 = callmethod(var_ctx,"lineTo", [2], var_x, var_y);
          lineNumber = 98
          var call267 = callmethod(var_ctx,"stroke", [0]);
          if265 = call267;
        }
        lineNumber = 101
        lineNumber = 100
        var_turtleAngle = var_startAngle;
        return var_startAngle;
      };
      lineNumber = 87
      var call268 = callmethod(var_steps,"push", [1], block209);
      return call268
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func110.paramCounts = [
    3,
  ];
  func110.variableArities = [
    false,
  ];
  this.methods["move"] = func110;
  func110.definitionLine = 57;
  func110.definitionModule = "turtle";
  lineNumber = 103
  var func269 = function(argcv) {
    var curarg = 1;
    var var_ang = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func269.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turnRight)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 104
      onSelf = true;
      var call270 = callmethod(this, "initialise", [0]);
      lineNumber = 106
      lineNumber = 105
      var var_startX = var_x;
      lineNumber = 106;
      moduleName = "turtle";
      lineNumber = 105
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startX)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startX' to be of type Unknown"))
      lineNumber = 107
      lineNumber = 106
      var var_startY = var_y;
      lineNumber = 107;
      moduleName = "turtle";
      lineNumber = 106
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startY)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startY' to be of type Unknown"))
      lineNumber = 108
      lineNumber = 107
      var var_startAngle = var_turtleAngle;
      lineNumber = 108;
      moduleName = "turtle";
      lineNumber = 107
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startAngle)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startAngle' to be of type Unknown"))
      lineNumber = 108
      var opresult273 = callmethod(new GraceNum(0), "..", [1], var_ang);
      lineNumber = 115
      var block274 = Grace_allocObject();
      block274.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block274.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block274.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block274.methods["match"] = GraceBlock_match;
      block274.methods["prefix?"] = GraceBlock_lift;
      block274.receiver = this;
      block274.className = 'block<turtle:115>';
      block274.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 109
        lineNumber = 114
        var block275 = Grace_allocObject();
        block275.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block275.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block275.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block275.methods["match"] = GraceBlock_match;
        block275.methods["prefix?"] = GraceBlock_lift;
        block275.receiver = this;
        block275.className = 'block<turtle:114>';
        block275.real = function(
        ) {
          sourceObject = this;
          lineNumber = 111
          lineNumber = 110
          var_x = var_startX;
          lineNumber = 112
          lineNumber = 111
          var_y = var_startY;
          lineNumber = 113
          lineNumber = 112
          var opresult278 = callmethod(var_startAngle, "+", [1], var_i);
          var_turtleAngle = opresult278;
          return opresult278;
        };
        lineNumber = 109
        var call279 = callmethod(var_steps,"push", [1], block275);
        return call279;
      };
      var call280 = callmethod(Grace_prelude,"for()do", [1, 1], opresult273, block274);
      lineNumber = 115
      lineNumber = 120
      var block281 = Grace_allocObject();
      block281.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block281.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block281.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block281.methods["match"] = GraceBlock_match;
      block281.methods["prefix?"] = GraceBlock_lift;
      block281.receiver = this;
      block281.className = 'block<turtle:120>';
      block281.real = function(
      ) {
        sourceObject = this;
        lineNumber = 117
        lineNumber = 116
        var_x = var_startX;
        lineNumber = 118
        lineNumber = 117
        var_y = var_startY;
        lineNumber = 119
        lineNumber = 118
        var opresult284 = callmethod(var_startAngle, "+", [1], var_ang);
        var_turtleAngle = opresult284;
        return opresult284;
      };
      lineNumber = 115
      var call285 = callmethod(var_steps,"push", [1], block281);
      lineNumber = 121
      lineNumber = 120
      var opresult288 = callmethod(var_turtleAngle, "+", [1], var_ang);
      var_turtleAngle = opresult288;
      return opresult288
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func269.paramCounts = [
    1,
  ];
  func269.variableArities = [
    false,
  ];
  this.methods["turnRight"] = func269;
  func269.definitionLine = 103;
  func269.definitionModule = "turtle";
  lineNumber = 122
  var func289 = function(argcv) {
    var curarg = 1;
    var var_ang = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func289.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turnLeft)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 123
      onSelf = true;
      var call290 = callmethod(this, "initialise", [0]);
      lineNumber = 125
      lineNumber = 124
      var var_startX = var_x;
      lineNumber = 125;
      moduleName = "turtle";
      lineNumber = 124
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startX)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startX' to be of type Unknown"))
      lineNumber = 126
      lineNumber = 125
      var var_startY = var_y;
      lineNumber = 126;
      moduleName = "turtle";
      lineNumber = 125
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startY)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startY' to be of type Unknown"))
      lineNumber = 127
      lineNumber = 126
      var var_startAngle = var_turtleAngle;
      lineNumber = 127;
      moduleName = "turtle";
      lineNumber = 126
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_startAngle)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'startAngle' to be of type Unknown"))
      lineNumber = 127
      var opresult293 = callmethod(new GraceNum(0), "..", [1], var_ang);
      lineNumber = 134
      var block294 = Grace_allocObject();
      block294.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block294.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block294.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block294.methods["match"] = GraceBlock_match;
      block294.methods["prefix?"] = GraceBlock_lift;
      block294.receiver = this;
      block294.className = 'block<turtle:134>';
      block294.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 128
        lineNumber = 133
        var block295 = Grace_allocObject();
        block295.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block295.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block295.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block295.methods["match"] = GraceBlock_match;
        block295.methods["prefix?"] = GraceBlock_lift;
        block295.receiver = this;
        block295.className = 'block<turtle:133>';
        block295.real = function(
        ) {
          sourceObject = this;
          lineNumber = 130
          lineNumber = 129
          var_x = var_startX;
          lineNumber = 131
          lineNumber = 130
          var_y = var_startY;
          lineNumber = 132
          lineNumber = 131
          var diff298 = callmethod(var_startAngle, "-", [1], var_i);
          var_turtleAngle = diff298;
          return diff298;
        };
        lineNumber = 128
        var call299 = callmethod(var_steps,"push", [1], block295);
        return call299;
      };
      var call300 = callmethod(Grace_prelude,"for()do", [1, 1], opresult293, block294);
      lineNumber = 134
      lineNumber = 139
      var block301 = Grace_allocObject();
      block301.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block301.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block301.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block301.methods["match"] = GraceBlock_match;
      block301.methods["prefix?"] = GraceBlock_lift;
      block301.receiver = this;
      block301.className = 'block<turtle:139>';
      block301.real = function(
      ) {
        sourceObject = this;
        lineNumber = 136
        lineNumber = 135
        var_x = var_startX;
        lineNumber = 137
        lineNumber = 136
        var_y = var_startY;
        lineNumber = 138
        lineNumber = 137
        var diff304 = callmethod(var_startAngle, "-", [1], var_ang);
        var_turtleAngle = diff304;
        return diff304;
      };
      lineNumber = 134
      var call305 = callmethod(var_steps,"push", [1], block301);
      lineNumber = 140
      lineNumber = 139
      var diff308 = callmethod(var_turtleAngle, "-", [1], var_ang);
      var_turtleAngle = diff308;
      return diff308
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func289.paramCounts = [
    1,
  ];
  func289.variableArities = [
    false,
  ];
  this.methods["turnLeft"] = func289;
  func289.definitionLine = 122;
  func289.definitionModule = "turtle";
  lineNumber = 141
  var func309 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func309.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penUp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 142
      onSelf = true;
      var call310 = callmethod(this, "initialise", [0]);
      lineNumber = 143
      lineNumber = 146
      var block311 = Grace_allocObject();
      block311.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block311.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block311.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block311.methods["match"] = GraceBlock_match;
      block311.methods["prefix?"] = GraceBlock_lift;
      block311.receiver = this;
      block311.className = 'block<turtle:146>';
      block311.real = function(
      ) {
        sourceObject = this;
        lineNumber = 145
        lineNumber = 144
        var bool312 = new GraceBoolean(false)
        var_drawingEnabled = bool312;
        return bool312;
      };
      lineNumber = 143
      var call313 = callmethod(var_steps,"push", [1], block311);
      return call313
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func309.paramCounts = [
    0,
  ];
  func309.variableArities = [
    false,
  ];
  this.methods["penUp"] = func309;
  func309.definitionLine = 141;
  func309.definitionModule = "turtle";
  lineNumber = 147
  var func314 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func314.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 148
      onSelf = true;
      var call315 = callmethod(this, "initialise", [0]);
      lineNumber = 149
      lineNumber = 152
      var block316 = Grace_allocObject();
      block316.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block316.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block316.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block316.methods["match"] = GraceBlock_match;
      block316.methods["prefix?"] = GraceBlock_lift;
      block316.receiver = this;
      block316.className = 'block<turtle:152>';
      block316.real = function(
      ) {
        sourceObject = this;
        lineNumber = 151
        lineNumber = 150
        var bool317 = new GraceBoolean(true)
        var_drawingEnabled = bool317;
        return bool317;
      };
      lineNumber = 149
      var call318 = callmethod(var_steps,"push", [1], block316);
      return call318
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func314.paramCounts = [
    0,
  ];
  func314.variableArities = [
    false,
  ];
  this.methods["penDown"] = func314;
  func314.definitionLine = 147;
  func314.definitionModule = "turtle";
  lineNumber = 154
  var func319 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func319.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialise)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 158
      var if320 = var_done;
      lineNumber = 155
      if (Grace_isTrue(var_initialised)) {
        lineNumber = 157
        lineNumber = 156
        var bool321 = new GraceBoolean(false)
        return bool321
        if320 = undefined;
      }
      lineNumber = 160
      lineNumber = 158
      var call322 = callmethod(var_dom,"document", [0]);
      var_document = call322;
      lineNumber = 160
      var string323 = new GraceString("output-select");
      var call324 = callmethod(var_document,"getElementById", [1], string323);
      var var_ts = call324;
      lineNumber = 160;
      moduleName = "turtle";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_ts)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'ts' to be of type Unknown"))
      lineNumber = 161
      var call326 = callmethod(var_ts,"options", [0]);
      var call327 = callmethod(call326,"length", [0]);
      var diff329 = callmethod(call327, "-", [1], new GraceNum(1));
      var opresult332 = callmethod(new GraceNum(0), "..", [1], diff329);
      lineNumber = 167
      var block333 = Grace_allocObject();
      block333.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block333.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block333.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block333.methods["match"] = GraceBlock_match;
      block333.methods["prefix?"] = GraceBlock_lift;
      block333.receiver = this;
      block333.className = 'block<turtle:167>';
      block333.real = function(
        var_i
      ) {
        sourceObject = this;
        lineNumber = 166
        var if334 = var_done;
        lineNumber = 162
        var string335 = new GraceString("canvas");
        var call337 = callmethod(var_ts,"options", [0]);
        var call338 = callmethod(call337,"item", [1], var_i);
        var call339 = callmethod(call338,"value", [0]);
        var opresult341 = callmethod(call339, "==", [1], string335);
        if (Grace_isTrue(opresult341)) {
          lineNumber = 164
          lineNumber = 162
          lineNumber = 163
          var call342 = callmethod(var_ts,"selectedIndex:=", [1], var_i);
          lineNumber = 164
          var call343 = callmethod(var_dom,"window", [0]);
          var call344 = callmethod(call343,"outputswitch", [0]);
          if334 = call344;
        }
        return if334;
      };
      var call345 = callmethod(Grace_prelude,"for()do", [1, 1], opresult332, block333);
      lineNumber = 168
      lineNumber = 167
      var bool346 = new GraceBoolean(true)
      var_initialised = bool346;
      lineNumber = 169
      lineNumber = 168
      var call347 = callmethod(var_dom,"window", [0]);
      var call348 = callmethod(call347,"Math", [0]);
      var_trig = call348;
      lineNumber = 169
      var string349 = new GraceString("standard-canvas");
      var call350 = callmethod(var_document,"getElementById", [1], string349);
      var_canvas = call350;
      lineNumber = 170
      var string351 = new GraceString("2d");
      var call352 = callmethod(var_canvas,"getContext", [1], string351);
      var_ctx = call352;
      lineNumber = 172
      lineNumber = 168
      lineNumber = 171
      var call353 = callmethod(var_ctx,"lineWidth:=", [1], new GraceNum(1));
      lineNumber = 173
      lineNumber = 168
      lineNumber = 172
      var string354 = new GraceString("white");
      var call355 = callmethod(var_ctx,"fillStyle:=", [1], string354);
      lineNumber = 173
      var call356 = callmethod(var_ctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(500));
      return call356
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func319.paramCounts = [
    0,
  ];
  func319.variableArities = [
    false,
  ];
  this.methods["initialise"] = func319;
  func319.definitionLine = 154;
  func319.definitionModule = "turtle";
  lineNumber = 175
  var func357 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func357.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (start)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 176
      onSelf = true;
      var call358 = callmethod(this, "initialise", [0]);
      lineNumber = 180
      var string359 = new GraceString("canvas");
      var call360 = callmethod(var_dom,"document", [0]);
      var call361 = callmethod(call360,"createElement", [1], string359);
      var_backingCanvas = call361;
      lineNumber = 182
      lineNumber = 180
      lineNumber = 181
      var call362 = callmethod(var_backingCanvas,"height:=", [1], new GraceNum(250));
      lineNumber = 183
      lineNumber = 180
      lineNumber = 182
      var call363 = callmethod(var_backingCanvas,"width:=", [1], new GraceNum(500));
      lineNumber = 183
      var string364 = new GraceString("2d");
      var call365 = callmethod(var_backingCanvas,"getContext", [1], string364);
      var_ctx = call365;
      lineNumber = 184
      var string366 = new GraceString("2d");
      var call367 = callmethod(var_canvas,"getContext", [1], string366);
      var var_mctx = call367;
      lineNumber = 184;
      moduleName = "turtle";
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_mctx)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'mctx' to be of type Unknown"))
      lineNumber = 185
      lineNumber = 195
      var block368 = Grace_allocObject();
      block368.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block368.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block368.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block368.methods["match"] = GraceBlock_match;
      block368.methods["prefix?"] = GraceBlock_lift;
      block368.receiver = this;
      block368.className = 'block<turtle:195>';
      block368.real = function(
        var_step
      ) {
        sourceObject = this;
        lineNumber = 187
        lineNumber = 180
        lineNumber = 186
        var string369 = new GraceString("white");
        var call370 = callmethod(var_mctx,"fillStyle:=", [1], string369);
        lineNumber = 187
        var call371 = callmethod(var_mctx,"fillRect", [4], new GraceNum(0), new GraceNum(0), new GraceNum(500), new GraceNum(500));
        lineNumber = 189
        lineNumber = 188
        var_x = new GraceNum(150);
        lineNumber = 190
        lineNumber = 189
        var_y = new GraceNum(225);
        lineNumber = 191
        lineNumber = 190
        var_turtleAngle = new GraceNum(0);
        lineNumber = 191
        var call372 = callmethod(var_step,"apply", [0]);
        lineNumber = 192
        var call373 = callmethod(var_mctx,"drawImage", [3], var_backingCanvas, new GraceNum(0), new GraceNum(0));
        lineNumber = 193
        onSelf = true;
        var call374 = callmethod(this, "drawTurtle", [1], var_turtleAngle);
        return call374;
      };
      lineNumber = 185
      var call375 = callmethod(var_dom,"for()waiting()do", [1, 1, 1], var_steps, var_delay, block368);
      return call375
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func357.paramCounts = [
    0,
  ];
  func357.variableArities = [
    false,
  ];
  this.methods["start"] = func357;
  func357.definitionLine = 175;
  func357.definitionModule = "turtle";
  lineNumber = 1
  // Import of dom
  if (typeof gracecode_dom == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module dom'));
  var var_dom = do_import("dom", gracecode_dom);
  lineNumber = 2
  // Import of mgcollections
  if (typeof gracecode_mgcollections == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module collections'));
  var var_collections = do_import("mgcollections", gracecode_mgcollections);
  lineNumber = 6
  var var_document;
  lineNumber = 191
  var func376 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func376.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 5
      return var_document
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func376.paramCounts = [
    0,
  ];
  func376.variableArities = [
    false,
  ];
  this.methods["document"] = func376;
  func376.definitionLine = 191;
  func376.definitionModule = "turtle";
  lineNumber = 191
  var func377 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func377.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_document = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func377.paramCounts = [
    1,
  ];
  func377.variableArities = [
    false,
  ];
  this.methods["document:="] = func377;
  func377.definitionLine = 191;
  func377.definitionModule = "turtle";
  lineNumber = 7
  var var_canvas;
  lineNumber = 191
  var func378 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func378.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 6
      return var_canvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func378.paramCounts = [
    0,
  ];
  func378.variableArities = [
    false,
  ];
  this.methods["canvas"] = func378;
  func378.definitionLine = 191;
  func378.definitionModule = "turtle";
  lineNumber = 191
  var func379 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func379.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (canvas:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_canvas = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func379.paramCounts = [
    1,
  ];
  func379.variableArities = [
    false,
  ];
  this.methods["canvas:="] = func379;
  func379.definitionLine = 191;
  func379.definitionModule = "turtle";
  lineNumber = 8
  var var_ctx;
  lineNumber = 191
  var func380 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func380.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ctx)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 7
      return var_ctx
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func380.paramCounts = [
    0,
  ];
  func380.variableArities = [
    false,
  ];
  this.methods["ctx"] = func380;
  func380.definitionLine = 191;
  func380.definitionModule = "turtle";
  lineNumber = 191
  var func381 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func381.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (ctx:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_ctx = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func381.paramCounts = [
    1,
  ];
  func381.variableArities = [
    false,
  ];
  this.methods["ctx:="] = func381;
  func381.definitionLine = 191;
  func381.definitionModule = "turtle";
  lineNumber = 10
  var var_trig;
  lineNumber = 191
  var func382 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func382.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (trig)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 8
      return var_trig
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func382.paramCounts = [
    0,
  ];
  func382.variableArities = [
    false,
  ];
  this.methods["trig"] = func382;
  func382.definitionLine = 191;
  func382.definitionModule = "turtle";
  lineNumber = 191
  var func383 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func383.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (trig:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_trig = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func383.paramCounts = [
    1,
  ];
  func383.variableArities = [
    false,
  ];
  this.methods["trig:="] = func383;
  func383.definitionLine = 191;
  func383.definitionModule = "turtle";
  lineNumber = 10
  var func384 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func384.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (colour)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      return var_colour
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func384.paramCounts = [
    0,
  ];
  func384.variableArities = [
    false,
  ];
  this.methods["colour"] = func384;
  func384.definitionLine = 10;
  func384.definitionModule = "turtle";
  var obj385 = Grace_allocObject();
  obj385.definitionModule = "turtle";
  obj385.definitionLine = 10;
  obj385.outer = this;
  var reader_turtle_outer_386 = function() {
    return this.outer;
  }
  obj385.methods["outer"] = reader_turtle_outer_386;
  function obj_init_385() {
    var origSuperDepth = superDepth;
    superDepth = obj385;
    obj385.annotations = [];
    var func387 = function(argcv) {
      var curarg = 1;
      var var_r__39__ = arguments[curarg];
      curarg++;
      if (argcv[0] !=  func387.paramCounts[0])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (r)"));
      var var_g__39__ = arguments[curarg];
      curarg++;
      if (argcv[1] !=  func387.paramCounts[1])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (g)"));
      var var_b__39__ = arguments[curarg];
      curarg++;
      if (argcv[2] !=  func387.paramCounts[2])
        callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 3 (b)"));
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "turtle";
      try {
        var obj388 = Grace_allocObject();
        obj388.definitionModule = "turtle";
        obj388.definitionLine = 10;
        obj388.outer = this;
        var reader_turtle_outer_389 = function() {
          return this.outer;
        }
        obj388.methods["outer"] = reader_turtle_outer_389;
        function obj_init_388() {
          var origSuperDepth = superDepth;
          superDepth = obj388;
          obj388.annotations = [];
          sourceObject = obj388;
          lineNumber = 11
          obj388.data["r"] = var_r__39__;
          var reader_turtle_r_390 = function() {
            return this.data["r"];
          }
          reader_turtle_r_390.def = true;
          obj388.methods["r"] = reader_turtle_r_390;
          lineNumber = 12;
          moduleName = "turtle";
          lineNumber = 11
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_r__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'r' to be of type Unknown"))
          sourceObject = obj388;
          lineNumber = 12
          obj388.data["g"] = var_g__39__;
          var reader_turtle_g_391 = function() {
            return this.data["g"];
          }
          reader_turtle_g_391.def = true;
          obj388.methods["g"] = reader_turtle_g_391;
          lineNumber = 13;
          moduleName = "turtle";
          lineNumber = 12
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_g__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'g' to be of type Unknown"))
          sourceObject = obj388;
          lineNumber = 13
          obj388.data["b"] = var_b__39__;
          var reader_turtle_b_392 = function() {
            return this.data["b"];
          }
          reader_turtle_b_392.def = true;
          obj388.methods["b"] = reader_turtle_b_392;
          lineNumber = 14;
          moduleName = "turtle";
          lineNumber = 13
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_b__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'b' to be of type Unknown"))
          superDepth = origSuperDepth;
        }
        obj_init_388.apply(obj388, []);
        return obj388
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func387.paramCounts = [
      1,
      1,
      1,
    ];
    func387.variableArities = [
      false,
      false,
      false,
    ];
    obj385.methods["r()g()b"] = func387;
    func387.definitionLine = 10;
    func387.definitionModule = "turtle";
    var func393 = function(argcv) {
      var curarg = 1;
      var var_r__39__ = arguments[curarg];
      curarg++;
      var var_g__39__ = arguments[curarg];
      curarg++;
      var var_b__39__ = arguments[curarg];
      curarg++;
      var inheritingObject = arguments[curarg++];
      var returnTarget = invocationCount;
      invocationCount++;
      try {
        var obj394 = Grace_allocObject();
        obj394.definitionModule = "turtle";
        obj394.definitionLine = 10;
        var inho394 = inheritingObject;
        while (inho394.superobj) inho394 = inho394.superobj;
        inho394.superobj = obj394;
        obj394.data = inheritingObject.data;
        obj394.outer = this;
        var reader_turtle_outer_395 = function() {
          return this.outer;
        }
        obj394.methods["outer"] = reader_turtle_outer_395;
        function obj_init_394() {
          var origSuperDepth = superDepth;
          superDepth = obj394;
          obj394.annotations = [];
          sourceObject = obj394;
          lineNumber = 11
          obj394.data["r"] = var_r__39__;
          var reader_turtle_r_396 = function() {
            return this.data["r"];
          }
          reader_turtle_r_396.def = true;
          obj394.methods["r"] = reader_turtle_r_396;
          lineNumber = 12;
          moduleName = "turtle";
          lineNumber = 11
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_r__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'r' to be of type Unknown"))
          sourceObject = obj394;
          lineNumber = 12
          obj394.data["g"] = var_g__39__;
          var reader_turtle_g_397 = function() {
            return this.data["g"];
          }
          reader_turtle_g_397.def = true;
          obj394.methods["g"] = reader_turtle_g_397;
          lineNumber = 13;
          moduleName = "turtle";
          lineNumber = 12
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_g__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'g' to be of type Unknown"))
          sourceObject = obj394;
          lineNumber = 13
          obj394.data["b"] = var_b__39__;
          var reader_turtle_b_398 = function() {
            return this.data["b"];
          }
          reader_turtle_b_398.def = true;
          obj394.methods["b"] = reader_turtle_b_398;
          lineNumber = 14;
          moduleName = "turtle";
          lineNumber = 13
          if (!Grace_isTrue(callmethod(var_Unknown, "match",
            [1], var_b__39__)))
              throw new GraceExceptionPacket(TypeErrorObject,
                    new GraceString("expected "
                    + "initial value of def 'b' to be of type Unknown"))
          superDepth = origSuperDepth;
        }
        obj_init_394.apply(inheritingObject, []);
        return obj394
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    obj385.methods["r()g()b()object"] = func393;
    var func399 = function(argcv) {
      var curarg = 1;
      var returnTarget = invocationCount;
      invocationCount++;
      moduleName = "turtle";
      try {
        lineNumber = 10
        var string400 = new GraceString("class colour");
        return string400
      } catch(e) {
        if ((e.exctype == 'return') && (e.target == returnTarget)) {
          return e.returnvalue;
        } else {
          throw e;
        }
      }
    }
    func399.paramCounts = [
    ];
    func399.variableArities = [
    ];
    obj385.methods["asDebugString"] = func399;
    func399.definitionLine = 10;
    func399.definitionModule = "turtle";
    sourceObject = obj385;
    sourceObject = obj385;
    superDepth = origSuperDepth;
  }
  obj_init_385.apply(obj385, []);
  var var_colour = obj385;
  lineNumber = 15
  var call401 = callmethod(var_colour,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(0), new GraceNum(0));
  var var_black = call401;
  lineNumber = 10
  var func402 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func402.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (black)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 15
      return var_black
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func402.paramCounts = [
    0,
  ];
  func402.variableArities = [
    false,
  ];
  this.methods["black"] = func402;
  func402.definitionLine = 10;
  func402.definitionModule = "turtle";
  lineNumber = 15;
  moduleName = "turtle";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_black)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'black' to be of type Unknown"))
  lineNumber = 16
  var call403 = callmethod(var_colour,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(0), new GraceNum(255));
  var var_blue = call403;
  lineNumber = 10
  var func404 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func404.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (blue)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 16
      return var_blue
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func404.paramCounts = [
    0,
  ];
  func404.variableArities = [
    false,
  ];
  this.methods["blue"] = func404;
  func404.definitionLine = 10;
  func404.definitionModule = "turtle";
  lineNumber = 16;
  moduleName = "turtle";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_blue)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'blue' to be of type Unknown"))
  lineNumber = 17
  var call405 = callmethod(var_colour,"r()g()b", [1, 1, 1], new GraceNum(0), new GraceNum(255), new GraceNum(0));
  var var_green = call405;
  lineNumber = 10
  var func406 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func406.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (green)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 17
      return var_green
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func406.paramCounts = [
    0,
  ];
  func406.variableArities = [
    false,
  ];
  this.methods["green"] = func406;
  func406.definitionLine = 10;
  func406.definitionModule = "turtle";
  lineNumber = 17;
  moduleName = "turtle";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_green)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'green' to be of type Unknown"))
  lineNumber = 18
  var call407 = callmethod(var_colour,"r()g()b", [1, 1, 1], new GraceNum(255), new GraceNum(0), new GraceNum(0));
  var var_red = call407;
  lineNumber = 10
  var func408 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func408.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (red)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 18
      return var_red
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func408.paramCounts = [
    0,
  ];
  func408.variableArities = [
    false,
  ];
  this.methods["red"] = func408;
  func408.definitionLine = 10;
  func408.definitionModule = "turtle";
  lineNumber = 18;
  moduleName = "turtle";
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_red)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'red' to be of type Unknown"))
  lineNumber = 21
  lineNumber = 20
  var var_x = new GraceNum(150);
  lineNumber = 10
  var func409 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func409.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 20
      return var_x
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func409.paramCounts = [
    0,
  ];
  func409.variableArities = [
    false,
  ];
  this.methods["x"] = func409;
  func409.definitionLine = 10;
  func409.definitionModule = "turtle";
  lineNumber = 10
  var func410 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func410.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (x:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_x = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func410.paramCounts = [
    1,
  ];
  func410.variableArities = [
    false,
  ];
  this.methods["x:="] = func410;
  func410.definitionLine = 10;
  func410.definitionModule = "turtle";
  lineNumber = 21;
  moduleName = "turtle";
  lineNumber = 20
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_x)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'x' to be of type Unknown"))
  lineNumber = 22
  lineNumber = 21
  var var_y = new GraceNum(225);
  lineNumber = 10
  var func411 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func411.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 21
      return var_y
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func411.paramCounts = [
    0,
  ];
  func411.variableArities = [
    false,
  ];
  this.methods["y"] = func411;
  func411.definitionLine = 10;
  func411.definitionModule = "turtle";
  lineNumber = 10
  var func412 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func412.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (y:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_y = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func412.paramCounts = [
    1,
  ];
  func412.variableArities = [
    false,
  ];
  this.methods["y:="] = func412;
  func412.definitionLine = 10;
  func412.definitionModule = "turtle";
  lineNumber = 22;
  moduleName = "turtle";
  lineNumber = 21
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_y)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'y' to be of type Unknown"))
  lineNumber = 23
  lineNumber = 22
  var bool413 = new GraceBoolean(false)
  var var_started = bool413;
  lineNumber = 10
  var func414 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func414.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (started)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 22
      return var_started
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func414.paramCounts = [
    0,
  ];
  func414.variableArities = [
    false,
  ];
  this.methods["started"] = func414;
  func414.definitionLine = 10;
  func414.definitionModule = "turtle";
  lineNumber = 10
  var func415 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func415.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (started:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_started = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func415.paramCounts = [
    1,
  ];
  func415.variableArities = [
    false,
  ];
  this.methods["started:="] = func415;
  func415.definitionLine = 10;
  func415.definitionModule = "turtle";
  lineNumber = 23;
  moduleName = "turtle";
  lineNumber = 22
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_started)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'started' to be of type Unknown"))
  lineNumber = 24
  lineNumber = 23
  var call416 = callmethod(new GraceNum(1),"prefix-", [0]);
  var var_maxActionsDrawn = call416;
  lineNumber = 10
  var func417 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func417.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (maxActionsDrawn)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 23
      return var_maxActionsDrawn
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func417.paramCounts = [
    0,
  ];
  func417.variableArities = [
    false,
  ];
  this.methods["maxActionsDrawn"] = func417;
  func417.definitionLine = 10;
  func417.definitionModule = "turtle";
  lineNumber = 10
  var func418 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func418.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (maxActionsDrawn:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_maxActionsDrawn = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func418.paramCounts = [
    1,
  ];
  func418.variableArities = [
    false,
  ];
  this.methods["maxActionsDrawn:="] = func418;
  func418.definitionLine = 10;
  func418.definitionModule = "turtle";
  lineNumber = 24;
  moduleName = "turtle";
  lineNumber = 23
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_maxActionsDrawn)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'maxActionsDrawn' to be of type Unknown"))
  lineNumber = 26
  lineNumber = 24
  var var_delay = new GraceNum(1);
  lineNumber = 10
  var func419 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func419.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (delay)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 24
      return var_delay
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func419.paramCounts = [
    0,
  ];
  func419.variableArities = [
    false,
  ];
  this.methods["delay"] = func419;
  func419.definitionLine = 10;
  func419.definitionModule = "turtle";
  lineNumber = 10
  var func420 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func420.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (delay:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_delay = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func420.paramCounts = [
    1,
  ];
  func420.variableArities = [
    false,
  ];
  this.methods["delay:="] = func420;
  func420.definitionLine = 10;
  func420.definitionModule = "turtle";
  lineNumber = 26;
  moduleName = "turtle";
  lineNumber = 24
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_delay)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'delay' to be of type Unknown"))
  lineNumber = 26
  lineNumber = 29
  lineNumber = 26
  var var_turtleAngle = new GraceNum(0);
  lineNumber = 10
  var func421 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func421.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turtleAngle)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 26
      return var_turtleAngle
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func421.paramCounts = [
    0,
  ];
  func421.variableArities = [
    false,
  ];
  this.methods["turtleAngle"] = func421;
  func421.definitionLine = 10;
  func421.definitionModule = "turtle";
  lineNumber = 10
  var func422 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func422.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turtleAngle:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_turtleAngle = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func422.paramCounts = [
    1,
  ];
  func422.variableArities = [
    false,
  ];
  this.methods["turtleAngle:="] = func422;
  func422.definitionLine = 10;
  func422.definitionModule = "turtle";
  lineNumber = 29;
  moduleName = "turtle";
  lineNumber = 26
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_turtleAngle)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'turtleAngle' to be of type Unknown"))
  lineNumber = 29
  lineNumber = 31
  lineNumber = 29
  var call423 = callmethod(var_collections,"list", [0]);
  var call424 = callmethod(call423,"new", [0]);
  var var_steps = call424;
  var func425 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func425.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (steps)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      return var_steps
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func425.paramCounts = [
    0,
  ];
  func425.variableArities = [
    false,
  ];
  this.methods["steps"] = func425;
  func425.definitionLine = 29;
  func425.definitionModule = "turtle";
  lineNumber = 31;
  moduleName = "turtle";
  lineNumber = 29
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_steps)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'steps' to be of type Unknown"))
  lineNumber = 31
  lineNumber = 33
  lineNumber = 31
  var call426 = callmethod(var_collections,"list", [0]);
  var call427 = callmethod(call426,"new", [0]);
  var var_stages = call427;
  var func428 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func428.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stages)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      return var_stages
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func428.paramCounts = [
    0,
  ];
  func428.variableArities = [
    false,
  ];
  this.methods["stages"] = func428;
  func428.definitionLine = 31;
  func428.definitionModule = "turtle";
  lineNumber = 33;
  moduleName = "turtle";
  lineNumber = 31
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_stages)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'stages' to be of type Unknown"))
  lineNumber = 33
  lineNumber = 35
  lineNumber = 33
  var var_PI = new GraceNum(3.14159);
  lineNumber = 31
  var func429 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func429.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (PI)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 33
      return var_PI
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func429.paramCounts = [
    0,
  ];
  func429.variableArities = [
    false,
  ];
  this.methods["PI"] = func429;
  func429.definitionLine = 31;
  func429.definitionModule = "turtle";
  lineNumber = 35;
  moduleName = "turtle";
  lineNumber = 33
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_PI)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of def 'PI' to be of type Unknown"))
  lineNumber = 35
  lineNumber = 55
  var var_backingCanvas;
  lineNumber = 31
  var func430 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func430.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingCanvas)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 54
      return var_backingCanvas
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func430.paramCounts = [
    0,
  ];
  func430.variableArities = [
    false,
  ];
  this.methods["backingCanvas"] = func430;
  func430.definitionLine = 31;
  func430.definitionModule = "turtle";
  lineNumber = 31
  var func431 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func431.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (backingCanvas:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_backingCanvas = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func431.paramCounts = [
    1,
  ];
  func431.variableArities = [
    false,
  ];
  this.methods["backingCanvas:="] = func431;
  func431.definitionLine = 31;
  func431.definitionModule = "turtle";
  lineNumber = 57
  lineNumber = 55
  var bool432 = new GraceBoolean(true)
  var var_drawingEnabled = bool432;
  lineNumber = 31
  var func433 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func433.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawingEnabled)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 55
      return var_drawingEnabled
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func433.paramCounts = [
    0,
  ];
  func433.variableArities = [
    false,
  ];
  this.methods["drawingEnabled"] = func433;
  func433.definitionLine = 31;
  func433.definitionModule = "turtle";
  lineNumber = 31
  var func434 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func434.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (drawingEnabled:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_drawingEnabled = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func434.paramCounts = [
    1,
  ];
  func434.variableArities = [
    false,
  ];
  this.methods["drawingEnabled:="] = func434;
  func434.definitionLine = 31;
  func434.definitionModule = "turtle";
  lineNumber = 57;
  moduleName = "turtle";
  lineNumber = 55
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_drawingEnabled)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'drawingEnabled' to be of type Unknown"))
  lineNumber = 57
  lineNumber = 154
  lineNumber = 153
  var bool435 = new GraceBoolean(false)
  var var_initialised = bool435;
  lineNumber = 31
  var func436 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func436.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialised)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      lineNumber = 153
      return var_initialised
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func436.paramCounts = [
    0,
  ];
  func436.variableArities = [
    false,
  ];
  this.methods["initialised"] = func436;
  func436.definitionLine = 31;
  func436.definitionModule = "turtle";
  lineNumber = 31
  var func437 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func437.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialised:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "turtle";
    try {
      var_initialised = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func437.paramCounts = [
    1,
  ];
  func437.variableArities = [
    false,
  ];
  this.methods["initialised:="] = func437;
  func437.definitionLine = 31;
  func437.definitionModule = "turtle";
  lineNumber = 154;
  moduleName = "turtle";
  lineNumber = 153
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_initialised)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'initialised' to be of type Unknown"))
  return this;
}
gracecode_turtle.imports = [
'dom',
'mgcollections',
];
if (gctCache)
  gctCache['turtle'] = "path:\n turtle\nclasses:\n colour\npublic:\n document\n document:=\n canvas\n canvas:=\n ctx\n ctx:=\n trig\n trig:=\n colour\n black\n blue\n green\n red\n x\n x:=\n y\n y:=\n started\n started:=\n maxActionsDrawn\n maxActionsDrawn:=\n delay\n delay:=\n turtleAngle\n turtleAngle:=\n steps\n stages\n PI\n drawTurtle\n backingCanvas\n backingCanvas:=\n drawingEnabled\n drawingEnabled:=\n move\n turnRight\n turnLeft\n penUp\n penDown\n initialised\n initialised:=\n initialise\n start\nconfidential:\nfresh-methods:\nconstructors-of:colour:\n r()g()b\nmethods-of:colour.r()g()b:\n b\n g\n r\nmodules:\n mgcollections\n";
if (originalSourceLines) {
  originalSourceLines["turtle"] = [
    "import \"dom\" as dom",
    "import \"mgcollections\" as collections",
    "",
    "// These are vars to allow updating them only when \"start\" runs",
    "var document",
    "var canvas",
    "var ctx",
    "var trig",
    "",
    "class colour.r(r')g(g')b(b') {",
    "    def r is readable = r'",
    "    def g is readable = g'",
    "    def b is readable = b'",
    "}",
    "def black = colour.r 0 g 0 b 0",
    "def blue = colour.r 0 g 0 b 255",
    "def green = colour.r 0 g 255 b 0",
    "def red = colour.r 255 g 0 b 0",
    "",
    "var x := 150",
    "var y := 225",
    "var started := false",
    "var maxActionsDrawn := -1",
    "var delay := 1",
    "",
    "var turtleAngle := 0",
    "",
    "// Each frame of the image is a step",
    "def steps = collections.list.new",
    "// Each discrete movement command is a stage",
    "def stages = collections.list.new",
    "",
    "def PI = 3.14159",
    "",
    "method drawTurtle(angle) {",
    "    initialise",
    "    def mctx = canvas.getContext(\"2d\")",
    "    def triangleSize = 30",
    "    def x' = x + trig.sin(angle / 180 * PI) * triangleSize / 2",
    "    def y' = y - trig.cos(angle / 180 * PI) * triangleSize / 2",
    "    mctx.beginPath",
    "    mctx.fillStyle := \"rgb(0, 128, 0)\"",
    "    mctx.lineWidth := 3",
    "    mctx.moveTo(x', y')",
    "    mctx.lineTo(x' - trig.cos((angle - 75) / 180 * PI) * triangleSize,",
    "              y' - trig.sin((angle - 75) / 180 * PI) * triangleSize)",
    "    mctx.lineTo(x' + trig.cos((angle + 75) / 180 * PI) * triangleSize,",
    "              y' + trig.sin((angle + 75) / 180 * PI) * triangleSize)",
    "    mctx.lineTo(x', y')",
    "    mctx.fill",
    "    mctx.closePath",
    "}",
    "",
    "var backingCanvas",
    "var drawingEnabled := true",
    "",
    "method move(dist, lineCol, lineWidth) {",
    "    initialise",
    "    def angle = turtleAngle",
    "    def y' = trig.cos(angle / 180 * PI) * dist",
    "    def x' = trig.sin(angle / 180 * PI) * dist",
    "    def startX = x",
    "    def startY = y",
    "    def startAngle = turtleAngle",
    "    y := y - y'",
    "    x := x + x'",
    "    def stageN = stages.size - 1",
    "    def mctx = canvas.getContext(\"2d\")",
    "    // One frame for each unit of distance",
    "    for (1..dist) do {i->",
    "        steps.push {",
    "            def y'' = trig.cos(angle / 180 * PI) * i",
    "            def x'' = trig.sin(angle / 180 * PI) * i",
    "            mctx.beginPath",
    "            mctx.strokeStyle := \"rgb({lineCol.r}, {lineCol.g}, {lineCol.b})\"",
    "            mctx.lineWidth := lineWidth",
    "            mctx.moveTo(startX, startY)",
    "            y := startY - y''",
    "            x := startX + x''",
    "            if (drawingEnabled) then {",
    "                mctx.lineTo(x, y)",
    "                mctx.stroke",
    "            }",
    "            turtleAngle := startAngle",
    "        }",
    "    }",
    "    steps.push {",
    "        def y'' = trig.cos(angle / 180 * PI) * dist",
    "        def x'' = trig.sin(angle / 180 * PI) * dist",
    "        ctx.beginPath",
    "        ctx.strokeStyle := \"rgb({lineCol.r}, {lineCol.g}, {lineCol.b})\"",
    "        ctx.lineWidth := lineWidth",
    "        ctx.moveTo(startX, startY)",
    "        y := startY - y''",
    "        x := startX + x''",
    "        if (drawingEnabled) then {",
    "            ctx.lineTo(x, y)",
    "            ctx.stroke",
    "        }",
    "        turtleAngle := startAngle",
    "    }",
    "}",
    "method turnRight(ang) {",
    "    initialise",
    "    def startX = x",
    "    def startY = y",
    "    def startAngle = turtleAngle",
    "    for (0..ang) do {i->",
    "        steps.push {",
    "            x := startX",
    "            y := startY",
    "            turtleAngle := startAngle + i",
    "        }",
    "    }",
    "    steps.push {",
    "        x := startX",
    "        y := startY",
    "        turtleAngle := startAngle + ang",
    "    }",
    "    turtleAngle := turtleAngle + ang",
    "}",
    "method turnLeft(ang) {",
    "    initialise",
    "    def startX = x",
    "    def startY = y",
    "    def startAngle = turtleAngle",
    "    for (0..ang) do {i->",
    "        steps.push {",
    "            x := startX",
    "            y := startY",
    "            turtleAngle := startAngle - i",
    "        }",
    "    }",
    "    steps.push {",
    "        x := startX",
    "        y := startY",
    "        turtleAngle := startAngle - ang",
    "    }",
    "    turtleAngle := turtleAngle - ang",
    "}",
    "method penUp {",
    "    initialise",
    "    steps.push {",
    "        drawingEnabled := false",
    "    }",
    "}",
    "method penDown {",
    "    initialise",
    "    steps.push {",
    "        drawingEnabled := true",
    "    }",
    "}",
    "var initialised := false",
    "method initialise {",
    "    if (initialised) then {",
    "        return false",
    "    }",
    "    document := dom.document",
    "    // Activate the canvas tab if it isn't already",
    "    def ts = document.getElementById(\"output-select\")",
    "    for (0..(ts.options.length-1)) do {i->",
    "        if (ts.options.item(i).value == \"canvas\") then {",
    "            ts.selectedIndex := i",
    "            dom.window.outputswitch",
    "        }",
    "    }",
    "    initialised := true",
    "    trig := dom.window.Math",
    "    canvas := document.getElementById(\"standard-canvas\")",
    "    ctx := canvas.getContext(\"2d\")",
    "    ctx.lineWidth := 1",
    "    ctx.fillStyle := \"white\"",
    "    ctx.fillRect(0, 0, 500, 500)",
    "}",
    "method start {",
    "    initialise",
    "    // Iterate through the frames of the image and draw them,",
    "    // each separated in time by 10ms. dom.for()waiting()do",
    "    // uses setTimeout internally so it runs asynchronously.",
    "    backingCanvas := dom.document.createElement(\"canvas\")",
    "    backingCanvas.height := 250",
    "    backingCanvas.width := 500",
    "    ctx := backingCanvas.getContext(\"2d\")",
    "    def mctx = canvas.getContext(\"2d\")",
    "    dom.for(steps) waiting(delay)do {step->",
    "        mctx.fillStyle := \"white\"",
    "        mctx.fillRect(0, 0, 500, 500)",
    "        x := 150",
    "        y := 225",
    "        turtleAngle := 0",
    "        step.apply",
    "        mctx.drawImage(backingCanvas, 0, 0)",
    "        drawTurtle(turtleAngle)",
    "    }",
    "}",
    "",
  ];
}
