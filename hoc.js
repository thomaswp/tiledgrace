function gracecode_hoc () {
  this.definitionModule = "hoc";
  this.definitionLine = 0;
  lineNumber = 15
  var func0 = function(argcv) {
    var curarg = 1;
    var var_x = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func0.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (goToX)"));
    var var_y = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func0.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (Y)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 16
      onSelf = true;
      var call1 = callmethod(this, "initialize", [0]);
      lineNumber = 17
      var call2 = callmethod(var_sprite,"goTo", [2], var_x, var_y);
      return call2
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
    1,
  ];
  func0.variableArities = [
    false,
    false,
  ];
  this.methods["goToX()Y"] = func0;
  func0.definitionLine = 15;
  func0.definitionModule = "hoc";
  lineNumber = 20
  var func3 = function(argcv) {
    var curarg = 1;
    var var_min = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func3.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pickRandom)"));
    var var_max = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func3.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (To)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 21
      onSelf = true;
      var call4 = callmethod(this, "initialize", [0]);
      lineNumber = 22
      var call5 = callmethod(var_sprite,"pickRandom", [2], var_min, var_max);
      return call5
      return undefined
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func3.paramCounts = [
    1,
    1,
  ];
  func3.variableArities = [
    false,
    false,
  ];
  this.methods["pickRandom()To"] = func3;
  func3.definitionLine = 20;
  func3.definitionModule = "hoc";
  lineNumber = 25
  var func6 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func6.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turnAround)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 26
      onSelf = true;
      var call7 = callmethod(this, "initialize", [0]);
      lineNumber = 27
      var call8 = callmethod(var_sprite,"turnAround", [0]);
      return call8
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func6.paramCounts = [
    0,
  ];
  func6.variableArities = [
    false,
  ];
  this.methods["turnAround"] = func6;
  func6.definitionLine = 25;
  func6.definitionModule = "hoc";
  lineNumber = 30
  var func9 = function(argcv) {
    var curarg = 1;
    var var_text = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func9.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (say)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 31
      onSelf = true;
      var call10 = callmethod(this, "initialize", [0]);
      lineNumber = 32
      var call11 = callmethod(var_sprite,"say", [1], var_text);
      return call11
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func9.paramCounts = [
    1,
  ];
  func9.variableArities = [
    false,
  ];
  this.methods["say"] = func9;
  func9.definitionLine = 30;
  func9.definitionModule = "hoc";
  lineNumber = 35
  var func12 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func12.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 36
      onSelf = true;
      var call13 = callmethod(this, "initialize", [0]);
      lineNumber = 37
      var call14 = callmethod(var_sprite,"clear", [0]);
      return call14
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func12.paramCounts = [
    0,
  ];
  func12.variableArities = [
    false,
  ];
  this.methods["clear"] = func12;
  func12.definitionLine = 35;
  func12.definitionModule = "hoc";
  lineNumber = 40
  var func15 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func15.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 41
      onSelf = true;
      var call16 = callmethod(this, "initialize", [0]);
      lineNumber = 42
      var call17 = callmethod(var_sprite,"penDown", [0]);
      return call17
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func15.paramCounts = [
    0,
  ];
  func15.variableArities = [
    false,
  ];
  this.methods["penDown"] = func15;
  func15.definitionLine = 40;
  func15.definitionModule = "hoc";
  lineNumber = 45
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penUp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 46
      onSelf = true;
      var call19 = callmethod(this, "initialize", [0]);
      lineNumber = 47
      var call20 = callmethod(var_sprite,"penUp", [0]);
      return call20
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func18.paramCounts = [
    0,
  ];
  func18.variableArities = [
    false,
  ];
  this.methods["penUp"] = func18;
  func18.definitionLine = 45;
  func18.definitionModule = "hoc";
  lineNumber = 50
  var func21 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func21.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (doClick)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 52
      lineNumber = 51
      var bool22 = new GraceBoolean(true)
      var_clicked = bool22;
      return bool22
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func21.paramCounts = [
    0,
  ];
  func21.variableArities = [
    false,
  ];
  this.methods["doClick"] = func21;
  func21.definitionLine = 50;
  func21.definitionModule = "hoc";
  lineNumber = 54
  var func23 = function(argcv) {
    var curarg = 1;
    var var_m = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func23.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whenClicked)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 55
      var call24 = callmethod(var_clickedBlocks,"push", [1], var_m);
      return call24
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func23.paramCounts = [
    1,
  ];
  func23.variableArities = [
    false,
  ];
  this.methods["whenClicked"] = func23;
  func23.definitionLine = 54;
  func23.definitionModule = "hoc";
  lineNumber = 58
  var func25 = function(argcv) {
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func25.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (wait)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 60
      lineNumber = 59
      var prod28 = callmethod(var_t, "*", [1], new GraceNum(1000));
      var_delay = prod28;
      return prod28
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func25.paramCounts = [
    1,
  ];
  func25.variableArities = [
    false,
  ];
  this.methods["wait"] = func25;
  func25.definitionLine = 58;
  func25.definitionModule = "hoc";
  lineNumber = 62
  var func29 = function(argcv) {
    var curarg = 1;
    var var_m = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func29.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forever)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 66
      var if30 = var_done;
      lineNumber = 63
      var call32 = callmethod(var_foreverBlocks,"size", [0]);
      var opresult34 = callmethod(call32, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult34)) {
        lineNumber = 64
        var call35 = callmethod(var_foreverBlocks,"pop", [0]);
        if30 = call35;
      }
      lineNumber = 66
      var call36 = callmethod(var_foreverBlocks,"push", [1], var_m);
      lineNumber = 68
      lineNumber = 67
      var_delay = new GraceNum(0);
      return new GraceNum(0)
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func29.paramCounts = [
    1,
  ];
  func29.variableArities = [
    false,
  ];
  this.methods["forever"] = func29;
  func29.definitionLine = 62;
  func29.definitionModule = "hoc";
  lineNumber = 70
  var func37 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func37.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialize)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 74
      var if38 = var_done;
      lineNumber = 71
      if (Grace_isTrue(var_initialized)) {
        lineNumber = 73
        lineNumber = 72
        var bool39 = new GraceBoolean(false)
        return bool39
        if38 = undefined;
      }
      lineNumber = 75
      lineNumber = 74
      var call40 = callmethod(var_dom,"document", [0]);
      var_document = call40;
      lineNumber = 76
      lineNumber = 75
      var bool41 = new GraceBoolean(true)
      var_initialized = bool41;
      lineNumber = 76
      var string42 = new GraceString("sprite");
      var call43 = callmethod(var_document,"getElementById", [1], string42);
      var_sprite = call43;
      lineNumber = 79
      lineNumber = 78
      var var_tick = new GraceNum(5);
      lineNumber = 79;
      moduleName = "hoc";
      lineNumber = 78
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_tick)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'tick' to be of type Unknown"))
      lineNumber = 79
      var block44 = Grace_allocObject();
      block44.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block44.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block44.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block44.methods["match"] = GraceBlock_match;
      block44.methods["prefix?"] = GraceBlock_lift;
      block44.receiver = this;
      block44.className = 'block<hoc:79>';
      block44.real = function(
      ) {
        sourceObject = this;
        return var_running;
      };
      lineNumber = 93
      var block45 = Grace_allocObject();
      block45.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block45.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block45.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block45.methods["match"] = GraceBlock_match;
      block45.methods["prefix?"] = GraceBlock_lift;
      block45.receiver = this;
      block45.className = 'block<hoc:93>';
      block45.real = function(
      ) {
        sourceObject = this;
        lineNumber = 81
        lineNumber = 80
        var diff48 = callmethod(var_delay, "-", [1], var_tick);
        var_delay = diff48;
        lineNumber = 86
        var if49 = var_done;
        lineNumber = 81
        var opresult52 = callmethod(var_delay, "<=", [1], new GraceNum(0));
        if (Grace_isTrue(opresult52)) {
          lineNumber = 82
          lineNumber = 85
          var block53 = Grace_allocObject();
          block53.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block53.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block53.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block53.methods["match"] = GraceBlock_match;
          block53.methods["prefix?"] = GraceBlock_lift;
          block53.receiver = this;
          block53.className = 'block<hoc:85>';
          block53.real = function(
            var_step
          ) {
            sourceObject = this;
            lineNumber = 83
            var call54 = callmethod(var_step,"apply", [0]);
            return call54;
          };
          var call55 = callmethod(Grace_prelude,"for()do", [1, 1], var_foreverBlocks, block53);
          if49 = call55;
        }
        lineNumber = 91
        var if56 = var_done;
        lineNumber = 86
        if (Grace_isTrue(var_clicked)) {
          lineNumber = 87
          lineNumber = 90
          var block57 = Grace_allocObject();
          block57.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block57.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block57.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block57.methods["match"] = GraceBlock_match;
          block57.methods["prefix?"] = GraceBlock_lift;
          block57.receiver = this;
          block57.className = 'block<hoc:90>';
          block57.real = function(
            var_step
          ) {
            sourceObject = this;
            lineNumber = 88
            var call58 = callmethod(var_step,"apply", [0]);
            return call58;
          };
          var call59 = callmethod(Grace_prelude,"for()do", [1, 1], var_clickedBlocks, block57);
          if56 = call59;
        }
        lineNumber = 92
        lineNumber = 91
        var bool60 = new GraceBoolean(false)
        var_clicked = bool60;
        return bool60;
      };
      lineNumber = 79
      var call61 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block44, var_tick, block45);
      return call61
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func37.paramCounts = [
    0,
  ];
  func37.variableArities = [
    false,
  ];
  this.methods["initialize"] = func37;
  func37.definitionLine = 70;
  func37.definitionModule = "hoc";
  lineNumber = 95
  var func62 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func62.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 97
      lineNumber = 96
      var bool63 = new GraceBoolean(false)
      var_running = bool63;
      return bool63
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func62.paramCounts = [
    0,
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["stop"] = func62;
  func62.definitionLine = 95;
  func62.definitionModule = "hoc";
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
  lineNumber = 3
  // Import of StandardPrelude
  if (typeof gracecode_StandardPrelude == 'undefined')
    throw new GraceExceptionPacket(RuntimeErrorObject, 
      new GraceString('could not find module StandardPrelude'));
  var var_StandardPrelude = do_import("StandardPrelude", gracecode_StandardPrelude);
  lineNumber = 4
  var call64 = callmethod(var_StandardPrelude,"methods", [0]);
  this.superobj = call64;
  this.data = call64.data;
  this._value = call64._value;
  lineNumber = 6
  lineNumber = 7
  var var_document;
  lineNumber = 4
  var func65 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func65.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 6
      return var_document
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func65.paramCounts = [
    0,
  ];
  func65.variableArities = [
    false,
  ];
  this.methods["document"] = func65;
  func65.definitionLine = 4;
  func65.definitionModule = "hoc";
  lineNumber = 4
  var func66 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func66.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (document:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
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
  func66.paramCounts = [
    1,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["document:="] = func66;
  func66.definitionLine = 4;
  func66.definitionModule = "hoc";
  lineNumber = 8
  var var_sprite;
  lineNumber = 4
  var func67 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func67.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sprite)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 7
      return var_sprite
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func67.paramCounts = [
    0,
  ];
  func67.variableArities = [
    false,
  ];
  this.methods["sprite"] = func67;
  func67.definitionLine = 4;
  func67.definitionModule = "hoc";
  lineNumber = 4
  var func68 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func68.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (sprite:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_sprite = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func68.paramCounts = [
    1,
  ];
  func68.variableArities = [
    false,
  ];
  this.methods["sprite:="] = func68;
  func68.definitionLine = 4;
  func68.definitionModule = "hoc";
  lineNumber = 9
  lineNumber = 8
  var bool69 = new GraceBoolean(false)
  var var_initialized = bool69;
  lineNumber = 4
  var func70 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func70.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialized)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 8
      return var_initialized
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func70.paramCounts = [
    0,
  ];
  func70.variableArities = [
    false,
  ];
  this.methods["initialized"] = func70;
  func70.definitionLine = 4;
  func70.definitionModule = "hoc";
  lineNumber = 4
  var func71 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func71.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialized:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_initialized = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func71.paramCounts = [
    1,
  ];
  func71.variableArities = [
    false,
  ];
  this.methods["initialized:="] = func71;
  func71.definitionLine = 4;
  func71.definitionModule = "hoc";
  lineNumber = 9;
  moduleName = "hoc";
  lineNumber = 8
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_initialized)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'initialized' to be of type Unknown"))
  lineNumber = 10
  lineNumber = 9
  var call72 = callmethod(var_collections,"list", [0]);
  var call73 = callmethod(call72,"new", [0]);
  var var_foreverBlocks = call73;
  var func74 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func74.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (foreverBlocks)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      return var_foreverBlocks
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func74.paramCounts = [
    0,
  ];
  func74.variableArities = [
    false,
  ];
  this.methods["foreverBlocks"] = func74;
  func74.definitionLine = 9;
  func74.definitionModule = "hoc";
  var func75 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func75.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (foreverBlocks:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_foreverBlocks = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func75.paramCounts = [
    1,
  ];
  func75.variableArities = [
    false,
  ];
  this.methods["foreverBlocks:="] = func75;
  func75.definitionLine = 9;
  func75.definitionModule = "hoc";
  lineNumber = 10;
  moduleName = "hoc";
  lineNumber = 9
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_foreverBlocks)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'foreverBlocks' to be of type Unknown"))
  lineNumber = 11
  lineNumber = 10
  var call76 = callmethod(var_collections,"list", [0]);
  var call77 = callmethod(call76,"new", [0]);
  var var_clickedBlocks = call77;
  var func78 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func78.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clickedBlocks)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      return var_clickedBlocks
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func78.paramCounts = [
    0,
  ];
  func78.variableArities = [
    false,
  ];
  this.methods["clickedBlocks"] = func78;
  func78.definitionLine = 10;
  func78.definitionModule = "hoc";
  var func79 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func79.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clickedBlocks:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_clickedBlocks = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func79.paramCounts = [
    1,
  ];
  func79.variableArities = [
    false,
  ];
  this.methods["clickedBlocks:="] = func79;
  func79.definitionLine = 10;
  func79.definitionModule = "hoc";
  lineNumber = 11;
  moduleName = "hoc";
  lineNumber = 10
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_clickedBlocks)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'clickedBlocks' to be of type Unknown"))
  lineNumber = 12
  lineNumber = 11
  var var_delay = new GraceNum(0);
  lineNumber = 10
  var func80 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func80.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (delay)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 11
      return var_delay
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func80.paramCounts = [
    0,
  ];
  func80.variableArities = [
    false,
  ];
  this.methods["delay"] = func80;
  func80.definitionLine = 10;
  func80.definitionModule = "hoc";
  lineNumber = 10
  var func81 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func81.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (delay:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
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
  func81.paramCounts = [
    1,
  ];
  func81.variableArities = [
    false,
  ];
  this.methods["delay:="] = func81;
  func81.definitionLine = 10;
  func81.definitionModule = "hoc";
  lineNumber = 12;
  moduleName = "hoc";
  lineNumber = 11
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_delay)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'delay' to be of type Unknown"))
  lineNumber = 13
  lineNumber = 12
  var bool82 = new GraceBoolean(true)
  var var_running = bool82;
  lineNumber = 10
  var func83 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func83.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (running)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 12
      return var_running
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func83.paramCounts = [
    0,
  ];
  func83.variableArities = [
    false,
  ];
  this.methods["running"] = func83;
  func83.definitionLine = 10;
  func83.definitionModule = "hoc";
  lineNumber = 10
  var func84 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func84.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (running:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_running = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func84.paramCounts = [
    1,
  ];
  func84.variableArities = [
    false,
  ];
  this.methods["running:="] = func84;
  func84.definitionLine = 10;
  func84.definitionModule = "hoc";
  lineNumber = 13;
  moduleName = "hoc";
  lineNumber = 12
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_running)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'running' to be of type Unknown"))
  lineNumber = 15
  lineNumber = 13
  var bool85 = new GraceBoolean(false)
  var var_clicked = bool85;
  lineNumber = 10
  var func86 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func86.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clicked)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 13
      return var_clicked
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func86.paramCounts = [
    0,
  ];
  func86.variableArities = [
    false,
  ];
  this.methods["clicked"] = func86;
  func86.definitionLine = 10;
  func86.definitionModule = "hoc";
  lineNumber = 10
  var func87 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func87.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clicked:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_clicked = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func87.paramCounts = [
    1,
  ];
  func87.variableArities = [
    false,
  ];
  this.methods["clicked:="] = func87;
  func87.definitionLine = 10;
  func87.definitionModule = "hoc";
  lineNumber = 15;
  moduleName = "hoc";
  lineNumber = 13
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_clicked)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'clicked' to be of type Unknown"))
  lineNumber = 15
  lineNumber = 20
  lineNumber = 25
  lineNumber = 30
  lineNumber = 35
  lineNumber = 40
  lineNumber = 45
  lineNumber = 50
  lineNumber = 54
  lineNumber = 58
  lineNumber = 62
  lineNumber = 70
  lineNumber = 95
  lineNumber = 99
  onSelf = true;
  var call88 = callmethod(this, "initialize", [0]);
  return this;
}
gracecode_hoc.imports = [
'dom',
'mgcollections',
'StandardPrelude',
];
if (gctCache)
  gctCache['hoc'] = "path:\n hoc\nclasses:\npublic:\n document\n document:=\n sprite\n sprite:=\n initialized\n initialized:=\n foreverBlocks\n foreverBlocks:=\n clickedBlocks\n clickedBlocks:=\n delay\n delay:=\n running\n running:=\n clicked\n clicked:=\n goToX()Y\n pickRandom()To\n turnAround\n say\n clear\n penDown\n penUp\n doClick\n whenClicked\n wait\n forever\n initialize\n stop\nconfidential:\nfresh-methods:\nmodules:\n";
