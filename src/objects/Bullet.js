class Bullet{
    constructor(model,xPos,yPos,angle){
        this.model= model;
        this.pos ={
            x:xPos,
            y:yPos
        }
        this.angle = angle;
    }

    fire(x,y,angle){
        this.body.rest(x,y,angle);
         this.setActive(true);
         this.setVisible(true);
         this.setVelovityY(-900);
    }
}