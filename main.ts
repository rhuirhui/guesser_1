input.onButtonPressed(Button.A, function () {
    basic.showLeds(`
        # # # # .
        # . . . .
        # . # # .
        # . . # .
        # # # # .
        `)
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
})
radio.setGroup(1)
radio.sendNumber(0)
basic.forever(function () {
	
})
