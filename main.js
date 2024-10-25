const config = {
    type: Phaser.AUTO,
    width: 400,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

let player;
let cursors;

const game = new Phaser.Game(config);

function preload() {
}

function create() {
    player = this.add.rectangle(400, 300, 50, 50, 0x00ff00);
    
    this.physics.add.existing(player);
    
    player.body.setCollideWorldBounds(true);
    
    cursors = this.input.keyboard.addKeys({
        w: Phaser.Input.Keyboard.KeyCodes.W,
        a: Phaser.Input.Keyboard.KeyCodes.A,
        s: Phaser.Input.Keyboard.KeyCodes.S,
        d: Phaser.Input.Keyboard.KeyCodes.D
    });
}

function update() {
    const speed = 400;
    player.body.setVelocity(0);

    if (cursors.w.isDown) {
        player.body.setVelocityY(-speed);
    } else if (cursors.s.isDown) {
        player.body.setVelocityY(speed);
    }

    if (cursors.a.isDown) {
        player.body.setVelocityX(-speed);
    } else if (cursors.d.isDown) {
        player.body.setVelocityX(speed);
    }

    player.body.velocity.normalize().scale(speed);
}