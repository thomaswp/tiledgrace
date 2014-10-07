function gracecode_hoc () {
  this.definitionModule = "hoc";
  this.definitionLine = 0;
  lineNumber = 10
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
      lineNumber = 11
      onSelf = true;
      var call1 = callmethod(this, "initialize", [0]);
      lineNumber = 12
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
  func0.definitionLine = 10;
  func0.definitionModule = "hoc";
  lineNumber = 15
  var func3 = function(argcv) {
    var curarg = 1;
    var var_min = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func3.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (pickRandomBetween)"));
    var var_max = arguments[curarg];
    curarg++;
    if (argcv[1] !=  func3.paramCounts[1])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 2 (And)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 16
      onSelf = true;
      var call4 = callmethod(this, "initialize", [0]);
      lineNumber = 17
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
  this.methods["pickRandomBetween()And"] = func3;
  func3.definitionLine = 15;
  func3.definitionModule = "hoc";
  lineNumber = 20
  var func6 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func6.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (turnAround)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 21
      onSelf = true;
      var call7 = callmethod(this, "initialize", [0]);
      lineNumber = 22
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
  func6.definitionLine = 20;
  func6.definitionModule = "hoc";
  lineNumber = 25
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
      lineNumber = 26
      onSelf = true;
      var call10 = callmethod(this, "initialize", [0]);
      lineNumber = 27
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
  func9.definitionLine = 25;
  func9.definitionModule = "hoc";
  lineNumber = 30
  var func12 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func12.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (clear)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 31
      onSelf = true;
      var call13 = callmethod(this, "initialize", [0]);
      lineNumber = 32
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
  func12.definitionLine = 30;
  func12.definitionModule = "hoc";
  lineNumber = 35
  var func15 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func15.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penDown)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 36
      onSelf = true;
      var call16 = callmethod(this, "initialize", [0]);
      lineNumber = 37
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
  func15.definitionLine = 35;
  func15.definitionModule = "hoc";
  lineNumber = 40
  var func18 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func18.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (penUp)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 41
      onSelf = true;
      var call19 = callmethod(this, "initialize", [0]);
      lineNumber = 42
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
  func18.definitionLine = 40;
  func18.definitionModule = "hoc";
  lineNumber = 45
  var func21 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func21.paramCounts[0])
      callmethod(RuntimeErrorObject, "raise", [1], new GraceString("wrong number of arguments for part 1 (initialize)"));
    var returnTarget = invocationCount;
    invocationCount++;
    moduleName = "hoc";
    try {
      lineNumber = 49
      var if22 = var_done;
      lineNumber = 46
      if (Grace_isTrue(var_initialized)) {
        lineNumber = 48
        lineNumber = 47
        var bool23 = new GraceBoolean(false)
        return bool23
        if22 = undefined;
      }
      lineNumber = 50
      lineNumber = 49
      var call24 = callmethod(var_dom,"document", [0]);
      var_document = call24;
      lineNumber = 51
      lineNumber = 50
      var bool25 = new GraceBoolean(true)
      var_initialized = bool25;
      lineNumber = 51
      var string26 = new GraceString("sprite");
      var call27 = callmethod(var_document,"getElementById", [1], string26);
      var_sprite = call27;
      return call27
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
  this.methods["initialize"] = func21;
  func21.definitionLine = 45;
  func21.definitionModule = "hoc";
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
  var call28 = callmethod(var_StandardPrelude,"methods", [0]);
  this.superobj = call28;
  this.data = call28.data;
  this._value = call28._value;
  lineNumber = 6
  lineNumber = 7
  var var_document;
  lineNumber = 4
  var func29 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func29.paramCounts[0])
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
  func29.paramCounts = [
    0,
  ];
  func29.variableArities = [
    false,
  ];
  this.methods["document"] = func29;
  func29.definitionLine = 4;
  func29.definitionModule = "hoc";
  lineNumber = 4
  var func30 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func30.paramCounts[0])
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
  func30.paramCounts = [
    1,
  ];
  func30.variableArities = [
    false,
  ];
  this.methods["document:="] = func30;
  func30.definitionLine = 4;
  func30.definitionModule = "hoc";
  lineNumber = 8
  var var_sprite;
  lineNumber = 4
  var func31 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func31.paramCounts[0])
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
  func31.paramCounts = [
    0,
  ];
  func31.variableArities = [
    false,
  ];
  this.methods["sprite"] = func31;
  func31.definitionLine = 4;
  func31.definitionModule = "hoc";
  lineNumber = 4
  var func32 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func32.paramCounts[0])
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
  func32.paramCounts = [
    1,
  ];
  func32.variableArities = [
    false,
  ];
  this.methods["sprite:="] = func32;
  func32.definitionLine = 4;
  func32.definitionModule = "hoc";
  lineNumber = 10
  lineNumber = 8
  var bool33 = new GraceBoolean(false)
  var var_initialized = bool33;
  lineNumber = 4
  var func34 = function(argcv) {
    var curarg = 1;
    if (argcv[0] !=  func34.paramCounts[0])
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
  func34.paramCounts = [
    0,
  ];
  func34.variableArities = [
    false,
  ];
  this.methods["initialized"] = func34;
  func34.definitionLine = 4;
  func34.definitionModule = "hoc";
  lineNumber = 4
  var func35 = function(argcv) {
    var curarg = 1;
    var var___95__var__95__assign__95__tmp = arguments[curarg];
    curarg++;
    if (argcv[0] !=  func35.paramCounts[0])
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
  func35.paramCounts = [
    1,
  ];
  func35.variableArities = [
    false,
  ];
  this.methods["initialized:="] = func35;
  func35.definitionLine = 4;
  func35.definitionModule = "hoc";
  lineNumber = 10;
  moduleName = "hoc";
  lineNumber = 8
  if (!Grace_isTrue(callmethod(var_Unknown, "match",
    [1], var_initialized)))
      throw new GraceExceptionPacket(TypeErrorObject,
            new GraceString("expected "
            + "initial value of var 'initialized' to be of type Unknown"))
  lineNumber = 10
  lineNumber = 15
  lineNumber = 20
  lineNumber = 25
  lineNumber = 30
  lineNumber = 35
  lineNumber = 40
  return this;
}
gracecode_hoc.imports = [
'dom',
'mgcollections',
'StandardPrelude',
];
if (gctCache)
  gctCache['hoc'] = "modules:\n StandardPrelude\n mgcollections\nfresh-methods:\npath:\n hoc\nclasses:\npublic:\n document\n document:=\n sprite\n sprite:=\n initialized\n initialized:=\n goToX()Y\n pickRandomBetween()And\n turnAround\n say\n clear\n penDown\n penUp\n initialize\nconfidential:\n";
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
    "",
    "method goToX(x)Y(y) {",
    "    initialize",
    "    sprite.goTo(x, y)",
    "}",
    "",
    "method pickRandomBetween(min)And(max) {",
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
    "method initialize {",
    "    if (initialized) then {",
    "        return false",
    "    }",
    "    document := dom.document",
    "    initialized := true",
    "    sprite := document.getElementById(\"sprite\")",
    "}",
  ];
}
