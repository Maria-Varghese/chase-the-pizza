sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
let pizza: Sprite = null
scene.setBackgroundColor(13)
let mySprite = sprites.create(img`
    . . . . f f f f f f f f . . . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 f f 5 5 5 5 f f 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
    f 5 5 5 5 f f f f f f 5 5 5 5 f 
    f 5 5 5 f f c c c c f f 5 5 5 f 
    f 5 5 5 5 f b b b b f 5 5 5 5 f 
    f 5 5 5 5 f b b b b f 5 5 5 5 f 
    . f 5 5 5 5 f f f f 5 5 5 5 f . 
    . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . . f f f f f f f f f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . . . b 4 4 4 b . . . . . 
    . . . . . b b b 4 4 4 b . . . . 
    . . . . b b 4 b b b 4 4 b . . . 
    . . . . b 4 5 5 5 4 b 4 4 b . . 
    . . . b d 2 2 2 5 5 4 e 4 4 b . 
    . . b b 4 2 2 2 5 7 5 4 e 4 4 e 
    . . d d 5 2 2 2 5 5 5 5 e e e e 
    . . b 4 7 5 5 5 2 2 2 5 5 e e e 
    . b d 5 5 5 5 5 2 2 2 5 5 4 e e 
    . b 2 2 2 5 7 5 2 2 2 5 4 d e 4 
    b d 2 2 2 5 5 5 5 5 5 4 d e 4 . 
    b 4 2 2 2 5 5 4 4 4 4 d d . . . 
    d 5 5 5 5 4 4 4 4 4 d . . . . . 
    4 4 4 4 4 4 d . . . . . . . . . 
    4 4 4 d . . . . . . . . . . . . 
    `, SpriteKind.Food)
