input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    finch.startFinch()
    for (let index = 0; index < 4; index++) {
        finch.setMove(MoveDir.Forward, 10, 50)
        finch.setTurn(RLDir.Right, 90, 50)
    }
    finch.stopMotors()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    finch.startFinch()
    finch.startMotors(25, 50)
    basic.pause(5000)
    finch.stopMotors()
})
