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
  lineNumber = 48
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
      lineNumber = 49
      onSelf = true;
      var call22 = callmethod(this, "initialize", [0]);
      lineNumber = 55
      var if23 = var_done;
      lineNumber = 50
      var opresult26 = callmethod(var_m, "==", [1], var_last);
      if (Grace_isTrue(opresult26)) {
        lineNumber = 51
        var string27 = new GraceString("Same");
        var call28 = Grace_print(string27);
        if23 = call28;
      } else {
        lineNumber = 53
        var string29 = new GraceString("Different");
        var call30 = Grace_print(string29);
        if23 = call30;
      }
      lineNumber = 55
      var_last = var_m;
      return var_m
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
  func21.definitionLine = 48;
  func21.definitionModule = "hoc";
  lineNumber = 58
  var func31 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func31.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialize)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 62
      var if32 = var_done;
      lineNumber = 59
      if (Grace_isTrue(var_initialized)) {
        lineNumber = 61
        lineNumber = 60
        var bool33 = new GraceBoolean(false)
        return bool33
        if32 = undefined;
      }
      lineNumber = 63
      lineNumber = 62
      var call34 = callmethod(var_dom,"document", [0]);
      var_document = call34;
      lineNumber = 64
      lineNumber = 63
      var bool35 = new GraceBoolean(true)
      var_initialized = bool35;
      lineNumber = 64
      var string36 = new GraceString("sprite");
      var call37 = callmethod(var_document,"getElementById", [1], string36);
      var_sprite = call37;
      return call37
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func31.paramCounts = [
    0,
  ];
  func31.variableArities = [
    false,
  ];
  this.methods["initialize"] = func31;
  func31.definitionLine = 58;
  func31.definitionModule = "hoc";
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
  var call38 = callmethod(var_StandardPrelude,"methods", [0]);
  this.superobj = call38;
  this.data = call38.data;
  this._value = call38._value;
  lineNumber = 6
  lineNumber = 7
  var var_document;
  lineNumber = 4
  var func39 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func39.paramCounts[0])
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
  func39.paramCounts = [
    0,
  ];
  func39.variableArities = [
    false,
  ];
  this.methods["document"] = func39;
  func39.definitionLine = 4;
  func39.definitionModule = "hoc";
  lineNumber = 4
  var func40 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func40.paramCounts[0])
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
  func40.paramCounts = [
    1,
  ];
  func40.variableArities = [
    false,
  ];
  this.methods["document:="] = func40;
  func40.definitionLine = 4;
  func40.definitionModule = "hoc";
  lineNumber = 8
  var var_sprite;
  lineNumber = 4
  var func41 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func41.paramCounts[0])
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
  func41.paramCounts = [
    0,
  ];
  func41.variableArities = [
    false,
  ];
  this.methods["sprite"] = func41;
  func41.definitionLine = 4;
  func41.definitionModule = "hoc";
  lineNumber = 4
  var func42 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func42.paramCounts[0])
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
  func42.paramCounts = [
    1,
  ];
  func42.variableArities = [
    false,
  ];
  this.methods["sprite:="] = func42;
  func42.definitionLine = 4;
  func42.definitionModule = "hoc";
  lineNumber = 9
  lineNumber = 8
  var bool43 = new GraceBoolean(false)
  var var_initialized = bool43;
  lineNumber = 4
  var func44 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func44.paramCounts[0])
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
  func44.paramCounts = [
    0,
  ];
  func44.variableArities = [
    false,
  ];
  this.methods["initialized"] = func44;
  func44.definitionLine = 4;
  func44.definitionModule = "hoc";
  lineNumber = 4
  var func45 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func45.paramCounts[0])
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
  func45.paramCounts = [
    1,
  ];
  func45.variableArities = [
    false,
  ];
  this.methods["initialized:="] = func45;
  func45.definitionLine = 4;
  func45.definitionModule = "hoc";
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
  var call46 = callmethod(var_collections,"map", [0]);
  var call47 = callmethod(call46,"new", [0]);
  var var_whiles = call47;
  var func48 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func48.paramCounts[0])
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
  func48.paramCounts = [
    0,
  ];
  func48.variableArities = [
    false,
  ];
  this.methods["whiles"] = func48;
  func48.definitionLine = 9;
  func48.definitionModule = "hoc";
  var func49 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func49.paramCounts[0])
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
  func49.paramCounts = [
    1,
  ];
  func49.variableArities = [
    false,
  ];
  this.methods["whiles:="] = func49;
  func49.definitionLine = 9;
  func49.definitionModule = "hoc";
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
  var call50 = callmethod(var_collections,"map", [0]);
  var call51 = callmethod(call50,"new", [0]);
  var var_counts = call51;
  var func52 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func52.paramCounts[0])
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
  func52.paramCounts = [
    0,
  ];
  func52.variableArities = [
    false,
  ];
  this.methods["counts"] = func52;
  func52.definitionLine = 10;
  func52.definitionModule = "hoc";
  var func53 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func53.paramCounts[0])
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
  func53.paramCounts = [
    1,
  ];
  func53.variableArities = [
    false,
  ];
  this.methods["counts:="] = func53;
  func53.definitionLine = 10;
  func53.definitionModule = "hoc";
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
  var var_last;
  lineNumber = 10
  var func54 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func54.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (last)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 47
      return var_last
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func54.paramCounts = [
    0,
  ];
  func54.variableArities = [
    false,
  ];
  this.methods["last"] = func54;
  func54.definitionLine = 10;
  func54.definitionModule = "hoc";
  lineNumber = 10
  var func55 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func55.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (last:=)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      var_last = var___95__var__95__assign__95__tmp;
      return var___95__var__95__assign__95__tmp
    } catch(e) {
      if ((e.exctype == 'return') && (e.target == returnTarget)) {
        return e.returnvalue;
      } else {
        throw e;
      }
    }
  }
  func55.paramCounts = [
    1,
  ];
  func55.variableArities = [
    false,
  ];
  this.methods["last:="] = func55;
  func55.definitionLine = 10;
  func55.definitionModule = "hoc";
  lineNumber = 48
  lineNumber = 58
  lineNumber = 78
  onSelf = true;
  var call56 = callmethod(this, "initialize", [0]);
  return this;
}
gracecode_hoc.imports = [
'dom',
'mgcollections',
'StandardPrelude',
];
if (gctCache)
  gctCache['hoc'] = "confidential:\nmodules:\n StandardPrelude\n mgcollections\nfresh-methods:\npath:\n hoc\nclasses:\npublic:\n document\n document:=\n sprite\n sprite:=\n initialized\n initialized:=\n whiles\n whiles:=\n counts\n counts:=\n goToX()Y\n pickRandom()To\n turnAround\n say\n clear\n penDown\n penUp\n last\n last:=\n every()do\n initialize\n";
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
    "var last;",
    "method every(t)do(m) {",
    "    initialize",
    "    if (m == last) then {",
    "        print \"Same\"",
    "    } else {",
    "        print \"Different\"",
    "    }",
    "    last := m;",
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
    "    //def wait = 10",
    "    //dom.while {true} waiting (wait) do {",
    "    //    for (counts) do { kvp ->",
    "    //        kvp.value -= wait",
    "    //        if (kvp.value < 0) then {",
    "    //            kvp.key.apply",
    "    //            kvp.value += whiles.get(kvp.key)",
    "    //        }",
    "    //    }",
    "    //}",
    "}",
    "",
    "initialize",
  ];
}
