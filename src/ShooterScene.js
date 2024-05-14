export default class ShooterScene extends Phaser.Scene{
    constructor(){
        super('shooter-scene')
    }

    preload(){
        this.load.image('bg','shooter/bg.jpg')
        this.load.spritesheet('player-idle','player/Idle.png',{frameWidth: 32, frameHeight: 32})
    }

    create(){
        this.createPlayerAnimation()
        this.input.setDefaultCursor('url(target.cur), pointer');
        const bg = this.add.image(0, 0, 'bg').setOrigin(0, 0).setScale(
            this.scale.width / 600,
            this.scale.height / 424
        );
        bg.setInteractive()
        this.player = this.add.sprite(Phaser.Math.Between(0, this.scale.width), Phaser.Math.Between(0, this.scale.height),'player-idle',0).play('player-idle');
        this.player.setInteractive()
        this.player.setScale(1.3)

        this.time_respawn = this.time.addEvent({
            delay: 5000,
            callback: this.randomizePositions,
            callbackScope: this,
            loop: true
        });

        this.player.on('pointerdown', () => this.kill());

        bg.on('pointerdown', () => console.log('click'));
    }

    update(){
    }

    createPlayerAnimation(){
		this.anims.create({
			key: 'player-idle',
			frames: this.anims.generateFrameNumbers('player-idle', { start: 0, end: 10 }),
			repeat: -1
		})
	}

    randomizePositions(){
        this.player.setPosition(Phaser.Math.Between(0, this.scale.width), Phaser.Math.Between(0, this.scale.height))
    }
    
    kill(){
        // this.time_respawn.destroy();
        this.randomizePositions()
    }
}