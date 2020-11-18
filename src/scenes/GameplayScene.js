class GameplayScene extends Phaser.Scene {
  constructor() {
    super({ key: "GameplayScene" });
    this.cursors;
    this.character;

    this.pointer;

    this.char2;
    this.cursors2;
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
    this.load.image("bulletSprite","../assets/bomb.png");
  }

  create() {
    this.add.image(400, 300, "sky").setAngle(180).setTint(0x0ff00f);

    this.createCharacters();

    // this.bulletGroup = new BulletGroup(this);
    // this.input.on("pointerdown",pointer =>{
    //   this.character.shoot();
    // })
    
    this.cursors = this.input.keyboard.createCursorKeys();
    this.cursors2 = this.input.keyboard.addKeys({
      up: Phaser.Input.Keyboard.KeyCodes.W,
      down: Phaser.Input.Keyboard.KeyCodes.S,
      left: Phaser.Input.Keyboard.KeyCodes.A,
      right: Phaser.Input.Keyboard.KeyCodes.D,
    });
  }

  update() {
    var alpha = Phaser.Math.Angle.Between(
      this.character.bottomSprite.x,
      this.character.bottomSprite.y,
      this.input.mousePointer.x,
      this.input.mousePointer.y
    );
    var beta = Phaser.Math.Angle.Between(
      this.char2.bottomSprite.x,
      this.char2.bottomSprite.y,
      this.input.mousePointer.x,
      this.input.mousePointer.y
    );

    alpha = Phaser.Math.RadToDeg(alpha);

    this.tweens.add({
      targets: this.character.topSprite,
      angle: alpha,
      duration: 0,
    });
    this.tweens.add({
      targets: this.char2.topSprite,
      rotation: beta,
      duration: 0,
    });
    if (this.cursors.left.isDown) {
      this.character.moveLeft();
    } else if (this.cursors.right.isDown) {
      this.character.moveRight();
    } else {
      this.character.stopX();
    }
    if (this.cursors.up.isDown) {
      this.character.moveUp();
    } else if (this.cursors.down.isDown) {
      this.character.moveDown();
    } else {
      this.character.stopY();
    }
    this.character.updateTopSide();

    if (this.cursors2.left.isDown) {
      this.char2.moveLeft();
    } else if (this.cursors2.right.isDown) {
      this.char2.moveRight();
    } else {
      this.char2.stopX();
    }
    if (this.cursors2.up.isDown) {
      this.char2.moveUp();
    } else if (this.cursors2.down.isDown) {
      this.char2.moveDown();
    } else {
      this.char2.stopY();
    }
    this.char2.updateTopSide();
  }

  createCharacters(map) {
    var bot = this.physics.add.image(600, 300, "bottomSprite").setScale(4);
    var top = this.physics.add
      .image(600, 300, "topSprite")
      .setScale(0.3)
      .setOrigin(0.1,0.5);
    this.character = new Character("Aricato", 600, 300, 0, top, bot);

    var bot2 = this.physics.add
      .image(200, 300, "bottomSprite")
      .setScale(4)
      .setTint(0xfedcba);
    var top2 = this.physics.add
      .image(200, 300, "topSprite")
      .setScale(0.3)
      .setOrigin(0.1,0.5)
      .setTint(0xff0000);
    this.char2 = new Character("Tankitty", 200, 300, 0, top2, bot2);


    this.physics.add.collider(
      this.character.bottomSprite,
      this.char2.bottomSprite
    );
  }
}
