namespace SpriteKind {
    export const Football = SpriteKind.create()
    export const Goal = SpriteKind.create()
    export const Obstacle = SpriteKind.create()
}

controller.B.onEvent(ControllerButtonEvent.Pressed, function on_b_pressed() {
    myDart.stopDart()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function on_a_pressed() {
    myDart.throwDart()
})
sprites.onOverlap(SpriteKind.Football, SpriteKind.Obstacle, function on_on_overlap(sprite: Sprite, otherSprite: Sprite) {
    game.splash("It was an interception")
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Football, SpriteKind.Goal, function on_on_overlap2(sprite2: Sprite, otherSprite2: Sprite) {
    game.splash("Goal!!")
    game.gameOver(true)
})
let mySprite2 : Sprite = null
let myDart : Dart = null
let question = game.askForString("")
myDart = darts.create(img`
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . e e e e e e e . . . . . . 
            . . e 1 e 1 e 1 e 1 e . . . . . 
            . . . e e e e e e e . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    `, SpriteKind.Football)
myDart.setTrace()
myDart.controlWithArrowKeys()
let mySprite = sprites.create(img`
        .............cc.
            ............cbbc
            ............cbbc
            ...........bdcc.
            ...........bdbb.
            ..........bddc..
            ..........bdbb..
            .........bddc...
            .........bdbb...
            ........bddc....
            ........bdbb....
            .......bddc.....
            .......bdbb.....
            ......bddc......
            ......bdbb......
            .....bddc.......
            .....bdbb.......
            ....bddc........
            ....bdbb........
            ...bddc.........
            ...bdbb.........
            ..bddc..........
            ..bdbb..........
            .bddc...........
            .bdbb...........
            b1dc............
            b11c............
            b11c............
            b11c.........cc.
            b11c........cbbc
            b11c........cbbc
            b11c.......bdcc.
            b11c.......bdbb.
            b11c......bddc..
            b11bccc...bdbb..
            b11bbbbcccddc...
            b11bcccbccdbb...
            b11b..ccbddc....
            b11b...ccdbbc...
            b11b...bddcbc...
            b11b...bdbbcbc..
            b11b..bddc.fbc..
            b11b..bdbb.fbf..
            b11b.bddc..fcf..
            b11b.bdbb..fcf..
            b11bbddc...fcf..
            b11bbdbb...fcf..
            b11bddc...cfcfc.
            b11ddbb..cbfcfbc
            b1dddc...cdfffdc
            b1ddbb...cdcfcdc
            cdddc....cbdddbc
            cddbb....cbbbbbc
            cddc.....cbbbbbc
            cdbb.....cbbbbbc
            .cc......cbbbbbc
            .........cbbbbbc
            .........cbbbbbc
            .........cbbbbbc
            .........8bbbbb8
            .........8bbbbb8
            .........6bbbbb6
            ..........6bbb6.
            ...........666..
    `, SpriteKind.Goal)
mySprite.setPosition(150, 95)
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555559995555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555559999555555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555559999955555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555559999995555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555559999995555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555999999999555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599999999999555555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999999999995555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555999999999999999555555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999995555555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999999955555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599999999995555555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555599999999999955555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999555555599999999999999555555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555599999999999999995555555
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555599999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555559999999995555599999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999999995555599999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555599999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599955555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599955555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599955555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599555555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599555555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999995555555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555555999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555559999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555559999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999955555599999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7111177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777771111111111111117777777777777777777777777771111
        7111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        7111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        7771111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111177777777777111111111111111111111111111111177
        7777777777777777777777777777777777777777777777777777777777777711177777777777777777777777777777777777777711177777777777777777777777777711117777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777711177777777777777777777777777711117777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111177777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777711177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777111177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777111177777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711117777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711117777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711177777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711117777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777711117777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111777777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111177777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777111177777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711177777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711117777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711117777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771117777777777777777777777777777777777777711117777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771111777777777777777777777777777777777777771117777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771111777777777777777777777777777777777777771117777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777771111777777777777777777777777777777777777771117777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777777111777777777777777777777777777777777777771117777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777777111777777777777777777777777777777777777771111777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777777111777777777777777777777777777777777777771111777777777777777777777777111777777777777777777777777
        7777777777777777711177777777777777777777777777777777777777777777111777777777777777777777777777777777777777111777777777777777777777777111777777777777777777777777
        1111117777777777711177777777777777777711111111111117777777777777111777777777777777777777777777777777777777111777777777777777777777777111177777777777777777777777
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        7777111111111111111111111111111111111111177777777111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
        7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
`)
for (let index = 0; index < 3; index++) {
    mySprite2 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 2 2 2 2 . . . . . . . 
                    . . . . . 2 2 2 2 . . . . . . . 
                    . . . . . d d 2 2 . . . . . . . 
                    . . . . 1 1 1 2 2 . . . . . . . 
                    . . . . 5 5 5 5 5 5 5 . . . . . 
                    . d 2 2 5 2 2 2 2 2 5 . . . . . 
                    . d 2 2 2 2 5 5 5 2 . . . . . . 
                    . . . . . 2 2 2 5 2 . . . . . . 
                    . . . . 2 2 2 2 5 2 2 . . . . . 
                    . . . . 2 2 2 2 2 2 2 . . . . . 
                    . . . . 5 5 5 5 5 5 5 . . . . . 
                    . . . . . . 2 . . 2 . . . . . . 
                    . . . . . 2 2 . 2 2 . . . . . . 
                    . . . . . f f . f f . . . . . .
        `, SpriteKind.Obstacle)
    mySprite2.setPosition(randint(0, 110), randint(20, 90))
}
