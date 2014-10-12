import "dom" as dom
import "mgcollections" as collections
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.methods

var document
var sprite
var initialized := false
var whiles := collections.map.new
var counts := collections.map.new

method goToX(x)Y(y) {
    initialize
    sprite.goTo(x, y)
}

method pickRandom(min)To(max) {
    initialize
    return sprite.pickRandom(min, max)
}

method turnAround {
    initialize
    sprite.turnAround
}

method say(text) {
    initialize
    sprite.say(text)
}

method clear {
    initialize
    sprite.clear
}

method penDown {
    initialize
    sprite.penDown
}

method penUp {
    initialize
    sprite.penUp
}

method every(t)do(m) {
    initialize
    if (whiles.contains(m)) then {
        whiles.remove(m)
        counts.remove(m)
    }
    whiles.put(m, t)
    counts.put(m, t)
    m.apply
}

method initialize {
    if (initialized) then {
        return false
    }
    document := dom.document
    initialized := true
    sprite := document.getElementById("sprite")
    
    def wait = 10
    dom.while {true} waiting (wait) do {
        for (counts) do { kvp ->
            kvp.value -= wait
            if (kvp.value < 0) then {
                kvp.key.apply
                kvp.value += whiles.get(kvp.key)
            }
        }
    }
}

initialize
