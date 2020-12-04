class WoodenCrate extends Obstacle {
  constructor(scene, xPos, yPos) {
    super(scene, xPos, yPos, "woodenCrateSprite");
    this.isDestructible = true;
    this.bulletsGoThrough = false;
    this.hitPoints = 2;
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
