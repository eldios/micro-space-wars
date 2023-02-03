input.onButtonPressed(Button.A, function () {
    if (gameMode == 1) {
        shownID += -1
        if (shownID <= -1) {
            shownID = ID_images.length - 1
        }
        showCode()
    }
})
function die () {
    gameMode = -1
    basic.showIcon(IconNames.Skull)
}
function shoot () {
    if (remainingAttemtps > 0) {
        radio.sendNumber(shownID)
        remainingAttemtps += -1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # . # .
            . . # . .
            . . . . .
            `)
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    showCode()
}
input.onButtonPressed(Button.AB, function () {
    if (gameMode == 0) {
        gameMode = 1
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        shownID = randint(0, ID_images.length - 1)
        showCode()
    } else if (gameMode == 1) {
        shoot()
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameMode == 1) {
        shownID += 1
        if (shownID >= ID_images.length) {
            shownID = 0
        }
        showCode()
    }
})
input.onGesture(Gesture.Shake, function () {
    tmpID = shownID
    shownID = myID
    showCode()
    basic.pause(3000)
    if (gameMode == -1) {
        basic.showIcon(IconNames.Skull)
    } else {
        shownID = tmpID
        showCode()
    }
})
function showCode () {
    ID_images[shownID].showImage(0)
}
radio.onReceivedNumberDeprecated(function (targetID) {
    if (targetID == myID) {
        die()
    }
})
function initIDImages () {
    ID_images = [
    images.createImage(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `),
    images.createImage(`
        . . . . .
        . # # # .
        . # . # .
        . # # # .
        . . . . .
        `),
    images.createImage(`
        # # # # #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `),
    images.createImage(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `),
    images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `),
    images.createImage(`
        # . . . #
        . # # # .
        . # # # .
        . # # # .
        # . . . #
        `),
    images.createImage(`
        # . # . #
        . # # # .
        . . # . .
        . # . # .
        # . . . #
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `),
    images.createImage(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        # . # . #
        `),
    images.createImage(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `),
    images.createImage(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `),
    images.createImage(`
        . . # . .
        . # # # .
        # # # # #
        . . # . .
        . . # . .
        `),
    images.createImage(`
        . . # . .
        . . # . .
        # # # # #
        . # # # .
        . . # . .
        `),
    images.createImage(`
        . . # . .
        . # # . .
        # # # # #
        . # # . .
        . . # . .
        `),
    images.createImage(`
        . . # . .
        . . # # .
        # # # # #
        . . # # .
        . . # . .
        `),
    images.createImage(`
        # # . # #
        # . . . #
        . . # . .
        # . . . #
        # # . # #
        `),
    images.createImage(`
        . . # . .
        . # # # .
        # # . # #
        . # # # .
        . . # . .
        `)
    ]
}
let tmpID = 0
let gameMode = 0
let remainingAttemtps = 0
let shownID = 0
let ID_images: Image[] = []
let myID = 0
radio.setGroup(111)
initIDImages()
myID = randint(0, ID_images.length - 1)
shownID = myID
showCode()
remainingAttemtps = 4
gameMode = 0
