class IronCrate extends Obstacle{
    constructor(scene,xPos,yPos){
        super(scene,xPos,yPos,"ironCrateSprite")
        this.isDestructible = false;
        this.bulletsGoThrough = false;
        this.setScale(0.05);
    }

    getHit() {
        if (this.isDestructible) {
          this.hitPoints -= 1;
          this.setTint(0xcccc99);
          if (this.hitPoints == 0) {
            this.destroy();
          }
        }
      }
}