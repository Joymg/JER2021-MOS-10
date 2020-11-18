class IronCrate extends Obstacle{
    constructor(obstacleModel,xPos,yPos){
        super(obstacleModel,xPos,yPos)
        this.isDestructible = false;
        this.bulletsGoThrough = false;
    }
}