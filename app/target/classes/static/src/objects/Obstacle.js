class Obstacle extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, xPos, yPos, sprite) {
        super(scene, xPos, yPos, sprite)
        this.isDestructible;
        this.bulletsGoThrough;
    }

    getHit(sound) {
        if (!this.bulletsGoThrough) {
            GameManager.scene.sound.play(sound);
        }
        if (this.isDestructible) {
            this.hitPoints -= 1;
            this.setTint(0xcccc99);
            if (this.hitPoints == 0) {
                this.destroy();
            }
        }
    }
}