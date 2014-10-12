dialect "hoc"

var score := 0
var maxScore := 0
var delay := 2
whenClicked {
    say ("")
    score := score + 11
    if (score > maxScore) then {
        maxScore := score
    }
    if (delay > 0.1) then {
        delay := delay - 0.1
    }
    forever {
        goToX (pickRandom (-130) To (130)) Y (pickRandom (-130) To (130))
        turnAround
        score := score - 1
        wait (delay)
    }
}
goToX (-190) Y (130)
say ("Welcome to the hour of code")

// chunks: 186px,147px