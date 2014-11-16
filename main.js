"use strict"
var holes = document.getElementsByClassName('hole');
var codearea = document.getElementById('codearea');
var toolbox = document.getElementById('toolbox');
var outputarea = document.getElementById('outputarea');
var tiles = codearea.getElementsByClassName('tile');
var supportsPointerEvents = false;
var blockIndent = 0;
var chunkLine;

var eventLog = [];
var eventEpoch = new Date();

function logEvent(type, data) {
    var date = new Date();
    var table = type.indexOf("drag") >= 0 ? "drag_logs" : "grace_logs";
    eventLog.push({
        type: type,
        data: data,
        time: date.getTime(),
        timestamp: date - eventEpoch,
        table: table,
    });
}

function generateHash(obj) {
    return '#' + btoa(encodeURIComponent(JSON.stringify(obj)));
}
function checkpointSave() {
    var obj = generateJSObject();
    var progHash = generateHash(obj);
    logEvent('checkpoint-save', obj);
    if (navigator.userAgent.indexOf("MSIE") == -1)
        history.pushState(obj, "", progHash);
}
function loadSave() {
    if (!localStorage.getItem("autosave-json")) {
        alert("You have no saved program.");
        return;
    }
    var obj = loadJSON(localStorage.getItem("autosave-json"));
    var progHash = generateHash(obj);
    history.pushState(JSON.parse(localStorage.getItem("autosave-json")), "", progHash);
}

