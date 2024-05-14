import Phaser from 'phaser'

import HelloWorldScene from './HelloWorldScene'
import ShooterScene from './ShooterScene'

const config = {
	type: Phaser.AUTO,
	parent: 'app',
	width: window.innerWidth,
	height: window.innerHeight,
	debug: true,
	physics: {
		default: 'matter',
		matter: {
			// debug: true,
		},
	},
	scene: [ShooterScene,HelloWorldScene],
}

export default new Phaser.Game(config)
