class WoodenCrate extends Obstacle{
    constructor(obstacleModel,xPos,yPos){
        super(obstacleModel,xPos,yPos)
        this.isDestructible = true;
        this.bulletsGoThrough = false;
    }
}