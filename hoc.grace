import "dom" as dom
import "mgcollections" as collections
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.methods

var document
var sprite
var initialized := false

method goToX(x)Y(y) {
    initialize
    sprite.goTo(x, y)
}

method pickRandomBetween(min)And(max) {
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

method initialize {
    if (initialized) then {
        return false
    }
    document := dom.document
    initialized := true
    sprite := document.getElementById("sprite")
}