function changeDialect() {
    var tb = document.getElementById('toolbox');
    var dialectMethods = tb.getElementsByClassName("dialect-method");
    while (dialectMethods.length) {
        tb.removeChild(dialectMethods[0]);
    }
    addDialectMethods(document.getElementById('dialect').value);
    var cb = document.getElementById('category-bar');
    while (cb.childNodes.length > 0)
        cb.removeChild(cb.lastChild);
    var cats = {};
    for (var i=0; i<tb.childNodes.length; i++) {
        if (!tb.childNodes[i].dataset)
            continue;
        var cat = tb.childNodes[i].dataset.category;
        if (cats[cat])
            continue;
        cats[cat] = true;
        var but = document.createElement("input");
        but.type = "button";
        but.value = cat;
        but.addEventListener("click", function(ev) {
            switchPane(this.value);
        });
        cb.appendChild(but);
    }
    switchPane("Variables");
    generateCode();
    checkpointSave();
}
function isValidVariableName(varname) {
    if (varname == "")
        return false;
    if (/[0-9']/.test(varname[0]))
        return false;
    if (/[] !@#$%^&*()-+=.,<>?]/.test(varname)) {
        return false;
    }
    return true;
}
function popupVarMenu(ev) {
    var el = ev.target;
    ev.stopImmediatePropagation();
    var menus = codearea.getElementsByClassName('popup-menu');
    if (menus.length) {
        for (var i=0; i<menus.length; i++)
            codearea.removeChild(menus[i]);
        return;
    }
    var menu = document.createElement("ul");
    menu.classList.add("popup-menu");
    var xy = findOffsetTopLeft(el);
    menu.style.top = (xy.top + el.offsetHeight - codearea.offsetTop - 10) + 'px';
    menu.style.left = xy.left + 'px';
    var vars = [];
    var mustBeMutable = el.parentNode.classList.contains('bind-lhs')
            || el.parentNode.parentNode.classList.contains('bind-lhs');
    if (mustBeMutable)
        findMutableVarsInScope(el, vars, []);
    else
        findVarsInScope(el, vars, []);
    for (var i=0; i<vars.length; i++) {
        var opt = document.createElement('li');
        opt.innerHTML = vars[i];
        opt.addEventListener("click", function(ev) {
            clearPopouts();
            logEvent('change-var-ref', {
                from: el.innerHTML,
                to: ev.target.innerHTML
            });
            el.innerHTML = ev.target.innerHTML;
            codearea.removeChild(menu);
            updateTileIndicator();
            generateCode();
            checkpointSave();
        });
        opt.addEventListener("mouseover", function(ev) {
            highlightVarDefinition(el, ev.target.innerHTML);
        });
        opt.addEventListener("mouseout", function(ev) {
            clearPopouts();
        });
        menu.appendChild(opt);
    }
    if (vars.length == 0) {
        var opt = document.createElement('li');
        opt.innerHTML = '--none--';
        var msg = "There are no reachable variables from this point in the code.";
        if (mustBeMutable)
            msg = "There are no mutable variables reachable from this point in the code.";
        logEvent('open-var-menu', {empty: true});
        opt.title = msg;
        opt.addEventListener("click", function(ev) {
            codearea.removeChild(menu);
            alert(msg);
        });
        menu.appendChild(opt);
    } else {
        logEvent('open-var-menu', {empty: false});
	}
    codearea.appendChild(menu);
    if (menu.offsetLeft + menu.offsetWidth > codearea.offsetWidth) {
        menu.style.left = '';
        menu.style.right = '0px';
    }
    if (menu.offsetTop + menu.offsetHeight - codearea.scrollTop > codearea.offsetHeight) {
        menu.style.top = '';
        menu.style.bottom = (codearea.offsetHeight - xy.top - codearea.offsetTop - 25) + 'px';
    }
}
function switchPane(category) {
    logEvent('switch-pane', {to: category});
	setPane();
	return;
    var tb = document.getElementById("toolbox");
    for (var i=0; i<tb.childNodes.length; i++)
        if (tb.childNodes[i].dataset && tb.childNodes[i].dataset.category
                && tb.childNodes[i].dataset.category != category)
            tb.childNodes[i].style.display = "none";
        else if (tb.childNodes[i].style)
            tb.childNodes[i].style.display = "";
}

var lastList = []; //stupid hack to get around all the switchPane calls
function setPane(list) {
    logEvent('set-pane', list);
	if (list) {
		lastList = list;
	} else {
		list = lastList;
	}
    var tb = document.getElementById("toolbox");
    for (var i=0; i<tb.childNodes.length; i++) {
		var node = tb.childNodes[i];
		if (!node.style) continue;
		var visible = false;
		for (var j=0; j < list.length; j++) {
			visible |= node.dataset && node.dataset.tileName == list[j];
			//visible |= node.classList && node.classList.contains(list[j]);
		}
        node.style.display = visible ? "" : "none";
	}

	var div = document.getElementById("code_help");
	var innerHTML = "<h3 class='pallet'>Code Pallet:</h3>";
	for (var i=0; i < list.length; i++) {
		var method = StandardGrace.methods[list[i]];
		if (currentDialect && currentDialect.methods[list[i]]) {
			method = currentDialect.methods[list[i]];
		}
		if (!method) {
			if (list[i] === "vardec") {
				method = {
					code: "var x := 0",
					description: "Creates a variable with a starting value.",
					returns: "Done"
				};
			} else if (list[i] === "assign") {
				method = {
					code: "x := 0",
					description: "Assigns a variable to a given value.",
					returns: "Done"
				};
			} else if (list[i] === "plus") {
				method = {
					code: "x + y",
					description: "Adds two numbers together.",
					returns: "Number"
				};
			} else if (list[i] === "minus") {
				method = {
					code: "x - y",
					description: "Subtracts one number from another.",
					returns: "Number"
				};
			} else if (list[i] === "greaterthan") {
				method = {
					code: "x > y",
					description: "True if x > y.",
					returns: "Boolean"
				};
			} else if (list[i] === "var") {
				method = {
					code: "x",
					description: "Assigns a variable to a given value.",
					returns: "Number"
				};
			}
		}
		if (method && method.code) {
			innerHTML += "<pre";
			if (method.description) {
				innerHTML += " title='" + method.description + "'";
			}
			if (method.returns !== "Done") {
				innerHTML += " class='returns'";
			}
			innerHTML += ">" + method.code + "</pre>\n";
		}
	}
	div.innerHTML = innerHTML;
}

function attachTileBehaviour(n) {
    n.addEventListener('mousedown', dragstart);
    n.addEventListener('contextmenu', function(ev) {
        ev.preventDefault();
        ev.stopPropagation();
        if (this.classList.contains('var')) {
            drawVarRefLines(this);
            showOverlay();
            return;
        }
        if (this.classList.contains('vardec')) {
            drawVardecLines(this);
            showOverlay();
            return;
        }
        if (this.classList.contains('selfcall')) {
            drawMethodRequestLines(this);
            showOverlay();
            return;
        }
    });
    if (n.classList.contains('vardec')) {
        n.addEventListener('mouseover', function(ev) {
            highlightVarReferences(this);
        });
        n.addEventListener('mouseout', function(ev) {
            clearPopouts();
        });
    }
    if (n.classList.contains('var')) {
        n.addEventListener('mouseover', function(ev) {
            highlightVarDefinition(this);
        });
        n.addEventListener('mouseout', function(ev) {
            clearPopouts();
        });
    }
    if (n.classList.contains('selfcall') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawMethodRequestLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('method') && supportsPointerEvents) {
        var nInput = n.getElementsByTagName('input')[0];
        var nKeyword = n.getElementsByTagName('span')[0];
        nInput.addEventListener('mouseover', function(ev) {
            drawMethodDefinitionLines(n);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        nInput.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
        nKeyword.addEventListener('mouseover', function(ev) {
            drawMethodDefinitionLines(n);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        nKeyword.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('dialect-method') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawDialectRequestLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (n.classList.contains('constant') && supportsPointerEvents) {
        n.addEventListener('mouseover', function(ev) {
            drawConstantLines(this);
            document.getElementById('overlay-canvas').style.display = 'block';
        });
        n.addEventListener('mouseout', function(ev) {
            document.getElementById('overlay-canvas').getContext('2d').clearRect(0, 0, codearea.offsetWidth, codearea.offsetHeight);
            document.getElementById('overlay-canvas').style.display = 'none';
        });
    }
    if (!n.next)
        n.next = false;
    if (!n.prev)
        n.prev = false;
    Array.prototype.forEach.call(n.getElementsByTagName('input'),
            attachInputEvents);
    Array.prototype.forEach.call(n.getElementsByClassName('op'),
            function(el) {
                el.addEventListener('dblclick', function(ev) {
                    if (!this.dataset.operators)
                        return;
                    var cur = this.childNodes[0].data;
                    var ops = this.dataset.operators.split(" ");
                    var nxt = cur;
                    for (var i=0; i<ops.length; i++) {
                        if (cur == ops[i]) {
                            if (i < ops.length - 1)
                                nxt = ops[i + 1];
                            else
                                nxt = ops[0];
                            break;
                        }
                    }
                    logEvent('change-operator', {from: cur, to: nxt});
                    this.removeChild(this.childNodes[0]);
                    this.appendChild(document.createTextNode(nxt));
                    generateCode();
                    checkpointSave();
                });
            });
    Array.prototype.forEach.call(n.getElementsByClassName('cmpop'),
            function(el) {
                el.addEventListener('dblclick', function(ev) {
                    switch(this.innerHTML) {
                        case "==":
                            this.innerHTML = '&lt;';
                            logEvent('change-operator', {from: '==', to: '<'});
                            break;
                        case "&lt;":
                            this.innerHTML = '&gt;'
                            logEvent('change-operator', {from: '<', to: '>'});
                            break;
                        default:
                            logEvent('change-operator', {from: '>', to: '=='});
                            this.innerHTML = '==';
                    }
                    generateCode();
                    checkpointSave();
                });
            });
    Array.prototype.forEach.call(n.getElementsByClassName('parameter-adder'),
            function(el) {
                el.addEventListener('click', parameterAdd);
                el.title = "Add parameter";
            });
    Array.prototype.forEach.call(n.getElementsByClassName('argument-adder'),
            function(el) {
                el.addEventListener('mousedown', argumentAdd);
                el.title = "Add argument";
            });
}
function blinkCoddleInputs(el) {
    // Chrome has unusual ideas of what input sizes mean
    el.style.width = (el.size * 8) + 'px';
}
function attachInputEvents(el) {
    el.addEventListener('mousedown', function(ev) {
        ev.stopPropagation();
    });
    el.addEventListener('keyup', function(ev) {
        this.size = this.value.length + 1;
        coddleBrowser('blink', blinkCoddleInputs, this);
        generateCode();
    });
    el.addEventListener('blur', function(ev) {
        updateTileIndicator();
        this.size = this.value.length > 0 ? this.value.length : 1;
        coddleBrowser('blink', blinkCoddleInputs, this);
        logEvent('change-text-input', {value: this.value});
        generateCode();
        checkpointSave();
    });
    if (el.classList.contains('variable-name')) {
        el.addEventListener('blur', function(ev) {
            renameVar(el.oldName, el.value, el);
            updateTileIndicator();
            el.oldName = el.value;
            generateCode();
            checkpointSave();
        });
    }
}
function addArgumentToRequest(argAdder) {
    if (argAdder.previousSibling.nodeName
            && argAdder.previousSibling.nodeName.toLowerCase() == "input") {
        var lparen = document.createTextNode('(');
        argAdder.parentElement.insertBefore(lparen, argAdder);
        var rparen = document.createTextNode(')');
        argAdder.parentElement.insertBefore(rparen, argAdder.nextSibling);
    }
    if (argAdder.previousSibling.classList
            && argAdder.previousSibling.classList.contains('hole')) {
        var comma = document.createTextNode(', ');
        argAdder.parentElement.insertBefore(comma, argAdder);
    }
    var hole = createHole();
    argAdder.parentElement.insertBefore(hole, argAdder);
    return hole;
}
function argumentAdd(ev) {
    addArgumentToRequest(this);
    logEvent('add-argument', {});
    updateTileIndicator();
    generateCode();
    checkpointSave();
    ev.stopPropagation();
}
function addParameterToMethod(paramAdder, name) {
    if (paramAdder.previousSibling.classList
            && paramAdder.previousSibling.classList.contains('method-name')) {
        var lparen = document.createTextNode('(');
        paramAdder.parentElement.insertBefore(lparen, paramAdder);
        var rparen = document.createTextNode(')');
        paramAdder.parentElement.insertBefore(rparen, paramAdder.nextSibling);
    }
    if (paramAdder.previousSibling.classList
            && paramAdder.previousSibling.classList.contains('variable-name')) {
        var comma = document.createTextNode(', ');
        paramAdder.parentElement.insertBefore(comma, paramAdder);
    }
    var newParam = document.createElement('input');
    newParam.type = "text";
    newParam.size = 1;
    newParam.classList.add("variable-name");
    paramAdder.parentElement.insertBefore(newParam, paramAdder);
    newParam.value = name;
    attachInputEvents(newParam);
    newParam.addEventListener('blur', parameterRemove);
    return newParam;
}
function parameterRemove(ev) {
    if (this.value != "")
        return;
    logEvent('remove-parameter', {});
    if (this.previousSibling.nodeType == Node.TEXT_NODE
            && this.previousSibling.data[0] == ",") {
        this.parentNode.removeChild(this.previousSibling);
    } else if (this.nextSibling.nodeType == Node.TEXT_NODE
            && this.nextSibling.data[0] == ",") {
        this.parentNode.removeChild(this.nextSibling);
    }
    if (this.previousSibling.nodeType == Node.TEXT_NODE
            && this.previousSibling.data == '('
            && this.nextSibling.classList
            && this.nextSibling.classList.contains('parameter-adder')) {
        this.previousSibling.remove();
        this.nextSibling.nextSibling.remove();
    }
    this.parentNode.removeChild(this);
    updateTileIndicator();
    generateCode();
    checkpointSave();
}
function parameterAdd(ev) {
    var newParam = addParameterToMethod(this, "");
    newParam.focus();
    var name = this.getElementsByClassName('method-name')[0].innerHTML;
    logEvent('add-parameter', {method: name});
}
function attachHoleBehaviour(n) {
    n.addEventListener('mouseup', holedrop);
    n.addEventListener('mousemove', function(){alert("entering");});
}
function attachToolboxBehaviour(n) {
    n.addEventListener('mousedown', function(ev) {
        if (dragging) return;
        var cl = this.cloneNode(true);
        if (!cl.dataset) {
            cl.dataset = {};
            for (var k in this.dataset)
                cl.dataset[k] = this.dataset[k];
        }
        codearea.appendChild(cl);
        cl.style.position = 'absolute';
        var offset = $(toolbox).offset();
        cl.style.top = (this.offsetTop - toolbox.scrollTop + codearea.scrollTop) + 'px';
        cl.style.left = codearea.offsetWidth + 'px';
        attachTileBehaviour(cl);
        logEvent('new-tile', {type: n.className});
        dragstart.call(cl, ev);
    });
}
function go() {
    var view = codearea.classList.contains('shrink') ? 'text' : 'tiled';
    if (!codearea.classList.contains('shrink')) {
        if (highlightTileErrors()) {
            var tmp = [];
            findErroneousTiles(tmp);
            logEvent('failed-run-attempt', {errors: tmp, view: view});
            return;
        }
    }
    logEvent('run-attempt', {view: view});
    generateCode();
    document.getElementById('stderr_txt').value = "";
    document.getElementById('stdout_txt').value = "";
    minigrace.modname = "main";
    minigrace.compilerun(getCode());
    if (minigrace.compileError)
        logEvent('compile-error', {code: getCode(), view: view});
}
var theBrowser = 'unknown';
if (navigator.userAgent.search('Chrome') != -1) {
    theBrowser = 'blink';
} else if (navigator.userAgent.search('Gecko') != -1) {
    theBrowser = 'gecko';
}
function coddleBrowser(browser, func, arg) {
    if (theBrowser == browser)
        func(arg);
}
