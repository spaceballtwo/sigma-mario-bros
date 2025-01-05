scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.setVelocity(0, 0)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    mySprite.setVelocity(0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile4`, function (sprite, location) {
    tiles.setCurrentTilemap(tilemap`level3`)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`transparency16`, function (sprite, location) {
    if (jumping == 0) {
        mySprite.setVelocity(0, 50)
    }
})
let jumping = 0
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
    } else {
    	
    }
})
