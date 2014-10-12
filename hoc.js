function gracecode_hoc () {
  this.definitionModule = "hoc";
  this.definitionLine = 0;
  lineNumber = 12
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
      lineNumber = 13
      onSelf = true;
      var call1 = callmethod(this, "initialize", [0]);
      lineNumber = 14
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
  func0.definitionLine = 12;
  func0.definitionModule = "hoc";
  lineNumber = 17
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
      lineNumber = 18
      onSelf = true;
      var call4 = callmethod(this, "initialize", [0]);
      lineNumber = 19
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
  func3.definitionLine = 17;
  func3.definitionModule = "hoc";
  lineNumber = 22
  var func6 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func6.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turnAround)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 23
      onSelf = true;
      var call7 = callmethod(this, "initialize", [0]);
      lineNumber = 24
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
  func6.definitionLine = 22;
  func6.definitionModule = "hoc";
  lineNumber = 27
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
      lineNumber = 28
      onSelf = true;
      var call10 = callmethod(this, "initialize", [0]);
      lineNumber = 29
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
  func9.definitionLine = 27;
  func9.definitionModule = "hoc";
  lineNumber = 32
  var func12 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func12.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 33
      onSelf = true;
      var call13 = callmethod(this, "initialize", [0]);
      lineNumber = 34
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
  func12.definitionLine = 32;
  func12.definitionModule = "hoc";
  lineNumber = 37
  var func15 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func15.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 38
      onSelf = true;
      var call16 = callmethod(this, "initialize", [0]);
      lineNumber = 39
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
  func15.definitionLine = 37;
  func15.definitionModule = "hoc";
  lineNumber = 42
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penUp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 43
      onSelf = true;
      var call19 = callmethod(this, "initialize", [0]);
      lineNumber = 44
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
  func18.definitionLine = 42;
  func18.definitionModule = "hoc";
  lineNumber = 47
  var func21 = function(argcv) {
    var curarg = 1;
    var var_t = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func21.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (every)"));
    var var_m = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func21.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (do)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 48
      onSelf = true;
      var call22 = callmethod(this, "initialize", [0]);
      lineNumber = 53
      var if23 = var_done;
      lineNumber = 49
      var call24 = callmethod(var_whiles,"contains", [1], var_m);
      if (Grace_isTrue(call24)) {
        lineNumber = 50
        var call25 = callmethod(var_whiles,"remove", [1], var_m);
        lineNumber = 51
        var call26 = callmethod(var_counts,"remove", [1], var_m);
        if23 = call26;
      }
      lineNumber = 53
      var call27 = callmethod(var_whiles,"put", [2], var_m, var_t);
      lineNumber = 54
      var call28 = callmethod(var_counts,"put", [2], var_m, var_t);
      lineNumber = 55
      var call29 = callmethod(var_m,"apply", [0]);
      return call29
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func21.paramCounts = [
    1,
    1,
  ];
  func21.variableArities = [
    false,
    false,
  ];
  this.methods["every()do"] = func21;
  func21.definitionLine = 47;
  func21.definitionModule = "hoc";
  lineNumber = 58
  var func30 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func30.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialize)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 62
      var if31 = var_done;
      lineNumber = 59
      if (Grace_isTrue(var_initialized)) {
        lineNumber = 61
        lineNumber = 60
        var bool32 = new GraceBoolean(false)
        return bool32
        if31 = undefined;
      }
      lineNumber = 63
      lineNumber = 62
      var call33 = callmethod(var_dom,"document", [0]);
      var_document = call33;
      lineNumber = 64
      lineNumber = 63
      var bool34 = new GraceBoolean(true)
      var_initialized = bool34;
      lineNumber = 64
      var string35 = new GraceString("sprite");
      var call36 = callmethod(var_document,"getElementById", [1], string35);
      var_sprite = call36;
      lineNumber = 67
      lineNumber = 66
      var var_wait = new GraceNum(10);
      lineNumber = 67;
      moduleName = "hoc";
      lineNumber = 66
      if (!Grace_isTrue(callmethod(var_Unknown, "match",
        [1], var_wait)))
          throw new GraceExceptionPacket(TypeErrorObject,
                new GraceString("expected "
                + "initial value of def 'wait' to be of type Unknown"))
      lineNumber = 67
      var block37 = Grace_allocObject();
      block37.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block37.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block37.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block37.methods["match"] = GraceBlock_match;
      block37.methods["prefix?"] = GraceBlock_lift;
      block37.receiver = this;
      block37.className = 'block<hoc:67>';
      block37.real = function(
      ) {
        sourceObject = this;
        var bool38 = new GraceBoolean(true)
        return bool38;
      };
      lineNumber = 76
      var block39 = Grace_allocObject();
      block39.methods["apply"] = function() {
        var args = Array.prototype.slice.call(arguments, 1);
        return this.real.apply(this.receiver, args);
      }
      block39.methods["applyIndirectly"] = function(argcv, a) {
        return this.real.apply(this.receiver, a._value);
      }
      block39.methods["outer"] = function() {
        return callmethod(this.receiver, 'outer', [0]);
      }
      block39.methods["match"] = GraceBlock_match;
      block39.methods["prefix?"] = GraceBlock_lift;
      block39.receiver = this;
      block39.className = 'block<hoc:76>';
      block39.real = function(
      ) {
        sourceObject = this;
        lineNumber = 68
        lineNumber = 75
        var block40 = Grace_allocObject();
        block40.methods["apply"] = function() {
          var args = Array.prototype.slice.call(arguments, 1);
          return this.real.apply(this.receiver, args);
        }
        block40.methods["applyIndirectly"] = function(argcv, a) {
          return this.real.apply(this.receiver, a._value);
        }
        block40.methods["outer"] = function() {
          return callmethod(this.receiver, 'outer', [0]);
        }
        block40.methods["match"] = GraceBlock_match;
        block40.methods["prefix?"] = GraceBlock_lift;
        block40.receiver = this;
        block40.className = 'block<hoc:75>';
        block40.real = function(
          var_kvp
        ) {
          sourceObject = this;
          lineNumber = 70
          lineNumber = 69
          var call42 = callmethod(var_kvp,"value", [0]);
          var opresult44 = callmethod(call42, "-=", [1], var_wait);
          lineNumber = 74
          var if45 = var_done;
          lineNumber = 70
          var call47 = callmethod(var_kvp,"value", [0]);
          var opresult49 = callmethod(call47, "<", [1], new GraceNum(0));
          if (Grace_isTrue(opresult49)) {
            lineNumber = 71
            var call50 = callmethod(var_kvp,"key", [0]);
            var call51 = callmethod(call50,"apply", [0]);
            lineNumber = 72
            var call52 = callmethod(var_kvp,"key", [0]);
            var call53 = callmethod(var_whiles,"get", [1], call52);
            var call55 = callmethod(var_kvp,"value", [0]);
            var opresult57 = callmethod(call55, "+=", [1], call53);
            if45 = opresult57;
          }
          return if45;
        };
        var call58 = callmethod(Grace_prelude,"for()do", [1, 1], var_counts, block40);
        return call58;
      };
      lineNumber = 67
      var call59 = callmethod(var_dom,"while()waiting()do", [1, 1, 1], block37, var_wait, block39);
      return call59
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func30.paramCounts = [
    0,
  ];
  func30.variableArities = [
    false,
  ];
  this.methods["initialize"] = func30;
  func30.definitionLine = 58;
  func30.definitionModule = "hoc";
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
  var call60 = callmethod(var_StandardPrelude,"methods", [0]);
  this.superobj = call60;
  this.data = call60.data;
  this._value = call60._value;
  lineNumber = 6
  lineNumber = 7
  var var_document;
  lineNumber = 4
  var func61 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func61.paramCounts[0])
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
  func61.paramCounts = [
    0,
  ];
  func61.variableArities = [
    false,
  ];
  this.methods["document"] = func61;
  func61.definitionLine = 4;
  func61.definitionModule = "hoc";
  lineNumber = 4
  var func62 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func62.paramCounts[0])
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
  func62.paramCounts = [
    1,
  ];
  func62.variableArities = [
    false,
  ];
  this.methods["document:="] = func62;
  func62.definitionLine = 4;
  func62.definitionModule = "hoc";
  lineNumber = 8
  var var_sprite;
  lineNumber = 4
  var func63 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func63.paramCounts[0])
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
  func63.paramCounts = [
    0,
  ];
  func63.variableArities = [
    false,
  ];
  this.methods["sprite"] = func63;
  func63.definitionLine = 4;
  func63.definitionModule = "hoc";
  lineNumber = 4
  var func64 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func64.paramCounts[0])
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
  func64.paramCounts = [
    1,
  ];
  func64.variableArities = [
    false,
  ];
  this.methods["sprite:="] = func64;
  func64.definitionLine = 4;
  func64.definitionModule = "hoc";
  lineNumber = 9
  lineNumber = 8
  var bool65 = new GraceBoolean(false)
  var var_initialized = bool65;
  lineNumber = 4
  var func66 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func66.paramCounts[0])
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
  func66.paramCounts = [
    0,
  ];
  func66.variableArities = [
    false,
  ];
  this.methods["initialized"] = func66;
  func66.definitionLine = 4;
  func66.definitionModule = "hoc";
  lineNumber = 4
  var func67 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func67.paramCounts[0])
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
  func67.paramCounts = [
    1,
  ];
  func67.variableArities = [
    false,
  ];
  this.methods["initialized:="] = func67;
  func67.definitionLine = 4;
  func67.definitionModule = "hoc";
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
  var call68 = callmethod(var_collections,"map", [0]);
  var call69 = callmethod(call68,"new", [0]);
  var var_whiles = call69;
  var func70 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func70.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whiles)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      return var_whiles
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
  this.methods["whiles"] = func70;
  func70.definitionLine = 9;
  func70.definitionModule = "hoc";
  var func71 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func71.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (whiles:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_whiles = var___95__var__95__assign__95__tmp;
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
  this.methods["whiles:="] = func71;
  func71.definitionLine = 9;
  func71.definitionModule = "hoc";
  lineNumber = 10;
  moduleName = "hoc";
  lineNumber = 9
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_whiles)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'whiles' to be of type Unknown"))
  lineNumber = 12
  lineNumber = 10
  var call72 = callmethod(var_collections,"map", [0]);
  var call73 = callmethod(call72,"new", [0]);
  var var_counts = call73;
  var func74 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func74.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (counts)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      return var_counts
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
  this.methods["counts"] = func74;
  func74.definitionLine = 10;
  func74.definitionModule = "hoc";
  var func75 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func75.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (counts:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_counts = var___95__var__95__assign__95__tmp;
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
  this.methods["counts:="] = func75;
  func75.definitionLine = 10;
  func75.definitionModule = "hoc";
  lineNumber = 12;
  moduleName = "hoc";
  lineNumber = 10
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_counts)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'counts' to be of type Unknown"))
  lineNumber = 12
  lineNumber = 17
  lineNumber = 22
  lineNumber = 27
  lineNumber = 32
  lineNumber = 37
  lineNumber = 42
  lineNumber = 47
  lineNumber = 58
  lineNumber = 78
  onSelf = true;
  var call76 = callmethod(this, "initialize", [0]);
  return this;
}
gracecode_hoc.imports = [
'dom',
'mgcollections',
'StandardPrelude',
];
if (gctCache)
  gctCache['hoc'] = "path:\n hoc\nclasses:\npublic:\n document\n document:=\n sprite\n sprite:=\n initialized\n initialized:=\n whiles\n whiles:=\n counts\n counts:=\n goToX()Y\n pickRandom()To\n turnAround\n say\n clear\n penDown\n penUp\n every()do\n initialize\nconfidential:\nfresh-methods:\nmodules:\n StandardPrelude\n mgcollections\n";
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
    "var whiles := collections.map.new",
    "var counts := collections.map.new",
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
    "method every(t)do(m) {",
    "    initialize",
    "    if (whiles.contains(m)) then {",
    "        whiles.remove(m)",
    "        counts.remove(m)",
    "    }",
    "    whiles.put(m, t)",
    "    counts.put(m, t)",
    "    m.apply",
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
    "    def wait = 10",
    "    dom.while {true} waiting (wait) do {",
    "        for (counts) do { kvp ->",
    "            kvp.value -= wait",
    "            if (kvp.value < 0) then {",
    "                kvp.key.apply",
    "                kvp.value += whiles.get(kvp.key)",
    "            }",
    "        }",
    "    }",
    "}",
    "",
    "initialize",
  ];
}
