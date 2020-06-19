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
function start_level (num: number) {
    info.changeScoreBy(1)
    tiles.placeOnRandomTile(kitty_kat, sprites.dungeon.stairLadder)
    scene.cameraFollowSprite(kitty_kat)
    info.startCountdown(num)
    kitty_kat.setFlag(SpriteFlag.Ghost, false)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    sprite.setFlag(SpriteFlag.Ghost, true)
    if (info.score() > 1) {
        game.over(true, effects.confetti)
    } else {
        sprite.say("Next Level", 500)
        tiles.setTilemap(tiles.createTilemap(
            hex`12001200090c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0a070101010101010d0101010101010101010b070402010101010d0d0d0d0101010101010b0702020d020202020202020202020d0d030b070102010201010d0d0d0d0101020d01020b0701020d020101020202020d01020d02020b0701020d020101020d01020d01020d02020b0701020d020d01020d02020d010202020d0b07010201020d01020102010d01010d010d0b07010201020d0d020d02010d020202010d0b070d020d020201020102010d020d02010d0b070d020d0d0202020d02010d020d02010d0b070d0202010d0d0d01020202020d0202020b070d010202020101010101010d0d020d020b070d0101010202020202020202020201020b0702020d0101010d0101010d0d010101020b07010202020202020202020202020202020b080505050505050505050505050505050506`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . 2 . . . . . . . . . . 2 2 . 2 
2 2 . 2 . 2 2 2 2 2 2 2 2 . 2 2 . 2 
2 2 . 2 . 2 2 . . . . 2 2 . 2 . . 2 
2 2 . 2 . 2 2 . 2 . . 2 2 . 2 . . 2 
2 2 . 2 . 2 2 . 2 . . 2 2 . . . 2 2 
2 2 . 2 . 2 2 . 2 . 2 2 2 2 2 2 2 2 
2 2 . 2 . 2 2 . 2 . 2 2 . . . 2 2 2 
2 2 . 2 . . 2 . 2 . 2 2 . 2 . 2 2 2 
2 2 . 2 2 . . . 2 . 2 2 . 2 . 2 2 2 
2 2 . . 2 2 2 2 2 . . . . 2 . . . 2 
2 2 2 . . . 2 2 2 2 2 2 2 2 . 2 . 2 
2 2 2 2 2 . . . . . . . . . . 2 . 2 
2 . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.builtin.forestTiles23,sprites.castle.tilePath5,sprites.dungeon.collectibleInsignia,sprites.dungeon.stairLadder,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.builtin.forestTiles0],
            TileScale.Sixteen
        ))
        start_level(50)
    }
})
let kitty_kat: Sprite = null
kitty_kat = sprites.create(img`
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
            hex`12001200090c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0c0a07010101010101020101010101010101010b07040201010101020202020101010101010b07020202020101020201020101010202030b07010101020101020202020101010201010b07010102020101020102020201010201020b07010102010101020201010201010201020b07010102020201010202010201010201020b07010101010201010102010201010201020b07010101020202020202010201020201020b07020202020101010102010201020101020b07020102020201020202010202020101020b07020101010202020101010102020101020b07020101010101010101010102020202020b07020101010101010101010101010101010b07020202010101020101010101010101010b07010102020202020101010101010101010b080505050505050505050505050505050506`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 2 2 2 
2 . . 2 2 2 2 . . . . 2 2 2 2 2 2 2 
2 . . . . 2 2 . . 2 . 2 2 2 . . . 2 
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
info.setScore(0)
start_level(30)