if (originalSourceLines) {
  originalSourceLines["hoc"] = [
    "import \"dom\" as dom",
    "import \"mgcollections\" as collections",
    "import \"StandardPrelude\" as StandardPrelude",
    "inherits StandardPrelude.methods",
    "",
    "var document",
    "var sprite",
    "var initialized := false",
    "var foreverBlocks := collections.list.new",
    "var clickedBlocks := collections.list.new",
    "var delay := 0",
    "var running := true",
    "var clicked := false",
    "",
    "method goToX(x)Y(y) {",
    "    initialize",
    "    sprite.goTo(x, y)",
    "}",
    "",
    "method pickRandom(min)To(max) {",
    "    initialize",
    "    return sprite.pickRandom(min, max)",
    "}",
    "",
    "method turnAround {",
    "    initialize",
    "    sprite.turnAround",
    "}",
    "",
    "method say(text) {",
    "    initialize",
    "    sprite.say(text)",
    "}",
    "",
    "method clear {",
    "    initialize",
    "    sprite.clear",
    "}",
    "",
    "method penDown {",
    "    initialize",
    "    sprite.penDown",
    "}",
    "",
    "method penUp {",
    "    initialize",
    "    sprite.penUp",
    "}",
    "",
    "method doClick {",
    "    clicked := true",
    "}",
    "",
    "method whenClicked(m) {",
    "    clickedBlocks.push(m)",
    "}",
    "",
    "method wait(t) {",
    "    delay := t * 1000",
    "}",
    "",
    "method forever(m) {",
    "    if (foreverBlocks.size > 0) then {",
    "        foreverBlocks.pop",
    "    }",
    "    foreverBlocks.push(m)",
    "    delay := 0",
    "}",
    "",
    "method initialize {",
    "    if (initialized) then {",
    "        return false",
    "    }",
    "    document := dom.document",
    "    initialized := true",
    "    sprite := document.getElementById(\"sprite\")",
    "    ",
    "    def tick = 5",
    "    dom.while {running} waiting (tick) do {",
    "        delay := delay - tick",
    "        if (delay <= 0) then {",
    "            for (foreverBlocks) do { step ->",
    "                step.apply",
    "            }",
    "        }",
    "        if (clicked) then {",
    "            for (clickedBlocks) do { step ->",
    "                step.apply",
    "            }",
    "        }",
    "        clicked := false",
    "    }",
    "}",
    "",
    "method stop {",
    "    running := false",
    "}",
    "",
    "initialize",
  ];
}
