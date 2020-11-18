class Obstacle{
    constructor(obstacleModel,xPos,yPos){
        this.model = obstacleModel;
        this.pos ={
            x:xPos,
            y:yPos
        }
        this.isDestructible;
        this.bulletsGoThrough;
    }
}