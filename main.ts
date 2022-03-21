basic.forever(function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(500)
    basic.showLeds(`
        # # # . .
        # . . # .
        # # # . .
        # . . # .
        # # # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # # .
        # . . . .
        # # # . .
        # . . . .
        # # # # .
        `)
    basic.pause(200)
    basic.showLeds(`
        # . . # .
        # . . # .
        # # # # .
        # . . # .
        # . . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(200)
    basic.showLeds(`
        # . . # .
        # # . # .
        # # # # .
        # . # # .
        # . . # .
        `)
    basic.pause(200)
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # . . # .
        # # # . .
        `)
    basic.pause(600)
    basic.showString("YOU")
})
