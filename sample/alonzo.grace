dialect "hoc"

var delay := 2
var score := 0
var maxScore := 0
whenClicked {
    say ""
    delay := delay - 0.1
    score := score + 10
    if (maxScore < score) then {
        maxScore := score
        clear
    }
    forever {
        goToX( pickRandom (-190) To (190) ) Y ( pickRandom (-130) To (130) )
        turnAround
        if (score > 0) then {
            score := score - 1
        }
        wait (delay)
    }
}

goToX (-190) Y (130)
say ("Welcome to the hour of code")
penDown