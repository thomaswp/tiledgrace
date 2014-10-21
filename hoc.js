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
      onSelf = true;
      var call24 = callmethod(this, "initialize", [0]);
      lineNumber = 56
      var call25 = callmethod(var_clickedBlocks,"push", [1], var_m);
      return call25
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
  lineNumber = 59
  var func26 = function(argcv) {
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func26.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (wait)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 60
      onSelf = true;
      var call27 = callmethod(this, "initialize", [0]);
      lineNumber = 62
      lineNumber = 61
      var prod30 = callmethod(var_t, "*", [1], new GraceNum(1000));
      var_delay = prod30;
      return prod30
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func26.paramCounts = [
    1,
  ];
  func26.variableArities = [
    false,
  ];
  this.methods["wait"] = func26;
  func26.definitionLine = 59;
  func26.definitionModule = "hoc";
  lineNumber = 64
  var func31 = function(argcv) {
    var curarg = 1;
    var var_m = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func31.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (forever)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 65
      onSelf = true;
      var call32 = callmethod(this, "initialize", [0]);
      lineNumber = 69
      var if33 = var_done;
      lineNumber = 66
      var call35 = callmethod(var_foreverBlocks,"size", [0]);
      var opresult37 = callmethod(call35, ">", [1], new GraceNum(0));
      if (Grace_isTrue(opresult37)) {
        lineNumber = 67
        var call38 = callmethod(var_foreverBlocks,"pop", [0]);
        if33 = call38;
      }
      lineNumber = 69
      var call39 = callmethod(var_foreverBlocks,"push", [1], var_m);
      lineNumber = 71
      lineNumber = 70
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
  func31.paramCounts = [
    1,
  ];
  func31.variableArities = [
    false,
  ];
  this.methods["forever"] = func31;
  func31.definitionLine = 64;
  func31.definitionModule = "hoc";
  lineNumber = 73
  var func40 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func40.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialize)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 77
      var if41 = var_done;
      lineNumber = 74
      if (Grace_isTrue(var_initialized)) {
        lineNumber = 76
        lineNumber = 75
        var bool42 = new GraceBoolean(false)
        return bool42
        if41 = undefined;
      }
      lineNumber = 78
      lineNumber = 77
      var call43 = callmethod(var_dom,"document", [0]);
      var_document = call43;
      lineNumber = 79
      lineNumber = 78
      var bool44 = new GraceBoolean(true)
      var_initialized = bool44;
      lineNumber = 79
      var string45 = new GraceString("sprite");
      var call46 = callmethod(var_document,"getElementById", [1], string45);
      var_sprite = call46;
      lineNumber = 82
      lineNumber = 81
      var var_tick = new GraceNum(5);
      lineNumber = 82;
      moduleName = "hoc";
      lineNumber = 81
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_tick)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'tick' to be of type Unknown"))
      lineNumber = 82
      var block47 = Grace_allocObject();
      block47.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block47.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block47.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block47.methods["match"] = GraceBlock_match;
      block47.methods["prefix?"] = GraceBlock_lift;
      block47.receiver = this;
      block47.className = 'block<hoc:82>';
      block47.real = function(
      ) {
        sourceObject = this;
        return var_running;
      };
      lineNumber = 96
      var block48 = Grace_allocObject();
      block48.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block48.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block48.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block48.methods["match"] = GraceBlock_match;
      block48.methods["prefix?"] = GraceBlock_lift;
      block48.receiver = this;
      block48.className = 'block<hoc:96>';
      block48.real = function(
      ) {
        sourceObject = this;
        lineNumber = 84
        lineNumber = 83
        var diff51 = callmethod(var_delay, "-", [1], var_tick);
        var_delay = diff51;
        lineNumber = 89
        var if52 = var_done;
        lineNumber = 84
        var opresult55 = callmethod(var_delay, "<=", [1], new GraceNum(0));
        if (Grace_isTrue(opresult55)) {
          lineNumber = 85
          lineNumber = 88
          var block56 = Grace_allocObject();
          block56.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block56.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block56.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block56.methods["match"] = GraceBlock_match;
          block56.methods["prefix?"] = GraceBlock_lift;
          block56.receiver = this;
          block56.className = 'block<hoc:88>';
          block56.real = function(
            var_step
          ) {
            sourceObject = this;
            lineNumber = 86
            var call57 = callmethod(var_step,"apply", [0]);
            return call57;
          };
          var call58 = callmethod(Grace_prelude,"for()do", [1, 1], var_foreverBlocks, block56);
          if52 = call58;
        }
        lineNumber = 94
        var if59 = var_done;
        lineNumber = 89
        if (Grace_isTrue(var_clicked)) {
          lineNumber = 90
          lineNumber = 93
          var block60 = Grace_allocObject();
          block60.methods["apply"] = function() {
            var args = Array.prototype.slice.call(arguments, 1);
            return this.real.apply(this.receiver, args);
          }
          block60.methods["applyIndirectly"] = function(argcv, a) {
            return this.real.apply(this.receiver, a._value);
          }
          block60.methods["outer"] = function() {
            return callmethod(this.receiver, 'outer', [0]);
          }
          block60.methods["match"] = GraceBlock_match;
          block60.methods["prefix?"] = GraceBlock_lift;
          block60.receiver = this;
          block60.className = 'block<hoc:93>';
          block60.real = function(
            var_step
          ) {
            sourceObject = this;
            lineNumber = 91
            var call61 = callmethod(var_step,"apply", [0]);
            return call61;
          };
          var call62 = callmethod(Grace_prelude,"for()do", [1, 1], var_clickedBlocks, block60);
          if59 = call62;
        }
        lineNumber = 95
        lineNumber = 94
        var bool63 = new GraceBoolean(false)
        var_clicked = bool63;
        return bool63;
      };
      lineNumber = 82
      var call64 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block47, var_tick, block48);
      return call64
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func40.paramCounts = [
    0,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["initialize"] = func40;
  func40.definitionLine = 73;
  func40.definitionModule = "hoc";
  lineNumber = 98
  var func65 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func65.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (stop)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 100
      lineNumber = 99
      var bool66 = new GraceBoolean(false)
      var_running = bool66;
      return bool66
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
  this.methods["stop"] = func65;
  func65.definitionLine = 98;
  func65.definitionModule = "hoc";
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
  var call67 = callmethod(var_StandardPrelude,"methods", [0]);
  this.superobj = call67;
  this.data = call67.data;
  this._value = call67._value;
  lineNumber = 6
  lineNumber = 7
  var var_document;
  lineNumber = 4
  var func68 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func68.paramCounts[0])
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
  func68.paramCounts = [
    0,
  ];
  func68.variableArities = [
    false,
  ];
  this.methods["document"] = func68;
  func68.definitionLine = 4;
  func68.definitionModule = "hoc";
  lineNumber = 4
  var func69 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func69.paramCounts[0])
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
  func69.paramCounts = [
    1,
  ];
  func69.variableArities = [
    false,
  ];
  this.methods["document:="] = func69;
  func69.definitionLine = 4;
  func69.definitionModule = "hoc";
  lineNumber = 8
  var var_sprite;
  lineNumber = 4
  var func70 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func70.paramCounts[0])
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
  func70.paramCounts = [
    0,
  ];
  func70.variableArities = [
    false,
  ];
  this.methods["sprite"] = func70;
  func70.definitionLine = 4;
  func70.definitionModule = "hoc";
  lineNumber = 4
  var func71 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func71.paramCounts[0])
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
  func71.paramCounts = [
    1,
  ];
  func71.variableArities = [
    false,
  ];
  this.methods["sprite:="] = func71;
  func71.definitionLine = 4;
  func71.definitionModule = "hoc";
  lineNumber = 9
  lineNumber = 8
  var bool72 = new GraceBoolean(false)
  var var_initialized = bool72;
  lineNumber = 4
  var func73 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func73.paramCounts[0])
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
  func73.paramCounts = [
    0,
  ];
  func73.variableArities = [
    false,
  ];
  this.methods["initialized"] = func73;
  func73.definitionLine = 4;
  func73.definitionModule = "hoc";
  lineNumber = 4
  var func74 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func74.paramCounts[0])
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
  func74.paramCounts = [
    1,
  ];
  func74.variableArities = [
    false,
  ];
  this.methods["initialized:="] = func74;
  func74.definitionLine = 4;
  func74.definitionModule = "hoc";
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
  var call75 = callmethod(var_collections,"list", [0]);
  var call76 = callmethod(call75,"new", [0]);
  var var_foreverBlocks = call76;
  var func77 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func77.paramCounts[0])
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
  func77.paramCounts = [
    0,
  ];
  func77.variableArities = [
    false,
  ];
  this.methods["foreverBlocks"] = func77;
  func77.definitionLine = 9;
  func77.definitionModule = "hoc";
  var func78 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func78.paramCounts[0])
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
  func78.paramCounts = [
    1,
  ];
  func78.variableArities = [
    false,
  ];
  this.methods["foreverBlocks:="] = func78;
  func78.definitionLine = 9;
  func78.definitionModule = "hoc";
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
  var call79 = callmethod(var_collections,"list", [0]);
  var call80 = callmethod(call79,"new", [0]);
  var var_clickedBlocks = call80;
  var func81 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func81.paramCounts[0])
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
  func81.paramCounts = [
    0,
  ];
  func81.variableArities = [
    false,
  ];
  this.methods["clickedBlocks"] = func81;
  func81.definitionLine = 10;
  func81.definitionModule = "hoc";
  var func82 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func82.paramCounts[0])
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
  func82.paramCounts = [
    1,
  ];
  func82.variableArities = [
    false,
  ];
  this.methods["clickedBlocks:="] = func82;
  func82.definitionLine = 10;
  func82.definitionModule = "hoc";
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
  var func83 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func83.paramCounts[0])
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
  func83.paramCounts = [
    0,
  ];
  func83.variableArities = [
    false,
  ];
  this.methods["delay"] = func83;
  func83.definitionLine = 10;
  func83.definitionModule = "hoc";
  lineNumber = 10
  var func84 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func84.paramCounts[0])
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
  func84.paramCounts = [
    1,
  ];
  func84.variableArities = [
    false,
  ];
  this.methods["delay:="] = func84;
  func84.definitionLine = 10;
  func84.definitionModule = "hoc";
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
  var bool85 = new GraceBoolean(true)
  var var_running = bool85;
  lineNumber = 10
  var func86 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func86.paramCounts[0])
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
  func86.paramCounts = [
    0,
  ];
  func86.variableArities = [
    false,
  ];
  this.methods["running"] = func86;
  func86.definitionLine = 10;
  func86.definitionModule = "hoc";
  lineNumber = 10
  var func87 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func87.paramCounts[0])
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
  func87.paramCounts = [
    1,
  ];
  func87.variableArities = [
    false,
  ];
  this.methods["running:="] = func87;
  func87.definitionLine = 10;
  func87.definitionModule = "hoc";
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
  var bool88 = new GraceBoolean(false)
  var var_clicked = bool88;
  lineNumber = 10
  var func89 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func89.paramCounts[0])
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
  func89.paramCounts = [
    0,
  ];
  func89.variableArities = [
    false,
  ];
  this.methods["clicked"] = func89;
  func89.definitionLine = 10;
  func89.definitionModule = "hoc";
  lineNumber = 10
  var func90 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func90.paramCounts[0])
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
  func90.paramCounts = [
    1,
  ];
  func90.variableArities = [
    false,
  ];
  this.methods["clicked:="] = func90;
  func90.definitionLine = 10;
  func90.definitionModule = "hoc";
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
  lineNumber = 59
  lineNumber = 64
  lineNumber = 73
  return this;
}
gracecode_hoc.imports = [
'dom',
'mgcollections',
'StandardPrelude',
];
if (gctCache)
  gctCache['hoc'] = "fresh-methods:\nmodules:\n mgcollections\n StandardPrelude\npath:\n hoc\nclasses:\npublic:\n document\n document:=\n sprite\n sprite:=\n initialized\n initialized:=\n foreverBlocks\n foreverBlocks:=\n clickedBlocks\n clickedBlocks:=\n delay\n delay:=\n running\n running:=\n clicked\n clicked:=\n goToX()Y\n pickRandom()To\n turnAround\n say\n clear\n penDown\n penUp\n doClick\n whenClicked\n wait\n forever\n initialize\n stop\nconfidential:\n";
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
    "    initialize",
    "    clickedBlocks.push(m)",
    "}",
    "",
    "method wait(t) {",
    "    initialize",
    "    delay := t * 1000",
    "}",
    "",
    "method forever(m) {",
    "    initialize",
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
  ];
}
