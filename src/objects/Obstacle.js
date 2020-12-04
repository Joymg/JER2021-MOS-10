class Obstacle extends Phaser.Physics.Arcade.Sprite{
    constructor(scene,xPos,yPos,sprite){
        super(scene,xPos,yPos,sprite)
        this.isDestructible;
        this.bulletsGoThrough;
    }
}