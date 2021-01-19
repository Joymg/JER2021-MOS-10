class WoodenCrate extends Obstacle {
  constructor(scene, xPos, yPos) {
    super(scene, xPos, yPos, "woodenCrateSprite");
    this.isDestructible = true;
    this.bulletsGoThrough = false;
    this.hitPoints = 2;
    this.setScale(0.034);
  }

  getHit(sound) {
    super.getHit("woodImpact"+sound);
  }
}
