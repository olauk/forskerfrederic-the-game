namespace SpriteKind {
    export const Kolbe = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Kolbe, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 1 1 9 9 9 . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . 9 9 1 1 1 1 9 9 . . . . 
        . . . 9 9 9 9 9 1 1 9 9 9 . . . 
        . 9 9 9 9 1 1 1 1 1 1 1 9 9 . . 
        . 9 1 9 9 9 9 1 1 1 1 1 1 9 9 . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 9 . 
        . 9 9 1 1 1 1 1 1 1 1 1 1 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(6)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 1 1 9 9 9 . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . 9 9 1 1 1 1 9 9 . . . . 
        . . . 9 9 9 9 9 1 1 9 9 9 . . . 
        . 9 9 9 9 1 1 1 1 1 1 1 9 9 . . 
        . 9 1 9 9 9 9 1 1 1 1 1 1 9 9 . 
        . 9 3 3 3 3 3 3 3 3 3 3 3 9 9 . 
        . 9 9 3 3 3 3 3 3 3 3 3 3 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(4)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 1 1 9 9 9 . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . 9 9 1 1 1 1 9 9 . . . . 
        . . . 9 9 9 9 9 1 1 9 9 9 . . . 
        . 9 9 9 9 3 2 2 2 3 3 3 9 9 . . 
        . 9 3 9 9 9 9 2 2 2 3 3 3 9 9 . 
        . 9 3 3 2 2 2 2 2 2 2 3 3 9 9 . 
        . 9 9 3 3 3 3 3 3 3 3 3 3 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(2)
    } else if (otherSprite.image.equals(img`
        . . 3 . . 3 3 . 3 . 3 3 3 . 3 . 
        . . . . 3 3 3 3 3 3 3 . 3 . . . 
        . . 3 . . . 3 3 3 3 . . . . 3 . 
        . . . . 9 9 9 3 3 9 9 9 . 3 . . 
        . 3 . . 9 9 9 3 3 9 9 9 . . . . 
        . . . . 9 9 9 3 3 9 9 9 . . 3 . 
        . . . . . 9 9 2 2 9 9 . . . . . 
        . . . . . 9 9 2 2 9 9 . . . . . 
        . . . . 9 9 2 2 2 2 9 9 . . . . 
        . . . 9 9 9 9 9 2 2 9 9 9 . . . 
        . 9 9 9 9 2 2 2 2 2 2 9 9 9 . . 
        . 9 2 9 9 9 9 2 2 2 2 2 2 9 9 . 
        . 9 2 2 2 2 2 2 2 2 2 2 2 9 9 . 
        . 9 9 2 2 2 2 2 2 2 2 2 2 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeLifeBy(-1)
    }
    otherSprite.destroy()
})
sprites.onCreated(SpriteKind.Kolbe, function (sprite) {
    sprite_list.push(sprite)
    sprite_time.push(game.runtime())
})
function plasserKolbe () {
    koble = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 9 9 9 9 9 . . . . 
        . . . . 9 9 9 1 1 9 9 9 . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . . 9 9 1 1 9 9 . . . . . 
        . . . . 9 9 1 1 1 1 9 9 . . . . 
        . . . 9 9 9 9 9 1 1 9 9 9 . . . 
        . 9 9 9 9 1 1 1 1 1 1 1 9 9 . . 
        . 9 1 9 9 9 9 1 1 1 1 1 1 9 9 . 
        . 9 1 1 1 1 1 1 1 1 1 1 1 9 9 . 
        . 9 9 1 1 1 1 1 1 1 1 1 1 9 9 . 
        . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Kolbe)
    tiles.placeOnRandomTile(koble, assets.tile`tile2`)
}
let rate = 0
let koble: Sprite = null
let sprite_time: number[] = []
let sprite_list: Sprite[] = []
sprite_list = sprites.allOfKind(SpriteKind.Kolbe)
sprite_time = []
scene.setBackgroundColor(12)
game.splash("ForskerFrederic", "The game")
game.splash("Hjelp ForskerFrederic å rydde", "Samle kolbene før det renner over")
tiles.setTilemap(tilemap`level1`)
let forskerFrederic = sprites.create(img`
    . . . . . . f f f f f . . . . . 
    . . . . f f f d f f f f . . . . 
    . . . . f f d d d f f f . . . . 
    . . . . . f 9 9 9 9 f f . . . . 
    . . . . . d 9 d 9 d . . . . . . 
    . . . . . . d d d . . . . . . . 
    . . . . 1 1 4 f 4 1 1 . . . . . 
    . . . 1 1 1 4 4 4 1 1 1 . . . . 
    . . . 1 . 1 4 f 4 1 . 1 . . . . 
    . . d 1 . 1 1 f 1 1 . 1 d . . . 
    . . . . . 1 1 f 1 1 . . . . . . 
    . . . . 1 1 1 f 1 1 1 . . . . . 
    . . . . 1 1 f f f 1 1 . . . . . 
    . . . . 1 1 f . f 1 1 1 . . . . 
    . . . . . f f . f f . . . . . . 
    . . . . . f f . f f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(forskerFrederic)
scene.cameraFollowSprite(forskerFrederic)
info.setLife(3)
for (let index = 0; index < 5; index++) {
    plasserKolbe()
}
game.onUpdate(function () {
    rate = 0
    if (game.runtime() < 20000) {
        rate = 10000
    } else if (game.runtime() < 40000) {
        rate = 8000
    } else if (game.runtime() < 60000) {
        rate = 6000
    } else {
        rate = 4000
    }
    for (let index = 0; index <= sprite_list.length - 1; index++) {
        if (game.runtime() - sprite_time[index] < rate / 4) {
            sprite_list[index].setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 9 9 9 9 9 . . . . 
                . . . . 9 9 9 9 9 9 9 9 . . . . 
                . . . . 9 9 9 1 1 9 9 9 . . . . 
                . . . . . 9 9 1 1 9 9 . . . . . 
                . . . . . 9 9 1 1 9 9 . . . . . 
                . . . . 9 9 1 1 1 1 9 9 . . . . 
                . . . 9 9 9 9 9 1 1 9 9 9 . . . 
                . 9 9 9 9 1 1 1 1 1 1 1 9 9 . . 
                . 9 1 9 9 9 9 1 1 1 1 1 1 9 9 . 
                . 9 1 1 1 1 1 1 1 1 1 1 1 9 9 . 
                . 9 9 1 1 1 1 1 1 1 1 1 1 9 9 . 
                . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (game.runtime() - sprite_time[index] < rate / 2) {
            sprite_list[index].setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 9 9 9 9 9 . . . . 
                . . . . 9 9 9 9 9 9 9 9 . . . . 
                . . . . 9 9 9 1 1 9 9 9 . . . . 
                . . . . . 9 9 1 1 9 9 . . . . . 
                . . . . . 9 9 1 1 9 9 . . . . . 
                . . . . 9 9 1 1 1 1 9 9 . . . . 
                . . . 9 9 9 9 9 1 1 9 9 9 . . . 
                . 9 9 9 9 1 1 1 1 1 1 1 9 9 . . 
                . 9 1 9 9 9 9 1 1 1 1 1 1 9 9 . 
                . 9 3 3 3 3 3 3 3 3 3 3 3 9 9 . 
                . 9 9 3 3 3 3 3 3 3 3 3 3 9 9 . 
                . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else if (game.runtime() - sprite_time[index] < rate) {
            sprite_list[index].setImage(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . 9 9 9 9 9 9 9 9 . . . . 
                . . . . 9 9 9 9 9 9 9 9 . . . . 
                . . . . 9 9 9 1 1 9 9 9 . . . . 
                . . . . . 9 9 1 1 9 9 . . . . . 
                . . . . . 9 9 1 1 9 9 . . . . . 
                . . . . 9 9 1 1 1 1 9 9 . . . . 
                . . . 9 9 9 9 9 1 1 9 9 9 . . . 
                . 9 9 9 9 3 2 2 2 3 3 3 9 9 . . 
                . 9 3 9 9 9 9 2 2 2 3 3 3 9 9 . 
                . 9 3 3 2 2 2 2 2 2 2 3 3 9 9 . 
                . 9 9 3 3 3 3 3 3 3 3 3 3 9 9 . 
                . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                . . . . . . . . . . . . . . . . 
                `)
        } else {
            sprite_list[index].setImage(img`
                . . 3 . . 3 3 . 3 . 3 3 3 . 3 . 
                . . . . 3 3 3 3 3 3 3 . 3 . . . 
                . . 3 . . . 3 3 3 3 . . . . 3 . 
                . . . . 9 9 9 3 3 9 9 9 . 3 . . 
                . 3 . . 9 9 9 3 3 9 9 9 . . . . 
                . . . . 9 9 9 3 3 9 9 9 . . 3 . 
                . . . . . 9 9 2 2 9 9 . . . . . 
                . . . . . 9 9 2 2 9 9 . . . . . 
                . . . . 9 9 2 2 2 2 9 9 . . . . 
                . . . 9 9 9 9 9 2 2 9 9 9 . . . 
                . 9 9 9 9 2 2 2 2 2 2 9 9 9 . . 
                . 9 2 9 9 9 9 2 2 2 2 2 2 9 9 . 
                . 9 2 2 2 2 2 2 2 2 2 2 2 9 9 . 
                . 9 9 2 2 2 2 2 2 2 2 2 2 9 9 . 
                . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
                . . . . . . . . . . . . . . . . 
                `)
        }
    }
})
game.onUpdate(function () {
    forskerFrederic.setImage(img`
        . . . . . . f f f f f . . . . . 
        . . . . f f f d f f f f . . . . 
        . . . . f f d d d f f f . . . . 
        . . . . . f 9 9 9 9 f f . . . . 
        . . . . . d 9 d 9 d . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . . 1 1 4 f 4 1 1 . . . . . 
        . . . 1 1 1 4 4 4 1 1 1 . . . . 
        . . . 1 . 1 4 f 4 1 . 1 . . . . 
        . . d 1 . 1 1 f 1 1 . 1 d . . . 
        . . . . . 1 1 f 1 1 . . . . . . 
        . . . . 1 1 1 f 1 1 1 . . . . . 
        . . . . 1 1 f f f 1 1 . . . . . 
        . . . . 1 1 f . f 1 1 1 . . . . 
        . . . . . f f . f f . . . . . . 
        . . . . . f f . f f . . . . . . 
        `)
    if (forskerFrederic.vx > 0) {
        forskerFrederic.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . f f f d f f f f . . . . 
            . . . . f f d d d f f f . . . . 
            . . . . . f 9 9 9 9 f f . . . . 
            . . . . . d 9 d 9 d . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . 1 1 4 f 4 1 1 . . . . . 
            . . . 1 1 1 4 4 4 1 1 1 . . . . 
            . . . 1 . 1 4 f 4 1 . 1 . . . . 
            . . d 1 . 1 1 f 1 1 . 1 d . . . 
            . . . . 1 1 1 f 1 . . . . . . . 
            . . . 1 1 1 1 f 1 . . . . . . . 
            . . . 1 1 1 f f f . . . . . . . 
            . . 1 1 1 1 f . f . . . . . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . f f . f f . . . . . . 
            `)
    } else if (forskerFrederic.vx < 0) {
        forskerFrederic.setImage(img`
            . . . . . . f f f f f . . . . . 
            . . . . f f f d f f f f . . . . 
            . . . . f f d d d f f f . . . . 
            . . . . . f 9 9 9 9 f f . . . . 
            . . . . . d 9 d 9 d . . . . . . 
            . . . . . . d d d . . . . . . . 
            . . . . 1 1 4 f 4 1 1 . . . . . 
            . . . 1 1 1 4 4 4 1 1 1 . . . . 
            . . . 1 . 1 4 f 4 1 . 1 . . . . 
            . . d 1 . 1 1 f 1 1 . 1 d . . . 
            . . . . . . 1 f 1 1 1 . . . . . 
            . . . . . . 1 f 1 1 1 1 . . . . 
            . . . . . . f f f 1 1 1 . . . . 
            . . . . . . f . f 1 1 1 1 . . . 
            . . . . . f f . f f . . . . . . 
            . . . . . f f . f f . . . . . . 
            `)
    }
})
game.onUpdateInterval(2000, function () {
    for (let index = 0; index < randint(0, 3); index++) {
        plasserKolbe()
    }
})
