class IronCrate extends Obstacle {
  constructor(scene, xPos, yPos) {
    super(scene, xPos, yPos, "ironCrateSprite")
    this.isDestructible = false;
    this.bulletsGoThrough = false;
    this.setScale(0.034);
  }

  getHit(sound) {
    super.getHit("metalImpact"+sound);
  }
}