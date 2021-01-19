class ItemSpawer extends Phaser.Physics.Arcade.Sprite {

  static minCD = 10;
  static maxCD = 18;

  constructor(scene, xPos, yPos) {
    super(scene, xPos, yPos, "Shield");
    this.scene = scene;
    this.xPos = xPos;
    this.yPos = yPos;
    this.item;

    this.triggered = false;
  }

  getItem() {
    return this.item;
  }

  spawnItem() {
    var id = Math.round(Math.random() * 2);
    switch (id) {
      case 0:
        this.item = new SpeedPowerUp(this.scene, this.xPos, this.yPos);
        break;
      case 1:
        this.item = new SlowPowerUp(this.scene, this.xPos, this.yPos);
        break;
      case 2:
        this.item = new ShieldPowerUp(this.scene, this.xPos, this.yPos);
        break;
    }
    this.triggered = false;
    this.scene.add.existing(this.item);
  }

  usePowerUp(){
    this.item.useItem();
    this.item.destroy();
    this.item = null;
  }


}