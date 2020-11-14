class GameplayScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameplayScene" });
    this.cursors;
    this.player;
    this.pointer;
    console.log("GameplayScene#constructor");
  }

  init() {
    console.log("GameplayScene#init");
  }

  preload() {
    console.log("GameplayScene#preload");
    this.load.image("sky", "../assets/sky.png");
    this.load.image("bottomSprite", "../assets/star.png");
    this.load.image("topSprite", "../assets/platform.png");
  }

  create() {
    this.add.image(400, 300, "sky").setAngle(180).setTint(0x0ff00f);
    this.player = [
      this.add.image(400, 300, "bottomSprite").setScale(4),
      this.add.image(400, 300, "topSprite").setScale(0.3).setOrigin(0.1),
    ];
  }

  update() {
    this.cursors = this.input.keyboard.createCursorKeys();
    var alpha = Phaser.Math.Angle.Between(this.player[0].x,this.player[0].y,this.input.mousePointer.x,this.input.mousePointer.y)
    
    alpha = Phaser.Math.RadToDeg(alpha);

    this.tweens.add({
        targets:this.player[1],
        angle: alpha,
        duration:0
    })
    if (this.cursors.left.isDown) {
      this.player.forEach((element) => {
        element.x -= 5;
      });
    } else if (this.cursors.right.isDown) {
      this.player.forEach((element) => {
        element.x += 5;
      });
    }
    if (this.cursors.up.isDown) {
      this.player.forEach((element) => {
        element.y -= 5;
      });
    } else if (this.cursors.down.isDown) {
      this.player.forEach((element) => {
        element.y += 5;
      });
    }
  }
}
