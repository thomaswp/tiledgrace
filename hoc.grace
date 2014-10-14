import "dom" as dom
import "mgcollections" as collections
import "StandardPrelude" as StandardPrelude
inherits StandardPrelude.methods

var document
var sprite
var initialized := false
var foreverBlocks := collections.list.new
var clickedBlocks := collections.list.new
var delay := 0
var running := true
var clicked := false

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

method doClick {
    clicked := true
}

method whenClicked(m) {
    clickedBlocks.push(m)
}

method wait(t) {
    delay := t * 1000
}

method forever(m) {
    if (foreverBlocks.size > 0) then {
        foreverBlocks.pop
    }
    foreverBlocks.push(m)
    delay := 0
}

method initialize {
    if (initialized) then {
        return false
    }
    document := dom.document
    initialized := true
    sprite := document.getElementById("sprite")
    
    def tick = 5
    dom.while {running} waiting (tick) do {
        delay := delay - tick
        if (delay <= 0) then {
            for (foreverBlocks) do { step ->
                step.apply
            }
        }
        if (clicked) then {
            for (clickedBlocks) do { step ->
                step.apply
            }
        }
        clicked := false
    }
}

method stop {
    running := false
}
