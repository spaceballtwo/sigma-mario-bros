scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile6`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level8`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
    info.startCountdown(300)
    level = 3
    info.changeLifeBy(1)
    mysprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f f e e e e e e f f . . . 
        . . f f e e f e e f e e f f . . 
        . . f e e e 1 e e 1 e e e f . . 
        . . f f e e e e e e e e f f . . 
        . . . f f e e e e e e f f . . . 
        . . . . f f e e e e f f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f f e e e e e e f f . . . 
        . . f f e e e e e e e e f f . . 
        . . f e e e f f f f e e e f . . 
        . . f e e f f . . f f e e f . . 
        . . f f f f . . . . f f f f . . 
        `, SpriteKind.Player)
    tiles.placeOnTile(mysprite2, tiles.getTileLocation(13, 13))
    mysprite2.setVelocity(-50, 0)
    statusbar = statusbars.create(20, 4, StatusBarKind.Health)
    statusbar.attachToSprite(mysprite2)
    statusbar.value = 100
    statusbar.max = 100
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . 2 4 4 4 4 4 2 . . . . . 
        . . . . 2 4 5 5 5 4 2 . . . . . 
        . . . . 2 4 5 5 5 4 2 . . . . . 
        . . . . 2 4 5 5 5 4 2 . . . . . 
        . . . . 2 4 4 4 4 4 2 . . . . . 
        . . . . . 2 2 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 50, 0)
    pause(500)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mySprite.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 60))
    info.startCountdown(200)
    level = 2
    info.changeLifeBy(1)
})
info.onCountdownEnd(function () {
    info.changeLifeBy(-1)
    if (level == 1) {
        info.startCountdown(300)
        tiles.setCurrentTilemap(tilemap`level2`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
    }
    if (level == 2) {
        tiles.setCurrentTilemap(tilemap`level3`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 60))
        info.startCountdown(200)
    }
})
info.onLifeZero(function () {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (jumping == 0) {
        mySprite.setVelocity(0, 50)
    }
})
let jumping = 0
let projectile: Sprite = null
let statusbar: StatusBarSprite = null
let mysprite2: Sprite = null
let level = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . e . . . . . . . . . 
    . . . . . e e e . . . . . . . . 
    . . . . e e e e e . . . . . . . 
    . . . e e e e e e e . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . . . . 7 f f 7 . . . . . . . . 
    . . . . 7 7 7 7 . . . . . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . 8 8 8 8 8 8 8 8 8 8 8 . . . . 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . . 8 8 8 8 . . . . . . . . 
    . . . 8 8 8 8 8 8 . . . . . . . 
    . . . 8 8 8 8 8 8 . . . . . . . 
    . . . 8 8 . . 8 8 . . . . . . . 
    . . . 8 8 . . 8 8 . . . . . . . 
    . . . 8 8 . . 8 8 . . . . . . . 
    `, SpriteKind.Player)
tiles.setCurrentTilemap(tilemap`level2`)
tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
scene.setBackgroundColor(9)
controller.moveSprite(mySprite, 100, 0)
scene.cameraFollowSprite(mySprite)
game.showLongText("use wasd to move", DialogLayout.Top)
info.startCountdown(300)
info.setLife(3)
level = 1
music.play(music.stringPlayable("C D C F D E C - ", 200), music.PlaybackMode.LoopingInBackground)
forever(function () {
    if (jumping == 1) {
        mySprite.setVelocity(0, -50)
        pause(1000)
        mySprite.setVelocity(0, 50)
        jumping = 0
    }
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`transparency16`)) {
    	
    } else {
        if (controller.A.isPressed()) {
            jumping = 1
        }
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
        if (controller.A.isPressed()) {
            jumping = 0
        }
    }
    if (mySprite.tileKindAt(TileDirection.Bottom, assets.tile`myTile2`)) {
        info.changeLifeBy(-1)
        if (level == 1) {
            tiles.setCurrentTilemap(tilemap`level2`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
            info.startCountdown(300)
        }
        if (level == 2) {
            tiles.setCurrentTilemap(tilemap`level3`)
            tiles.placeOnTile(mySprite, tiles.getTileLocation(4, 60))
            info.startCountdown(200)
        }
    }
    if (level == 3) {
        tiles.setCurrentTilemap(tilemap`level8`)
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 12))
        info.startCountdown(300)
    }
    if (mysprite2 && (projectile && mysprite2.overlapsWith(projectile))) {
        statusbar.value += -50
    }
})
