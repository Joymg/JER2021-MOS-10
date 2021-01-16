class Pit extends Obstacle{
    constructor(scene,xPos,yPos){
        super(scene,xPos,yPos,"pitSprite")
        this.isDestructible = false;
        this.bulletsGoThrough = true;
        this.setScale(0.9);
    }

}