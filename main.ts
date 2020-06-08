namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    game.over(true, effects.confetti)
})
let kitty_kat = sprites.create(img`
. . . . . . . . . . . . . . 
e e e . . . . e e e . . . . 
c d d c . . c d d c . . . . 
c b d d f f d d b c . . . . 
c 3 b d d b d b 3 c . . . . 
f b 3 d d d d 3 b f . . . . 
e d d d d d d d d e . . . . 
e d f d d d d f d e b f b . 
f d d f d d f d d f f d f . 
f b d d b b d d 2 b f d f . 
. f 2 2 2 2 2 2 d b d b f . 
. f d d d d d d d f f f . . 
. f d b d f f f d f . . . . 
. . f f f f . . f f . . . . 
`, SpriteKind.Player)
controller.moveSprite(kitty_kat)
tiles.setTilemap(tiles.createTilemap(
            hex`12001200090c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0a07010101010101020101010101010101010b07040201010101020202020101010101010b07020202020101020101020101010202030b07010101020101020202020101010201010b07010102020101020102020201010201020b07010102010101020201010201010201020b07010102020201010202010201010201020b07010101010201010102010201010201020b07010101020202020202010201020201020b07020202020101010102010201020101020b07020102020201020202010202020101020b07020101010202020101010102020101020b07020101010101010101010102020202020b07020101010101010101010101010101010b07020202010101020101010101010101010b07010102020202020101010101010101010b080505050505050505050505050505050506`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 . . . . 2 2 2 2 2 2 2 
2 . . . . 2 2 . 2 2 . 2 2 2 . . . 2 
2 2 2 2 . 2 2 . . . . 2 2 2 . 2 2 2 
2 2 2 . . 2 2 . 2 . . . 2 2 . 2 . 2 
2 2 2 . 2 2 2 . . 2 2 . 2 2 . 2 . 2 
2 2 2 . . . 2 2 . . 2 . 2 2 . 2 . 2 
2 2 2 2 2 . 2 2 2 . 2 . 2 2 . 2 . 2 
2 2 2 2 . . . . . . 2 . 2 . . 2 . 2 
2 . . . . 2 2 2 2 . 2 . 2 . 2 2 . 2 
2 . 2 . . . 2 . . . 2 . . . 2 2 . 2 
2 . 2 2 2 . . . 2 2 2 2 . . 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 . . . . . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 2 2 . . . . . 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles23,sprites.castle.tilePath5,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1],
            TileScale.Sixteen
        ))
tiles.placeOnRandomTile(kitty_kat, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(kitty_kat)
info.startCountdown(20)
